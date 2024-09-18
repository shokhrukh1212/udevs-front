import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { OrderItemProps } from "types/common";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Divider from "@mui/material/Divider";

const OrderItem: React.FC<OrderItemProps> = ({
  order_id,
  cost,
  payment_method,
  where_eat,
  comment,
  ordered_time,
  orders,
  children,
}) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        mb: 2,
      }}
    >
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            ID: {order_id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cost} сум
          </Typography>
        </Grid>

        <Divider flexItem />

        {/* Order items */}
        {orders.length > 0 &&
          orders.map((order) => {
            const { count, product, additions } = order;

            return (
              <Box>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  {count} x {product}
                  {additions.length > 0 && (
                    <Typography
                      variant="caption"
                      display="block"
                      color="text.secondary"
                    >
                      {additions.map((addition, index) => (
                        <span key={index}>
                          {addition} <br />
                        </span>
                      ))}
                    </Typography>
                  )}
                </Typography>
              </Box>
            );
          })}

        {/* Time */}
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          sx={{ marginTop: 1 }}
        >
          <AccessTimeIcon sx={{ fontSize: 14, marginRight: 0.5 }} />
          <Typography variant="caption">{ordered_time}</Typography>
        </Grid>

        {/* Action buttons */}
        <Grid container justifyContent="space-between" sx={{ marginTop: 2 }}>
          <Button
            variant="outlined"
            startIcon={<CancelIcon />}
            color="error"
            sx={{ borderRadius: 2, paddingX: 2 }}
          >
            Отменить
          </Button>
          <Button
            variant="contained"
            startIcon={<CheckCircleIcon />}
            color="primary"
            sx={{ borderRadius: 2, paddingX: 2 }}
          >
            Принять
          </Button>
        </Grid>

        {children}
      </CardContent>
    </Card>
  );
};

export default OrderItem;
