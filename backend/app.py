from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from xgboost import XGBClassifier
from sklearn.metrics import accuracy_score

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

#  Load the dataset
data = pd.read_csv('data_months.csv')

#  Fix invalid time format
def fix_invalid_time(time_str):
    try:
        return pd.to_datetime(time_str, format='%H:%M.%S', errors='raise')
    except ValueError:
        return pd.to_datetime('23:59.59', format='%H:%M.%S')  # Replace invalid time

data['Time'] = data['Time'].apply(fix_invalid_time)

# ✅ Combine Date & Time into DateTime
data['DateTime'] = pd.to_datetime(data['Date'] + ' ' + data['Time'].dt.strftime('%H:%M:%S'), format='%d-%m-%Y %H:%M:%S')

# ✅ Feature Engineering
data['Hour'] = data['DateTime'].dt.hour
data['Minute'] = data['DateTime'].dt.minute
data['DayOfWeek'] = data['DateTime'].dt.dayofweek
data['IsWeekend'] = (data['DayOfWeek'] >= 5).astype(int)

# ✅ Convert categorical columns
data['Launch Frequency'] = pd.to_numeric(data['Launch Frequency'], errors='coerce')
data['Window Status'] = data['Window Status'].map({'Active': 1, 'Inactive': 0})

# ✅ Handle missing values
data['Launch Frequency'] = data['Launch Frequency'].fillna(data['Launch Frequency'].median())

# ✅ Define target column
data['App_Loader'] = data['Window Status'].apply(lambda x: 1 if x == 1 else 0)

# ✅ Select features & target
features = data[['Hour', 'Minute', 'DayOfWeek', 'IsWeekend', 'Launch Frequency', 'Window Status']]
target = data['App_Loader']

# ✅ Split dataset
X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.2, random_state=42)

# ✅ Train models
rf_model = RandomForestClassifier(n_estimators=200, max_depth=10, random_state=42)
rf_model.fit(X_train, y_train)

gb_model = GradientBoostingClassifier(n_estimators=200, learning_rate=0.1, max_depth=5, random_state=42)
gb_model.fit(X_train, y_train)

xgb_model = XGBClassifier(n_estimators=200, learning_rate=0.1, max_depth=5, random_state=42)
xgb_model.fit(X_train, y_train)

# ✅ Choose the best model
rf_accuracy = accuracy_score(y_test, rf_model.predict(X_test))
gb_accuracy = accuracy_score(y_test, gb_model.predict(X_test))
xgb_accuracy = accuracy_score(y_test, xgb_model.predict(X_test))

best_model = rf_model
if gb_accuracy > rf_accuracy and gb_accuracy > xgb_accuracy:
    best_model = gb_model
elif xgb_accuracy > rf_accuracy:
    best_model = xgb_model

# ✅ API Endpoint to Predict Apps Based on User Input
@app.route('/predict', methods=['POST'])
def predict():
    data_request = request.get_json()
    user_hour = data_request.get("hour")

    # ✅ Filter data for the given hour
    filtered_data = data[(data['Hour'] == user_hour) & (data['Window Status'] == 1)]
    if filtered_data.empty:
        return jsonify({"message": f"No data found for {user_hour}:00", "apps": []})

    # ✅ Select top 3 to 5 apps based on Launch Frequency
    num_apps = min(3 + (hash(str(user_hour)) % 3), 5)  # Varies between 3, 4, or 5 apps
    filtered_data = filtered_data.sort_values(by='Launch Frequency', ascending=False).head(num_apps)
    active_apps = filtered_data['App'].unique().tolist()
    
    return jsonify({
        "hour": user_hour,
        "apps": active_apps
    })

# ✅ Run Flask App
if __name__ == '__main__':
    app.run(debug=True)
