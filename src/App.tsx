import { useState } from "react";
import "./App.css";
import Divider from "@mui/material/Divider";
import Header from "components/Header";
import OrdersWrapper from "components/OrdersWrapper";
import OrderContext from "context/OrderContext";
import ordersData from "./local-json/data.json";
import { OrdersProps } from "types/common";

function App() {
  const [orders, setOrders] = useState<OrdersProps[]>(ordersData);
  const [orderId, setOrderId] = useState<string | null>(null);

  return (
    <OrderContext.Provider value={{ orders, setOrders, orderId, setOrderId }}>
      <Header />
      <Divider />
      <OrdersWrapper />
    </OrderContext.Provider>
  );
}

export default App;
