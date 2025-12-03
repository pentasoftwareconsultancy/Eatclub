import { GoogleGenAI, Type } from "@google/genai";
import { MenuItem, MenuCategory } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIRecommendations = async (
  query: string,
  menuItems: MenuItem[]
): Promise<string> => {
  try {
    // Summarize menu for context
    const menuContext = menuItems.slice(0, 20).map(item => 
      `${item.name} (${item.isVeg ? 'Veg' : 'Non-Veg'}) - ₹${item.price}`
    ).join('\n');

    const prompt = `
      You are a helpful food concierge for EatClub. 
      The user is asking: "${query}".
      
      Here is a sample of our menu:
      ${menuContext}

      Recommend 1-2 specific dishes from this list.
      Be brief, witty. Mention the EatClub membership price savings if applicable.
      Keep it under 50 words.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "I couldn't find a perfect match, but our Comfort Meals are legendary!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the food network right now. Try the Ghee Toor Dal Khichdi!";
  }
};

export const getMenuData = async (): Promise<{ categories: MenuCategory[], items: MenuItem[] }> => {
  const categories: MenuCategory[] = [
    { id: 'together-combos', name: 'Together Combos [FREE items of ₹118]' },
    { id: 'comfort', name: 'Comfort Meals' },
    { id: 'all-in-1', name: 'All-In-1-Meals' },
    { id: 'mini', name: 'Mini Meals' },
    { id: 'desi-box', name: 'Desi Box' },
    { id: 'biryani-thali', name: 'Dum Biryani Thali' },
    { id: 'main-course', name: 'Main Course' },
    { id: 'paratha-rolls', name: 'Paratha Rolls' },
    { id: 'desi-sandwiches', name: 'Desi Sandwiches' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'desserts', name: 'Desserts' },
  ];

  // Data matching the screenshot exactly
  const items: MenuItem[] = [
    // Together Combos
    {
      id: 'tc1',
      name: 'Any 2 All-In-1-Meals [FREE Coke & Choco Lava Cake]',
      description: 'Get Choco Lava Cake & Drink worth Rs. 118 FREE. All other offers applicable on this combo.',
      price: 519,
      membershipPrice: 363,
      imageUrl: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/5007',
      isVeg: true,
      categoryId: 'together-combos'
    },
    {
      id: 'tc2',
      name: 'Any All-In-1-Meal + Any Starter [FREE Coke & Choco Lava Cake]',
      description: 'Get Choco Lava Cake & Drink worth Rs. 118 FREE. All other offers applicable on this combo.',
      price: 439,
      membershipPrice: 307,
      imageUrl: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/5006',
      isVeg: true,
      categoryId: 'together-combos'
    },
    {
      id: 'tc3',
      name: 'Any 2 Desi Boxes [FREE Coke & Choco Lava Cake]',
      description: 'Get Choco Lava Cake & Drink worth Rs. 118 FREE. All other offers applicable on this combo.',
      price: 399,
      membershipPrice: 279,
      imageUrl: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/5004',
      isVeg: true,
      categoryId: 'together-combos'
    },
    
    // Comfort Meals
    {
      id: 'c1',
      name: 'Ghee Toor Dal Khichdi Thali',
      description: 'Toor dal khichdi with a tadka of ghee, hing, jeera, degi mirch & garam masala + Papad + Pickle + Onions.',
      price: 199,
      membershipPrice: 139,
      imageUrl: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/12090',
      isVeg: true,
      categoryId: 'comfort'
    },
    {
      id: 'c2',
      name: 'Ghee Millet Khichdi Meal [High Protein]',
      description: '[No Rice, Made in Ghee] Multigrain khichdi made with jowar, bajra, chilka moong dal & masala.',
      price: 199,
      membershipPrice: 139,
      imageUrl: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/12091',
      isVeg: true,
      categoryId: 'comfort'
    },
    {
      id: 'c3',
      name: 'Kadhi & Khichdi Meal',
      description: 'Chilka moong dal khichdi made in ghee + Tangy kadhi pakoda + Pickle + Onions.',
      price: 199,
      membershipPrice: 139,
      imageUrl: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/9003',
      isVeg: true,
      categoryId: 'comfort',
      isBestseller: true
    },
    
    // Desi Box
    {
      id: 'd1',
      name: 'Desi Dal Tadka Rice Box',
      description: 'Dal Tadka + Rice + Salad + Mint Chutney + Garlic Yogurt. Dal Chawal lovers, where you at?',
      price: 199,
      membershipPrice: 139,
      imageUrl: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/5360',
      isVeg: true,
      categoryId: 'desi-box',
      isBestseller: true
    },
    {
      id: 'd2',
      name: 'Punjabi Kadhi Pakoda Rice Box',
      description: 'Tangy, creamy, savoury Punjabi Kadhi with onion Pakodas + Rice + Salad + Mint Chutney.',
      price: 199,
      membershipPrice: 139,
      imageUrl: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/5357',
      isVeg: true,
      categoryId: 'desi-box'
    },
    // Mini Meals
    {
      id: 'm1',
      name: 'Mini Butter Chicken & Paratha',
      description: 'Creamy butter chicken served with 2 soft parathas and salad.',
      price: 249,
      membershipPrice: 189,
      imageUrl: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/1641',
      isVeg: false,
      categoryId: 'mini'
    },
    // Desi Sandwiches
    {
      id: 'ds1',
      name: 'Paneer Tikka Sandwich',
      description: 'Spicy paneer tikka filling in grilled bread with mint chutney.',
      price: 219,
      membershipPrice: 159,
      imageUrl: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/11504',
      isVeg: true,
      categoryId: 'desi-sandwiches'
    },
    {
      id: 'ds2',
      name: 'Chicken Keema Sandwich',
      description: 'Spiced chicken keema stuffed in grilled bread.',
      price: 249,
      membershipPrice: 179,
      imageUrl: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/11516',
      isVeg: false,
      categoryId: 'desi-sandwiches'
    },
    // Beverages
    {
      id: 'bev1',
      name: 'Masala Lemonade',
      description: 'Refreshing lemonade with a desi twist of masala.',
      price: 99,
      membershipPrice: 69,
      imageUrl: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/40',
      isVeg: true,
      categoryId: 'beverages'
    },
    {
      id: 'bev2',
      name: 'Classic Coke (330ml)',
      description: 'The classic refreshing Coca-Cola.',
      price: 59,
      membershipPrice: 59,
      imageUrl: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/9136',
      isVeg: true,
      categoryId: 'beverages'
    },
    // Desserts
    {
      id: 'des1',
      name: 'Choco Lava Cake',
      description: 'Warm chocolate cake with a gooey molten center.',
      price: 119,
      membershipPrice: 89,
      imageUrl: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/131',
      isVeg: true,
      categoryId: 'desserts'
    },
    {
      id: 'des2',
      name: 'Gulab Jamun (2 pcs)',
      description: 'Soft and spongy milk solids soaked in sugar syrup.',
      price: 99,
      membershipPrice: 69,
      imageUrl: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/1043',
      isVeg: true,
      categoryId: 'desserts'
    }
  ];

  return { categories, items };
};