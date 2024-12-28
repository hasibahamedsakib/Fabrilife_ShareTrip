export type TProduct = {
  id: number;
  title: string;
  brand: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  quantity?: number;
  description?: string;
  rating?: number;
  isModal?: boolean;
};
