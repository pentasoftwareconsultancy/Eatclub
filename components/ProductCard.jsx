import React from 'react';
import { Info } from 'lucide-react';

export const ProductCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full overflow-hidden group">
      {/* Image Area */}
      <div className="relative h-[220px] overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        {item.isBestseller && (
          <div className="absolute top-0 left-0 bg-[#0095f6] text-white text-[10px] font-bold px-2 py-1 rounded-br-lg shadow-sm z-10">
            Bestseller
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title Row with Veg/Non-Veg Icon */}
        <div className="flex items-start gap-2.5 mb-2">
          <div className={`mt-1 flex-shrink-0 w-4 h-4 border ${item.isVeg ? 'border-green-600' : 'border-red-600'} flex items-center justify-center p-[2px] rounded-[2px]`}>
            <div className={`w-full h-full rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
          </div>
          <h3 className="text-[15px] font-semibold text-gray-800 leading-snug">{item.name}</h3>
        </div>

        <p className="text-gray-500 text-xs mb-5 line-clamp-3 leading-relaxed">
          {item.description}
        </p>

        <div className="mt-auto">
          {/* Price and Add Button Row */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-gray-800 font-medium text-sm">₹ {item.price}</span>
              {item.originalPrice && (
                <span className="text-gray-400 text-xs line-through decoration-gray-400">₹ {item.originalPrice}</span>
              )}
            </div>
            
            <button className="bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 px-5 py-1.5 rounded text-xs font-bold tracking-wide transition uppercase shadow-sm">
              ADD +
            </button>
          </div>

          {/* Membership Price Banner - Exact Screenshot Match */}
          {item.membershipPrice && (
            <div className="bg-[#eafffe] border border-[#85e0dd] rounded px-3 py-2 flex items-center justify-center gap-1.5 text-xs text-gray-900">
              <span className="font-bold text-sm">₹ {item.membershipPrice}</span>
              <span>with</span>
              {/* EatClub Mini Logo Block */}
              <div className="bg-black text-white px-1 py-[2px] flex flex-col items-center justify-center leading-none rounded-[1px]" style={{ height: '18px', width: '28px' }}>
                <span className="text-[7px] font-bold tracking-wider" style={{ lineHeight: '0.8' }}>EAT</span>
                <span className="text-[7px] font-bold tracking-wider" style={{ lineHeight: '0.8' }}>CLUB</span>
              </div>
              <span className="ml-[1px]">membership</span>
              <Info size={12} className="text-gray-400 ml-auto" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};