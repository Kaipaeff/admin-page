import { ReactNode } from 'react';

export type ProductType = {
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

export interface IProductItemProps {
  index?: number;
  product: ProductType;
}

export interface IProductState {
  product: ProductType[];
}

export interface IProductsProps {
  products: ProductType[] | [];
  setProducts?: React.Dispatch<React.SetStateAction<ProductType[]>>;
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

export interface IUser {
  login: string;
  password: string;
  isAdmin: boolean;
}

export interface IUserProps {
  user: IUser;
  setUser?: React.Dispatch<React.SetStateAction<IUser>>;
}

// export interface ISingleProductPageProps extends Pick<IProductsProps, 'products'> {}
// export interface IAdminControlPageProps extends Pick<IProductsProps, 'allProducts'> {}
// export interface IHomePageProps extends IProductsProps, IUserProps {}
export interface ILayoutProps extends IUserProps {}
export interface IHeaderProps extends IUserProps {}

export interface IImageContainerProps {
  display?: string;
  fleGrow?: number;
  flexBasis?: number;
  height?: string;
  width?: string;
  flexShrink?: number;
  alignItems?: string;
  justifyContent?: string;
}

export interface IImageProps {
  maxHeight?: string;
  width?: string;
  marginRight?: string;
}

export interface IInfoProps {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  maxHeight?: string;
  width?: string;
  $gap?: string;
}

export interface ITitleProps {
  fontSize?: string;
  color?: string;
}

export interface IDescrProps {
  fontSize?: string;
  overflow?: string;
  $textOverflow?: string;
  display?: string;
  $webkitLineClamp?: string;
  $webkitBoxOrient?: string;
}

export interface IRateProps {
  display?: string;
  alignItems?: string;
  gap?: string;
}

export interface IPriceProps {
  fontSize?: string;
}
