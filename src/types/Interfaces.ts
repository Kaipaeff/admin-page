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
  maxHeight?: string;
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
  setUser?: React.Dispatch<React.SetStateAction<IUser>>;
}

export interface ISingleProductPageProps extends Pick<IProductsProps, 'allProducts'>, IUserProps {}
export interface IAdminControlPageProps extends Pick<IProductsProps, 'allProducts'>, IUserProps {}
export interface IHomePageProps extends IProductsProps, IUserProps {}
export interface ILayoutProps extends IUserProps {}
export interface IHeaderProps extends IUserProps {}

export interface IImageProps {
  maxHeight?: string;
  maxWidth?: string;
  display?: string;
  flexDirection?: string;
  width?: string;
  padding?: string;
  fontSize?: string;
  marginLeft?: string;
  marginRight?: string;
}

export interface IInfoProps {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  maxHeight?: string;
  width?: string;
  padding?: string;
  marginRight?: string;
}

export interface ITitleProps {
  fontSize?: string;
  marginBottom?: string;
}

export interface IDescrProps {
  fontSize?: string;
  marginBottom?: string;
}

export interface IRateProps {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
}

export interface IPriceProps {
  fontSize?: string;
  marginRight?: string;
}
