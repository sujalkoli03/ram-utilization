import React from 'react';
import { Bar, Pie, Line, PolarArea, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const data = [
  { app: 'VSCode', cpu: 3.73, memory: 356787, frequency: 1, status: 'Active', duration: 52 },
  { app: 'Outlook', cpu: 0.53, memory: 542417, frequency: 1, status: 'Active', duration: 10 },
  { app: 'Windows Terminal', cpu: 3.05, memory: 688508, frequency: 1, status: 'Inactive', duration: 19 },
  { app: 'Jira', cpu: 4.07, memory: 106814, frequency: 1, status: 'Inactive', duration: 26 },
  { app: 'Postman', cpu: 4.79, memory: 452944, frequency: 1, status: 'Active', duration: 29 },
];

// Prepare chart data dynamically based on input label and field
const prepareChartData = (label, field) => ({
  labels: data.map(item => item.app),
  datasets: [
    {
      label,
      data: data.map(item => item[field] || 0),  // Ensure no undefined values
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
    },
  ],
});

const Stats = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 ">
      <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r pb-8 from-blue-500 to-purple-600 text-transparent bg-clip-text">
        Application Statistics
      </h1>

      {/* CPU Usage Chart */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-blue-600 text-center mb-4">CPU Usage (%)</h2>
        <div className="chart-container flex items-center justify-center" style={{ width: '100%', height: '300px' }}>
          <Bar data={prepareChartData('CPU Usage (%)', 'cpu')} />
        </div>
      </div>

      {/* Memory Usage Chart */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-blue-600 text-center mb-4">Memory Usage (KB)</h2>
        <div className="chart-container flex items-center justify-center" style={{ width: '100%', height: '300px' }}>
          <PolarArea data={prepareChartData('Memory Usage (KB)', 'memory')} />
        </div>
      </div>

      {/* Launch Frequency Chart */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-blue-600 text-center mb-4">Launch Frequency</h2>
        <div className="chart-container flex items-center justify-center" style={{ width: '100%', height: '300px' }}>
          <Doughnut data={prepareChartData('Launch Frequency', 'frequency')} />
        </div>
      </div>

      {/* Session Duration Chart */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-blue-600 text-center mb-4">Session Duration (min)</h2>
        <div className="chart-container flex items-center justify-center" style={{ width: '100%', height: '300px' }}>
          <Line data={prepareChartData('Session Duration (min)', 'duration')} />
        </div>
      </div>

      {/* Window Status Chart */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-blue-600 text-center mb-4">Window Status</h2>
        <div className="chart-container flex items-center justify-center" style={{ width: '100%', height: '300px' }}>
          <Pie
            data={{
              labels: ['Active', 'Inactive'],
              datasets: [
                {
                  data: [
                    data.filter(item => item.status === 'Active').length,
                    data.filter(item => item.status === 'Inactive').length,
                  ],
                  backgroundColor: ['#36A2EB', '#FF6384'],
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
