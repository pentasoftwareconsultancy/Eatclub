import React from 'react';
import { Star, Clock, Heart } from 'lucide-react';
import { Restaurant } from '../types';

interface Props {
  data: Restaurant;
}

export const RestaurantCard: React.FC<Props> = ({ data }) => {
  const discountedPrice = Math.round(data.priceForTwo * (1 - data.discountPercentage / 100));

  return (
    <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={data.imageUrl} 
          alt={data.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/60 to-transparent"></div>
        
        {/* Discount Tag */}
        <div className="absolute bottom-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded shadow-lg">
          FLAT {data.discountPercentage}% OFF
        </div>

        {/* Pro Tag */}
        {data.isPro && (
          <div className="absolute top-3 left-3 bg-yellow-400 text-black text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wide">
            PRO
          </div>
        )}

        {/* Favorite Button */}
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-red-500 transition">
          <Heart size={18} />
        </button>

        {/* Time */}
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-gray-800 flex items-center gap-1 shadow">
          <Clock size={12} />
          {data.deliveryTime}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-bold text-gray-900 truncate pr-2">{data.name}</h3>
          <div className="flex items-center gap-1 bg-green-700 text-white text-xs font-bold px-1.5 py-0.5 rounded">
            {data.rating} <Star size={10} fill="currentColor" />
          </div>
        </div>
        
        <p className="text-gray-500 text-sm mb-3 truncate">{data.cuisine.join(', ')}</p>
        
        <div className="mt-auto pt-3 border-t border-dashed border-gray-200 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium">PRICE FOR TWO</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm line-through">₹{data.priceForTwo}</span>
              <span className="text-gray-900 font-bold">₹{discountedPrice}</span>
            </div>
          </div>
          <div className="text-right">
             <span className="text-xs text-gray-400 font-medium block">DISTANCE</span>
             <span className="text-xs font-bold text-gray-700">{data.distance || '2.0 km'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};