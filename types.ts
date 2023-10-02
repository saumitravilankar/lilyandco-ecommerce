export interface Product {
  id: string;
  name: string;
  price: number;
  isFeatured: boolean;
  isNew: boolean;
  newPrice: number;
  sizes: Size[];
  colors: Color[];
  images: Image[];
  orderItems: OrderItem[];
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface Image {
  id: string;
  url: string;
}

export interface Order {
  id: string;
  user_Id: string;
  total_quantity: number;
  total_price: number;
  orderItems: OrderItem[];
  isPaid: boolean;
  phone: string;
  address: string;
  payment_id: string;
}

export interface OrderItem {
  id: string;
  quantity: number;
  price: number;
}
