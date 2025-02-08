import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import FarmManagement from './pages/FarmManagement';
import WeatherForecast from './pages/WeatherForecast';
import CropAdvisory from './pages/CropAdvisory';
import ResourceTracking from './pages/ResourceTracking';
import MarketPrices from './pages/MarketPrices';
import Marketplace from './pages/Marketplace';
import SoilHealth from './pages/SoilHealth';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <AuthProvider>
          <div className="min-h-screen bg-gray-50">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/farm-management" element={<FarmManagement />} />
                <Route path="/weather" element={<WeatherForecast />} />
                <Route path="/crop-advisory" element={<CropAdvisory />} />
                <Route path="/resources" element={<ResourceTracking />} />
                <Route path="/market" element={<MarketPrices />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/soil-health" element={<SoilHealth />} />
              </Route>
            </Routes>
          </div>
        </AuthProvider>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App