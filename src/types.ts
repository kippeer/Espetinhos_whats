export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'beef' | 'chicken' | 'pork';
}

export interface CartItem extends MenuItem {
  quantity: number;
}