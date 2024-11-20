import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, Heart, Package, ShieldCheck, Truck } from 'lucide-react';
import ProductCard from './components/ProductCard';
import { Product } from './types';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h1 className="text-2xl font-bold text-purple-500">DarkMart</h1>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#" className="hover:text-purple-500 transition">Home</a>
              <a href="#" className="hover:text-purple-500 transition">Shop</a>
              <a href="#" className="hover:text-purple-500 transition">Categories</a>
              <a href="#" className="hover:text-purple-500 transition">About</a>
            </div>

            <div className="flex items-center space-x-4">
              <button className="hover:text-purple-500 transition">
                <Search size={20} />
              </button>
              <button className="hover:text-purple-500 transition">
                <Heart size={20} />
              </button>
              <button className="relative hover:text-purple-500 transition">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-purple-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-900 py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-purple-500 transition">Home</a>
              <a href="#" className="hover:text-purple-500 transition">Shop</a>
              <a href="#" className="hover:text-purple-500 transition">Categories</a>
              <a href="#" className="hover:text-purple-500 transition">About</a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-purple-900 to-black">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Discover Amazing Products</h1>
            <p className="text-xl text-gray-300 mb-8">Shop the latest trends with our curated collection of premium products.</p>
            <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg font-semibold transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <Truck className="text-purple-500" size={32} />
              <div>
                <h3 className="font-semibold">Free Shipping</h3>
                <p className="text-gray-400">On orders over $100</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ShieldCheck className="text-purple-500" size={32} />
              <div>
                <h3 className="font-semibold">Secure Payment</h3>
                <p className="text-gray-400">100% secure payment</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Package className="text-purple-500" size={32} />
              <div>
                <h3 className="font-semibold">Easy Returns</h3>
                <p className="text-gray-400">30 day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={() => setCartCount(prev => prev + 1)}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">DarkMart</h3>
              <p>Your one-stop shop for amazing products.</p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-500 transition">About Us</a></li>
                <li><a href="#" className="hover:text-purple-500 transition">Contact</a></li>
                <li><a href="#" className="hover:text-purple-500 transition">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-500 transition">Electronics</a></li>
                <li><a href="#" className="hover:text-purple-500 transition">Fashion</a></li>
                <li><a href="#" className="hover:text-purple-500 transition">Home & Living</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Newsletter</h4>
              <p className="mb-4">Subscribe to get special offers and updates.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-r-lg transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>© 2024 DarkMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;