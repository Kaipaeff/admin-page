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
  showServicesButtons: boolean;
}

export interface IMainProps {
  children: ReactNode;
}

export interface CustomLinkProps {
  children: ReactNode;
  to: string;
}

export interface IUser {
  login: string;
  password: string;
  isAdmin: boolean;
}

export interface IUserProps {
  user: IUser;
  setUser?: (user: IUser) => void;
}

export interface ISingleProductPageProps extends Pick<IProductsProps, 'allProducts'>, IUserProps {}
export interface IAdminControlPageProps extends Pick<IProductsProps, 'allProducts'>, IUserProps {}
export interface IHomePageProps extends IProductsProps, IUserProps {}
export interface ILayoutProps extends IUserProps {}
export interface IHeaderProps extends IUserProps {}
