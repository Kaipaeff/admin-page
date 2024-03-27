import { ReactNode } from "react";

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
  icon: React.ReactNode;
}

export interface IMainProps {
  children: ReactNode;
}
