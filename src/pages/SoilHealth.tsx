import React, { useState } from 'react';
import { Leaf, Droplets, ThermometerSun, AlertTriangle, Download, TrendingUp, BookOpen, X } from 'lucide-react';

const SoilHealth = () => {
  const [showLibrary, setShowLibrary] = useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Soil Health Monitor</h1>
        <button
          onClick={() => setShowLibrary(true)}
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <BookOpen className="w-5 h-5 mr-2" />
          Knowledge Library
        </button>
      </div>

      {/* Current Readings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <ThermometerSun className="w-6 h-6 text-orange-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-700">pH Level</h2>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">6.8</div>
          <div className="flex items-center text-green-600">
            <span className="text-sm">Optimal Range (6.0-7.0)</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Droplets className="w-6 h-6 text-blue-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-700">Moisture</h2>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">42%</div>
          <div className="flex items-center text-yellow-600">
            <span className="text-sm">Slightly Low (Optimal: 50-60%)</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Leaf className="w-6 h-6 text-green-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-700">Organic Matter</h2>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">3.2%</div>
          <div className="flex items-center text-green-600">
            <span className="text-sm">Good (greater than 3%)</span>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex items-center mb-6">
          <AlertTriangle className="w-6 h-6 text-yellow-500 mr-2" />
          <h2 className="text-lg font-semibold text-gray-700">Expert Recommendations</h2>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">Moisture Management</h3>
            <p className="text-yellow-700">Consider increasing irrigation frequency. Current soil moisture is below optimal levels.</p>
            <ul className="mt-2 space-y-1 text-yellow-700 text-sm">
              <li>• Schedule irrigation for early morning or late evening</li>
              <li>• Consider mulching to retain moisture</li>
              <li>• Monitor weather forecast for rainfall patterns</li>
            </ul>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Nutrient Status</h3>
            <p className="text-green-700">Soil organic matter content is good. Continue current organic matter management practices.</p>
            <ul className="mt-2 space-y-1 text-green-700 text-sm">
              <li>• Maintain crop rotation schedule</li>
              <li>• Continue using cover crops</li>
              <li>• Apply organic compost as needed</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Historical Data */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <TrendingUp className="w-6 h-6 text-purple-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-700">Historical Data</h2>
          </div>
          <button className="flex items-center text-green-600 hover:text-green-700">
            <Download className="w-5 h-5 mr-1" />
            Export Data
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">pH Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Moisture</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organic Matter</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-02-15</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">6.8</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">42%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3.2%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-02-14</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">6.7</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">45%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3.2%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Knowledge Library Modal */}
      {showLibrary && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Farming Knowledge Library</h2>
              <button 
                onClick={() => setShowLibrary(false)}
                className="text-gray-500 hover:text-gray-700 p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="h-[600px] overflow-y-auto">
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold mb-2">Organic Farming Practices</h3>
                  <p className="text-gray-600 mb-2">Learn about sustainable farming methods that maintain soil health and biodiversity.</p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Crop rotation techniques</li>
                    <li>Natural pest control methods</li>
                    <li>Composting guidelines</li>
                  </ul>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold mb-2">Soil Management</h3>
                  <p className="text-gray-600 mb-2">Understanding soil composition and maintenance for optimal crop growth.</p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>pH balance management</li>
                    <li>Organic matter incorporation</li>
                    <li>Erosion prevention</li>
                  </ul>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold mb-2">Water Conservation</h3>
                  <p className="text-gray-600 mb-2">Efficient irrigation practices and water management strategies.</p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Drip irrigation systems</li>
                    <li>Rainwater harvesting</li>
                    <li>Moisture retention techniques</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SoilHealth;