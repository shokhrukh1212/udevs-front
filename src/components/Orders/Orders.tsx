import { Box, Typography } from "@mui/material";
import OrderItem from "components/OrderItem";
import Grid from "@mui/material/Grid2";
import orders from "../../local-json/data.json";

const Orders = () => {
  return (
    <Grid container spacing={2} sx={{ mt: 5 }}>
      {orders.length > 0 &&
        orders.map((order) => {
          const { id, type, items } = order;
          const items_length = items.length || 0;
          const title =
            type === 1
              ? `Новый (${items_length})`
              : type === 2
              ? `Заготовка (${items_length})`
              : type === 3
              ? `Готов (${items_length})`
              : `Курьер в пути (${items_length})`;
          return (
            <Grid size={3} key={id}>
              <Box
                component="div"
                sx={{
                  backgroundColor: "blue",
                  p: 2,
                  py: 1,
                  position: "relative",
                  top: 0,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
              >
                <Typography variant="h5" sx={{ color: "#fff" }} gutterBottom>
                  {title}
                </Typography>
              </Box>
              <Box component="div" sx={{ backgroundColor: "#F5F5F5", p: 2 }}>
                {items.length > 0 &&
                  items.map((item) => {
                    const {
                      order_id,
                      cost,
                      payment_method,
                      where_eat,
                      comment,
                      ordered_time,
                      orders,
                    } = item;

                    return (
                      <OrderItem
                        order_id={order_id}
                        cost={cost}
                        payment_method={payment_method}
                        where_eat={where_eat}
                        comment={comment}
                        ordered_time={ordered_time}
                        orders={orders}
                      />
                    );
                  })}
              </Box>
            </Grid>
          );
        })}

      {/* 
      <Grid size={3}>
        <Box
          component="div"
          sx={{
            backgroundColor: "blue",
            p: 2,
            pt: 1,
            pb: 1,
            position: "relative",
            top: 0,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        >
          <Typography variant="h5" sx={{ color: "#fff" }} gutterBottom>
            New Items
          </Typography>
        </Box>
        <Box component="div" sx={{ backgroundColor: "#F5F5F5", p: 2 }}>
          <OrderItem>
            <div>Hello World</div>
          </OrderItem>
          <OrderItem>
            <div>Hello World</div>
          </OrderItem>
          <OrderItem>
            <div>Hello World</div>
          </OrderItem>
        </Box>
      </Grid>

      <Grid size={3}>
        <Box
          component="div"
          sx={{
            backgroundColor: "blue",
            p: 2,
            pt: 1,
            pb: 1,
            position: "relative",
            top: 0,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        >
          <Typography variant="h5" sx={{ color: "#fff" }} gutterBottom>
            New Items
          </Typography>
        </Box>
        <Box component="div" sx={{ backgroundColor: "#F5F5F5", p: 2 }}>
          <OrderItem>
            <div>Hello World</div>
          </OrderItem>
          <OrderItem>
            <div>Hello World</div>
          </OrderItem>
          <OrderItem>
            <div>Hello World</div>
          </OrderItem>
        </Box>
      </Grid>

      <Grid size={3}>
        <Box
          component="div"
          sx={{
            backgroundColor: "blue",
            p: 2,
            pt: 1,
            pb: 1,
            position: "relative",
            top: 0,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        >
          <Typography variant="h5" sx={{ color: "#fff" }} gutterBottom>
            New Items
          </Typography>
        </Box>
        <Box component="div" sx={{ backgroundColor: "#F5F5F5", p: 2 }}>
          <OrderItem>
            <div>Hello World</div>
          </OrderItem>
          <OrderItem>
            <div>Hello World</div>
          </OrderItem>
          <OrderItem>
            <div>Hello World</div>
          </OrderItem>
        </Box>
      </Grid> */}
    </Grid>
  );
};

export default Orders;
