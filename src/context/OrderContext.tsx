import { createContext } from "react";
import { OrderContextType } from "types/common";

const defaultValue: OrderContextType = {
  orders: [],
  setOrders: () => {},
  orderId: null,
  setOrderId: () => {},
};

const OrderContext = createContext<OrderContextType>(defaultValue);
export default OrderContext;
