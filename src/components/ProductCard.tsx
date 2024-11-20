import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden group">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="absolute top-4 right-4">
          <button className="bg-gray-900/80 p-2 rounded-full hover:bg-purple-600 transition">
            <Heart size={20} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-400 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-purple-500">${product.price}</span>
          <button 
            onClick={onAddToCart}
            className="bg-purple-600 hover:bg-purple-700 p-2 rounded-lg transition flex items-center space-x-2"
          >
            <ShoppingCart size={20} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;