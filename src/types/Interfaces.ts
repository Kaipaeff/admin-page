import { ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

export type IProductItemPropsType = {
  index?: number;
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
};

export type IProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export interface IProductsProps {
  allProducts: IProduct[] | [];
  setAllProducts?: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export interface IToolbarProps {
  title?: string;
  icon?: ReactNode;
  button?: ReactNode;
}

export interface IMainProps {
  children: ReactNode;
}

export interface CustomLinkProps {
  children: ReactNode;
  to: string;
}

export interface ISingleProductPageProps extends IProductsProps {}
export interface IAdminControlPageProps extends IProductsProps {}
export interface IHomePageProps extends IProductsProps {}
