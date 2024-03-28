import { ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';

export type ProductItemPropsType = {
  index: number;
  item: {
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

export interface IToolbarProps {
  title: string;
  icon?: React.ReactNode;
}

export interface IMainProps {
  children: ReactNode;
}

export interface CustomLinkProps extends LinkProps {
  children: ReactNode;
  to: string;
}
