export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  membershipPrice?: number;
  imageUrl: string;
  isVeg: boolean;
  isBestseller?: boolean;
  rating?: number;
  votes?: number;
  categoryId: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon?: React.ReactNode; // We'll handle icons in the component mapping for simplicity in serializable types
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  imageUrl: string;
  rating: number;
  cuisine: string[];
  priceForTwo: number;
  discountPercentage: number;
  deliveryTime: string;
  distance?: string;
  isPro?: boolean;
}