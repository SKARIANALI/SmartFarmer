import React from 'react';
import { Cloud, Droplets, LineChart, AlertTriangle } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Welcome to AgriAdvisor</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Weather Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Weather</h2>
            <Cloud className="w-6 h-6 text-blue-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">28°C</div>
          <p className="text-gray-600">Partly cloudy with light breeze</p>
        </div>

        {/* Irrigation Alert Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Irrigation Alert</h2>
            <Droplets className="w-6 h-6 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-green-600 mb-2">Optimal</div>
          <p className="text-gray-600">Next irrigation scheduled for tomorrow</p>
        </div>

        {/* Market Prices Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Market Prices</h2>
            <LineChart className="w-6 h-6 text-purple-500" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Rice</span>
              <span className="font-semibold text-gray-900">₹2,450/q</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Wheat</span>
              <span className="font-semibold text-gray-900">₹2,100/q</span>
            </div>
          </div>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex items-center mb-4">
          <AlertTriangle className="w-6 h-6 text-yellow-500 mr-2" />
          <h2 className="text-lg font-semibold text-gray-700">Active Alerts</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center p-4 bg-yellow-50 rounded-lg">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Pest Alert</h3>
              <p className="text-sm text-yellow-700">Potential pest infestation detected in rice field</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;