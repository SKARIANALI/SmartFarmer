import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Tractor, 
  Cloud, 
  Sprout, 
  Droplets, 
  LineChart,
  LogOut,
  User,
  ShoppingCart,
  Leaf
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

const Sidebar = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/farm-management', icon: Tractor, label: 'Farm Management' },
    { to: '/weather', icon: Cloud, label: 'Weather' },
    { to: '/crop-advisory', icon: Sprout, label: 'Crop Advisory' },
    { to: '/resources', icon: Droplets, label: 'Resources' },
    { to: '/market', icon: LineChart, label: 'Market Prices' },
    { to: '/marketplace', icon: ShoppingCart, label: 'Marketplace' },
    { to: '/soil-health', icon: Leaf, label: 'Soil Health' },
  ];

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <aside className="w-64 bg-white shadow-lg h-screen sticky top-0 flex flex-col">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold text-green-600">AgriAdvisor</h1>
      </div>

      {/* User Profile Section */}
      <div className="p-4 border-b bg-green-50">
        <div className="flex items-center space-x-3">
          <div className="bg-green-100 p-2 rounded-full">
            <User className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900 truncate">
              {user?.email}
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 mt-4">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors ${
                isActive ? 'bg-green-50 text-green-600 border-r-4 border-green-600' : ''
              }`
            }
          >
            <Icon className="w-5 h-5 mr-3" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center px-6 py-4 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors border-t"
      >
        <LogOut className="w-5 h-5 mr-3" />
        <span>Logout</span>
      </button>
    </aside>
  );
};

export default Sidebar;