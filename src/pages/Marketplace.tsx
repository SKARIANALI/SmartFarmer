import React, { useState } from 'react';
import { ShoppingCart, Package, Truck, Leaf, Shield, CreditCard, Search, Filter, MessageCircle } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  supplier: string;
  rating: number;
  stock: number;
  image: string;
  description: string;
}

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showExpertChat, setShowExpertChat] = useState(false);

  const products: Product[] = [
    {
      id: '1',
      name: 'Premium Rice Seeds (IR-8)',
      category: 'seeds',
      price: 2500,
      supplier: 'AgriGrow Solutions',
      rating: 4.8,
      stock: 500,
      image: 'https://plus.unsplash.com/premium_photo-1705404738477-24fc4e77f836?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: '',
    },
    {
      id: '2',
      name: 'Organic NPK Fertilizer',
      category: 'fertilizers',
      price: 1200,
      supplier: 'Green Earth Nutrients',
      rating: 4.6,
      stock: 1000,
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=300&h=200',
      description: 'USDA-certified organic fertilizer with balanced NPK ratio. Enriched with beneficial microorganisms.',
    },
    {
      id: '3',
      name: 'Modern Tractor (Monthly Rental)',
      category: 'equipment',
      price: 25000,
      supplier: 'FarmTech Rentals',
      rating: 4.9,
      stock: 5,
      image: 'https://images.unsplash.com/photo-1527847263472-aa5338d178b8?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Latest model with GPS guidance, climate-controlled cabin, and fuel efficiency features.',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'seeds', name: 'Seeds' },
    { id: 'fertilizers', name: 'Fertilizers' },
    { id: 'equipment', name: 'Equipment' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Marketplace</h1>
        <div className="flex gap-4">
          <button 
            onClick={() => setShowExpertChat(true)}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Ask Expert
          </button>
          <button className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Cart (0)
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <Truck className="w-8 h-8 text-green-500 mr-3" />
          <div>
            <h3 className="font-semibold">Free Delivery</h3>
            <p className="text-sm text-gray-600">On orders above ₹10,000</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <Shield className="w-8 h-8 text-green-500 mr-3" />
          <div>
            <h3 className="font-semibold">Quality Assured</h3>
            <p className="text-sm text-gray-600">Certified products</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <CreditCard className="w-8 h-8 text-green-500 mr-3" />
          <div>
            <h3 className="font-semibold">Easy Financing</h3>
            <p className="text-sm text-gray-600">Flexible payment options</p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{product.description}</p>
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-600 font-bold">₹{product.price}</span>
                <span className="text-sm text-gray-600">Stock: {product.stock}</span>
              </div>
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                Supplier: {product.supplier}
              </div>
              <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Expert Chat Modal */}
      {showExpertChat && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Chat with Agricultural Expert</h2>
              <button 
                onClick={() => setShowExpertChat(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="h-96 border rounded-lg p-4 mb-4 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-800">Hello! I'm Dr. Sharma, an agricultural expert. How can I help you today?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketplace;