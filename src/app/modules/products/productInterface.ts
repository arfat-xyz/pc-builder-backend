import { Model } from 'mongoose';

export type IReviews = {
  name: string;
  email: string;
  image: string;
  comment: string;

  rating: number;
};
export type IProduct = {
  image: string;
  productName: string;
  category: string;
  price: number;
  status: boolean;
  description: string;
  keyFeatures: string[];
  reviews: IReviews[];
};
export type IProdcutModel = Model<IProduct, Record<string, unknown>>;

export type IProductFilters = {
  productName?: string;
  category?: string;
  description?: string;
  keyFeatures?: string;
  searchTerm?: string;
};
