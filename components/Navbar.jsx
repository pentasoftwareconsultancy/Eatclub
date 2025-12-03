import React from 'react';
import { Search, ShoppingCart, ChevronDown, Percent } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 h-[72px]">
      <div className="max-w-[1400px] mx-auto px-4 h-full flex items-center justify-between">
        {/* Left: Logo & Location */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center justify-center bg-black text-white w-20 h-10 cursor-pointer">
            <span className="font-bold text-lg tracking-widest leading-none">EAT</span>
            <span className="font-bold text-lg tracking-widest leading-none">CLUB</span>
          </div>
          
          {/* Location Picker */}
          <div className="hidden md:flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-lg transition">
            <span className="text-xs font-bold text-gray-500 tracking-wider">DELIVERY</span>
            <span className="text-sm text-gray-700 truncate max-w-[200px]">P4JP+C55, Lurín 15823, Peru</span>
            <ChevronDown size={16} className="text-red-500" />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-8">
          <button className="hidden lg:block text-gray-700 font-medium text-sm hover:text-red-500 transition">Why EatClub?</button>
          
          <button className="hidden md:flex items-center gap-1 text-gray-700 font-medium text-sm hover:text-red-500 transition">
            <Percent size={16} />
            Deals
            <ChevronDown size={14} />
          </button>
          
          <button className="flex items-center gap-2 text-gray-700 font-medium text-sm hover:text-red-500 transition">
            <ShoppingCart size={18} />
            Cart
          </button>
          
          <button className="hidden sm:block border border-gray-300 text-gray-700 px-4 py-2 rounded font-medium text-sm hover:border-gray-900 transition">
            Get the app ↗
          </button>
          
          <button className="bg-[#00a5a1] hover:bg-[#008f8b] text-white px-6 py-2 rounded font-bold text-sm transition shadow-sm">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};