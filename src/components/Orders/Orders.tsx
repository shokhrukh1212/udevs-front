import { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import OrderItem from "components/OrderItem";
import Grid from "@mui/material/Grid2";
import OrderContext from "context/OrderContext";

const Orders = () => {
  const { orders, orderId } = useContext(OrderContext);
  const [filteredOrders, setFilteredOrders] = useState(orders);

  useEffect(() => {
    if (orderId) {
      const filteredOrders = orders.map((orderGroup) => ({
        ...orderGroup,
        items: orderGroup.items.filter((item) =>
          item.order_id.toString().startsWith(orderId)
        ),
      }));
      setFilteredOrders(filteredOrders);
    } else {
      setFilteredOrders(orders);
    }
  }, [orders, orderId]);

  return (
    <Grid container spacing={2} sx={{ mt: 5 }}>
      {filteredOrders.length > 0 ? (
        filteredOrders.map((order) => {
          const { id, type, items } = order;
          const items_length = items.length || 0;
          let title, primary_bg;

          if (type === 1) {
            title = `Новый (${items_length})`;
            primary_bg = "#0E73F6";
          } else if (type === 2) {
            title = `Заготовка (${items_length})`;
            primary_bg = "#F8C51B";
          } else if (type === 3) {
            title = `Готов (${items_length})`;
            primary_bg = "#22C348";
          } else {
            title = `Курьер в пути (${items_length})`;
            primary_bg = "#1AC19D";
          }

          return (
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              key={id}
              sx={{
                transition: "0.5s",
                "&:hover": {
                  cursor: "pointer",
                  transform: "scale(1.02)",
                },
              }}
            >
              <Box
                component="div"
                sx={{
                  backgroundColor: `${primary_bg}`,
                  display: "flex",
                  alignItems: "center",
                  pl: 2,
                  pt: 1.5,
                  pb: 1,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
              >
                <Typography
                  component={"span"}
                  variant="subtitle1"
                  sx={{
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                  gutterBottom
                >
                  {title}
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  backgroundColor: "#F5F5F5",
                  p: 2,
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                }}
              >
                {items.length > 0 &&
                  items.map((item) => {
                    const {
                      order_id,
                      cost,
                      payment_method,
                      where_eat,
                      comment,
                      completed,
                      ordered_time,
                      orders,
                    } = item;

                    return (
                      <OrderItem
                        key={order_id}
                        order_id={order_id}
                        type={type}
                        cost={cost}
                        payment_method={payment_method}
                        where_eat={where_eat}
                        comment={comment}
                        completed={completed}
                        ordered_time={ordered_time}
                        orders={orders}
                      />
                    );
                  })}
              </Box>
            </Grid>
          );
        })
      ) : (
        <Box>No Orders Yet ...</Box>
      )}
    </Grid>
  );
};

export default Orders;
