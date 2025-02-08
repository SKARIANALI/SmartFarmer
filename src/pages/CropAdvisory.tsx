import React from 'react';
import { Sprout, Droplets, Sun, ThermometerSun } from 'lucide-react';

const CropAdvisory = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Crop Advisory</h1>

      {/* Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Sprout className="w-6 h-6 text-green-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-700">Crop Recommendations</h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Recommended Crops</h3>
              <ul className="space-y-2 text-green-700">
                <li>Rice (High market demand)</li>
                <li>Wheat (Suitable weather)</li>
                <li>Pulses (Soil enrichment)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <ThermometerSun className="w-6 h-6 text-orange-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-700">Growth Conditions</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Soil Temperature</span>
              <span className="font-semibold">24°C (Optimal)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Soil Moisture</span>
              <span className="font-semibold">65% (Good)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Sunlight Hours</span>
              <span className="font-semibold">6-8 hours (Adequate)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Irrigation Schedule */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex items-center mb-4">
          <Droplets className="w-6 h-6 text-blue-500 mr-2" />
          <h2 className="text-lg font-semibold text-gray-700">Irrigation Schedule</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Monday</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">6:00 AM</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">45 mins</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Completed
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Wednesday</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">6:00 AM</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">45 mins</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Scheduled
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CropAdvisory;