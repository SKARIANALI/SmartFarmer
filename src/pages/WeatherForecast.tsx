import React from 'react';
import { Cloud, Thermometer, Wind, Droplets, Sun, CloudRain } from 'lucide-react';

const WeatherForecast = () => {
  const weeklyForecast = [
    { day: 'Today', temp: 28, condition: 'Sunny', humidity: 65, wind: 12, icon: Sun },
    { day: 'Tomorrow', temp: 27, condition: 'Partly Cloudy', humidity: 70, wind: 10, icon: Cloud },
    { day: 'Wed', temp: 25, condition: 'Rain', humidity: 80, wind: 15, icon: CloudRain },
    { day: 'Thu', temp: 26, condition: 'Cloudy', humidity: 75, wind: 8, icon: Cloud },
    { day: 'Fri', temp: 29, condition: 'Sunny', humidity: 60, wind: 11, icon: Sun },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Weather Forecast</h1>
      
      {/* Current Weather */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <Thermometer className="w-8 h-8 text-red-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">28°C</div>
            <p className="text-gray-600">Temperature</p>
          </div>
          <div className="text-center">
            <Droplets className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">65%</div>
            <p className="text-gray-600">Humidity</p>
          </div>
          <div className="text-center">
            <Wind className="w-8 h-8 text-gray-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">12km/h</div>
            <p className="text-gray-600">Wind Speed</p>
          </div>
          <div className="text-center">
            <Cloud className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">20%</div>
            <p className="text-gray-600">Cloud Cover</p>
          </div>
        </div>
      </div>

      {/* Weekly Forecast */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 bg-green-50">
          <h2 className="text-lg font-semibold text-gray-700">5-Day Forecast</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {weeklyForecast.map((day) => {
            const Icon = day.icon;
            return (
              <div key={day.day} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
                  <div className="font-medium text-gray-900">{day.day}</div>
                  <div className="flex items-center">
                    <Icon className="w-6 h-6 text-gray-500 mr-2" />
                    <span>{day.condition}</span>
                  </div>
                  <div className="text-gray-900">{day.temp}°C</div>
                  <div className="text-gray-600">
                    <span className="inline-flex items-center">
                      <Droplets className="w-4 h-4 mr-1" />
                      {day.humidity}%
                    </span>
                  </div>
                  <div className="text-gray-600">
                    <span className="inline-flex items-center">
                      <Wind className="w-4 h-4 mr-1" />
                      {day.wind}km/h
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Weather Alerts */}
      <div className="mt-6 bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Weather Alerts</h2>
        <div className="space-y-4">
          <div className="p-4 bg-yellow-50 rounded-lg">
            <div className="flex items-center">
              <Cloud className="w-5 h-5 text-yellow-600 mr-2" />
              <div>
                <h3 className="text-sm font-medium text-yellow-800">Heavy Rain Alert</h3>
                <p className="text-sm text-yellow-700">Possibility of heavy rainfall in the next 48 hours. Consider adjusting irrigation schedules.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;