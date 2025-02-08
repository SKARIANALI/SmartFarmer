import React, { useState } from 'react';
import { Tractor, Map, Ruler, Droplets, PenSquare, X } from 'lucide-react';

interface FarmDetails {
  name: string;
  area: string;
  soilType: string;
  crops: string;
  location: string;
}

const FarmManagement = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [farmDetails, setFarmDetails] = useState<FarmDetails>({
    name: 'Green Valley Farm',
    area: '5.5',
    soilType: 'Clay Loam',
    crops: 'Rice, Wheat',
    location: 'Karnataka, India'
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedDetails = {
      name: formData.get('name') as string,
      area: formData.get('area') as string,
      soilType: formData.get('soilType') as string,
      crops: formData.get('crops') as string,
      location: formData.get('location') as string
    };
    setFarmDetails(updatedDetails);
    setShowEditForm(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Farm Management</h1>
        <button
          onClick={() => setShowEditForm(true)}
          className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          <PenSquare className="w-5 h-5 mr-2" />
          Edit Farm Details
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Farm Details */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Tractor className="w-6 h-6 text-green-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-700">Farm Details</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Farm Name</span>
              <span className="font-semibold">{farmDetails.name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Total Area</span>
              <span className="font-semibold">{farmDetails.area} hectares</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Soil Type</span>
              <span className="font-semibold">{farmDetails.soilType}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Current Crops</span>
              <span className="font-semibold">{farmDetails.crops}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Location</span>
              <span className="font-semibold">{farmDetails.location}</span>
            </div>
          </div>
        </div>

        {/* Resource Usage */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Droplets className="w-6 h-6 text-blue-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-700">Resource Usage</h2>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Water Usage</span>
                <span className="text-sm font-semibold">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Fertilizer Stock</span>
                <span className="text-sm font-semibold">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Farm Details Modal */}
      {showEditForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Edit Farm Details</h2>
              <button 
                onClick={() => setShowEditForm(false)}
                className="text-gray-500 hover:text-gray-700 p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Farm Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={farmDetails.name}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
                  Total Area (hectares)
                </label>
                <input
                  type="number"
                  id="area"
                  name="area"
                  defaultValue={farmDetails.area}
                  step="0.1"
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="soilType" className="block text-sm font-medium text-gray-700 mb-1">
                  Soil Type
                </label>
                <select
                  id="soilType"
                  name="soilType"
                  defaultValue={farmDetails.soilType}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                >
                  <option value="Clay Loam">Clay Loam</option>
                  <option value="Sandy Loam">Sandy Loam</option>
                  <option value="Silt Loam">Silt Loam</option>
                  <option value="Clay">Clay</option>
                  <option value="Sandy">Sandy</option>
                </select>
              </div>
              <div>
                <label htmlFor="crops" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Crops
                </label>
                <input
                  type="text"
                  id="crops"
                  name="crops"
                  defaultValue={farmDetails.crops}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Separate crops with commas"
                  required
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  defaultValue={farmDetails.location}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowEditForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmManagement;