export type CartItem = {
  phoneId: string;
  name: string;
  colorName: string;
  storageCapacity: string;
  quantity: number;
  price: number;
  imageUrl: string;
};

export type Cart = {
  items: CartItem[];
  total: number;
};
