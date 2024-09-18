import { ReactNode } from "react";

export interface IconOwnProps {
  src: string;
  alt: string;
}

interface OrderItemType {
  count: number;
  product: string;
  additions: string[];
}

export interface OrderItemProps {
  order_id: number;
  cost: number;
  payment_method: string;
  where_eat: string;
  comment: string[];
  ordered_time: string;
  orders: OrderItemType[];
  children?: ReactNode;
}
