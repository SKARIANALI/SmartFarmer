import React from 'react';
import { LineChart, TrendingUp, TrendingDown, History } from 'lucide-react';

const MarketPrices = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Market Prices</h1>

      {/* Price Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Rice</h2>
            <TrendingUp className="w-6 h-6 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">₹2,450/q</div>
          <div className="flex items-center text-green-600">
            <span className="text-sm font-medium">+5.2%</span>
            <span className="text-sm text-gray-500 ml-2">from last week</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Wheat</h2>
            <TrendingDown className="w-6 h-6 text-red-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">₹2,100/q</div>
          <div className="flex items-center text-red-600">
            <span className="text-sm font-medium">-2.1%</span>
            <span className="text-sm text-gray-500 ml-2">from last week</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Pulses</h2>
            <TrendingUp className="w-6 h-6 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">₹6,800/q</div>
          <div className="flex items-center text-green-600">
            <span className="text-sm font-medium">+3.8%</span>
            <span className="text-sm text-gray-500 ml-2">from last week</span>
          </div>
        </div>
      </div>

      {/* Price History */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center mb-6">
          <History className="w-6 h-6 text-purple-500 mr-2" />
          <h2 className="text-lg font-semibold text-gray-700">Price History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commodity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-02-15</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Rice</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹2,450/q</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    +₹120
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-02-14</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Wheat</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹2,100/q</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    -₹45
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

export default MarketPrices;