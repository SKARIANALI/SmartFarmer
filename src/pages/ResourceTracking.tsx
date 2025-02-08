import React from 'react';
import { Droplets, Leaf, Sprout, BarChart3 } from 'lucide-react';

const ResourceTracking = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Resource Tracking</h1>

      {/* Resource Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Droplets className="w-6 h-6 text-blue-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-700">Water Usage</h2>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">2,450 L</div>
          <p className="text-sm text-gray-600">Last 7 days</p>
          <div className="mt-4">
            <div className="flex justify-between mb-1 text-sm">
              <span>Usage</span>
              <span className="font-medium">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Leaf className="w-6 h-6 text-green-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-700">Fertilizer</h2>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">150 kg</div>
          <p className="text-sm text-gray-600">Stock remaining</p>
          <div className="mt-4">
            <div className="flex justify-between mb-1 text-sm">
              <span>Stock Level</span>
              <span className="font-medium">45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Sprout className="w-6 h-6 text-yellow-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-700">Seeds</h2>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">200 kg</div>
          <p className="text-sm text-gray-600">Stock remaining</p>
          <div className="mt-4">
            <div className="flex justify-between mb-1 text-sm">
              <span>Stock Level</span>
              <span className="font-medium">80%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Usage History */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center mb-6">
          <BarChart3 className="w-6 h-6 text-purple-500 mr-2" />
          <h2 className="text-lg font-semibold text-gray-700">Resource Usage History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resource</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-02-15</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Water</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">350 L</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Optimal
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-02-14</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Fertilizer</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">25 kg</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Warning
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

export default ResourceTracking;