import { ReactNode, Dispatch, SetStateAction } from "react";
import { ButtonProps } from "@mui/material";

export interface IconOwnProps {
  src: string;
  alt: string;
  styles?: Object;
}

interface OrderItemType {
  count: number;
  product: string;
  additions: string[];
}

export interface OrderItemProps {
  order_id: number;
  type?: number;
  cost: number;
  payment_method: string;
  where_eat: string;
  comment: string[];
  completed: Boolean;
  ordered_time: string;
  orders: OrderItemType[];
}

export interface OrdersProps {
  id: number;
  type: number;
  items: OrderItemProps[];
}

export interface OrderContextType {
  orders: OrdersProps[];
  setOrders: Dispatch<SetStateAction<OrdersProps[]>>;
  orderId: string | null;
  setOrderId: Dispatch<SetStateAction<string | null>>;
}

export interface ButtonOwnProps {
  text: string;
  startIcon?: ReactNode;
  color?: ButtonProps["color"];
  variant: ButtonProps["variant"];
  styles: Object;
}

export interface CommentProps {
  comment: string[];
}
