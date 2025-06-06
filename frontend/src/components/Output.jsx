import { useState } from "react";
import axios from "axios";

function App() {
  const [hour, setHour] = useState("");
  const [apps, setApps] = useState([]);
  const [message, setMessage] = useState("");

  const handlePredict = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", { hour: parseInt(hour) }, {
        headers: { "Content-Type": "application/json" }
      });
      if (response.data.apps && response.data.apps.length > 0) {
        setApps(response.data.apps);
        setMessage("");
      } else {
        setApps([]);
        setMessage(response.data.message || "No apps predicted for this hour.");
      }
    } catch (error) {
      console.error("Error fetching predictions:", error);
      setMessage("Error fetching data. Please ensure the backend is running and accessible.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-700 to-purple-500 text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center">Smart RAM Optimization</h1>
      <p className="text-lg text-center max-w-2xl">
        Optimize your system's performance by predicting and preloading frequently used apps. Our machine learning model analyzes your usage patterns to ensure a seamless experience.
      </p>
      
      <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg mt-6 max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">Predict Active Apps</h2>
        <input
          type="number"
          placeholder="Enter Hour (0-23)"
          value={hour}
          onChange={(e) => setHour(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />
        <button 
          onClick={handlePredict} 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          Predict
        </button>
        
        {message && <p className="text-center text-red-600 mt-4">{message}</p>}
        {apps.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-center mb-4">Predicted Apps:</h3>
            <div className="grid grid-cols-2 gap-4">
              {apps.map((app, index) => (
                <div key={index} className="bg-blue-100 text-blue-900 p-4 rounded-lg shadow-md text-center">
                  {app}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

