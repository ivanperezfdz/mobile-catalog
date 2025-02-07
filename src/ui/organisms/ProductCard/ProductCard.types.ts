export type ProductCardProps = {
  id: string;
  brand: string;
  name: string;
  imageUrl: string;
  price: number;
  vertical?: boolean;
  isFirstItem?: boolean;
};
