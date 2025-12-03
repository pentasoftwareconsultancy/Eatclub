import React from 'react';
import { 
  UtensilsCrossed, 
  Gift, 
  Soup, 
  LayoutGrid, 
  Utensils, 
  Package, 
  Coffee,
  Sandwich,
  ShoppingBag,
  CookingPot,
  Scroll,
  CupSoda,
  IceCream
} from 'lucide-react';

const getIcon = (id) => {
  switch (id) {
    case 'together-combos': return <ShoppingBag size={20} />; // Closest to the "bag/combo" icon
    case 'daily-biryani': return <UtensilsCrossed size={20} />;
    case 'bogo': return <Gift size={20} />;
    case 'comfort': return <Soup size={20} />;
    case 'all-in-1': return <LayoutGrid size={20} />;
    case 'mini': return <Utensils size={20} />; // Actually looks like a bowl in screenshot
    case 'desi-box': return <Package size={20} />;
    case 'biryani-thali': return <CookingPot size={20} />;
    case 'main-course': return <UtensilsCrossed size={20} />;
    case 'paratha-rolls': return <Scroll size={20} />;
    case 'desi-sandwiches': return <Sandwich size={20} />;
    case 'beverages': return <CupSoda size={20} />;
    case 'desserts': return <IceCream size={20} />;
    default: return <Coffee size={20} />;
  }
};

export const Sidebar = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="w-full md:w-[280px] bg-white md:h-[calc(100vh-72px)] md:sticky md:top-[72px] overflow-y-auto hide-scrollbar py-6 pb-20">
      <div className="px-6 mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Menu</h2>
      </div>
      
      <ul className="flex flex-col">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <li key={category.id} className="relative">
              <button
                onClick={() => onSelectCategory(category.id)}
                className={`w-full flex items-center gap-4 px-6 py-4 text-left transition-colors ${
                  isActive
                    ? 'text-gray-900 font-bold bg-[#fdfbf7]' // Active state matches screenshot text styling
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium'
                }`}
              >
                {/* Active Border Line */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-black"></div>
                )}
                
                <span className={`transition-colors flex-shrink-0 ${isActive ? 'text-gray-900' : 'text-gray-400'}`}>
                  {getIcon(category.id)}
                </span>
                
                <span className={`text-sm leading-tight ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                  {category.name}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};