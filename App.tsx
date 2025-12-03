import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { ProductCard } from './components/ProductCard';
import { AIChat } from './components/AIChat';
import { MenuItem, MenuCategory } from './types';
import { getMenuData } from './services/geminiService';
import { Search, ChefHat, Crown } from 'lucide-react';

const App: React.FC = () => {
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [items, setItems] = useState<MenuItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('together-combos');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await getMenuData();
      setCategories(data.categories);
      setItems(data.items);
      // Ensure specific ID exists before setting, otherwise fallback to first
      if (data.categories.some(c => c.id === 'together-combos')) {
        setActiveCategory('together-combos');
      } else if (data.categories.length > 0) {
        setActiveCategory(data.categories[0].id);
      }
      setLoading(false);
    };
    loadData();
  }, []);

  // Filter items based on active category
  const filteredItems = items.filter(item => item.categoryId === activeCategory);
  const currentCategoryName = categories.find(c => c.id === activeCategory)?.name;

  const getCategoryDescription = (id: string) => {
    if (id === 'together-combos') {
      return "All other offers applicable on Together Combos. Get that party started!";
    }
    return `Wholesome & delicious, these hearty ${id.replace('-', ' ')} options are so satisfying.`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row">
        {/* Sidebar Navigation */}
        <Sidebar 
          categories={categories} 
          activeCategory={activeCategory} 
          onSelectCategory={(id) => {
            setActiveCategory(id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
        />
        
        {/* Main Content */}
        <main className="flex-1 min-h-screen bg-white px-4 md:px-8 py-6">
          
          {/* Top Controls: Filters & Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar pb-2 md:pb-0">
              <label className="flex items-center gap-2 cursor-pointer border border-gray-200 bg-white px-3 py-1.5 rounded hover:shadow-sm transition select-none min-w-max">
                <div className="w-4 h-4 border border-green-600 flex items-center justify-center p-[2px] rounded-[2px]">
                   <div className="w-full h-full bg-green-600 rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-gray-600">Veg</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer border border-gray-200 bg-white px-3 py-1.5 rounded hover:shadow-sm transition select-none min-w-max">
                <div className="w-4 h-4 border border-red-600 flex items-center justify-center p-[2px] rounded-[2px]">
                   <div className="w-full h-full bg-red-600 rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-gray-600">Non Veg</span>
              </label>

              <button className="flex items-center gap-2 border border-gray-200 bg-white px-3 py-1.5 rounded hover:shadow-sm transition text-sm font-medium text-gray-600 min-w-max">
                <Crown size={14} className="text-yellow-500 fill-yellow-500" />
                Bestseller
              </button>
              
              <button className="flex items-center gap-2 border border-gray-200 bg-white px-3 py-1.5 rounded hover:shadow-sm transition text-sm font-medium text-gray-600 min-w-max">
                <ChefHat size={14} className="text-blue-500 fill-blue-500" />
                Chef's Special
              </button>
            </div>

            <div className="relative">
              <input 
                type="text" 
                placeholder="Search" 
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-full md:w-64 focus:outline-none focus:border-gray-400 placeholder-gray-400 text-gray-600"
              />
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Section Header */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-1">
              {currentCategoryName}
            </h2>
            <p className="text-gray-500 text-sm">
              {getCategoryDescription(activeCategory)}
            </p>
          </div>

          {/* Product Grid */}
          {loading ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
               {[1,2,3].map(i => (
                 <div key={i} className="h-[400px] bg-gray-50 rounded-lg animate-pulse"></div>
               ))}
             </div>
          ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredItems.length > 0 ? (
                filteredItems.map(item => (
                  <ProductCard key={item.id} item={item} />
                ))
              ) : (
                <div className="col-span-full py-12 text-center text-gray-400">
                  <p>No items found in this category.</p>
                </div>
              )}
             </div>
          )}

          {/* Toast Notification (Bottom Right) */}
          <div className="fixed bottom-6 right-6 z-40 max-w-sm w-full animate-in slide-in-from-bottom-5 fade-in duration-500 hidden md:block">
             <div className="bg-[#ffe4d6] rounded shadow-xl flex gap-4 p-4 relative overflow-hidden">
                {/* Decorative circle */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-red-100 rounded-full opacity-50"></div>
                
                <div className="flex-shrink-0 z-10">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm border border-red-100">
                      <img src="https://cdn-icons-png.flaticon.com/512/2364/2364965.png" alt="map" className="w-8 h-8 opacity-80" />
                   </div>
                </div>
                <div className="z-10">
                   <h4 className="font-bold text-gray-900 text-sm uppercase mb-1 tracking-wide">NOT DELIVERING HERE YET</h4>
                   <p className="text-xs text-gray-700 leading-relaxed font-medium">
                     We don't deliver in this area. Slowly but surely, we'll get to you very soon.
                   </p>
                </div>
             </div>
          </div>

        </main>
      </div>

      <AIChat menuItems={items} /> 
    </div>
  );
};

export default App;