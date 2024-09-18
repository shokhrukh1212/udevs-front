import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { OrderItemProps } from "types/common";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckIcon from "@mui/icons-material/Check";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Divider from "@mui/material/Divider";
import Icon from "components/Icon";
import ButtonComponent from "components/Button";
import Comment from "components/Comment";
import formatNumberWithSpace from "utils/formatNumber";

const OrderItem: React.FC<OrderItemProps> = ({
  order_id,
  type,
  cost,
  payment_method,
  where_eat,
  comment,
  completed,
  ordered_time,
  orders,
}) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        mb: 2,
        transition: "0.8s",
        "&:hover": {
          cursor: "pointer",
          transform: "scale(1.05)",
        },
      }}
    >
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid
            size={{ xs: 4, sm: 4, md: 5, lg: 5.5 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              component={"span"}
              sx={{
                fontWeight: "bold",
                fontSize: {
                  xs: "0.8rem",
                  sm: "0.75rem",
                  md: "1rem",
                  lg: "1.1rem",
                },
              }}
            >
              ID: {order_id}
            </Typography>
            <InfoOutlinedIcon sx={{ fontSize: "1.1rem", fill: "#000" }} />
          </Grid>

          <Grid
            size={{ xs: 8, sm: 8, md: 7, lg: 6.5 }}
            sx={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              component={"span"}
              variant="body2"
              color="text.secondary"
            >
              {formatNumberWithSpace(cost)} сум
            </Typography>
            <Icon
              src={`/assets/images/${payment_method}`}
              alt={`image of ${payment_method}`}
              styles={{ p: 0, ml: 0.8 }}
            />
            <Icon
              src={`/assets/images/${where_eat}`}
              alt={`image of ${where_eat}`}
              styles={{ p: 0, ml: 0.8 }}
            />
          </Grid>
        </Grid>

        <Divider sx={{ borderWidth: 1, mt: 1 }} flexItem />

        {/* Order product items */}
        <Box sx={{ mt: 1 }}>
          {orders.length > 0 &&
            orders.map((order, index) => {
              const { count, product, additions } = order;

              return (
                <Box key={index} sx={{ width: "100%" }}>
                  <Grid container spacing={1}>
                    <Grid size={{ xs: 1, sm: 1, md: 0.5, lg: 0.5 }}>
                      <Typography
                        component={"span"}
                        variant="subtitle2"
                        sx={{ fontWeight: 600 }}
                      >
                        {count}
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 1, sm: 1, md: 0.5, lg: 0.5 }}>
                      <Typography
                        component={"span"}
                        variant="subtitle2"
                        sx={{ fontWeight: 600 }}
                      >
                        x
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 10, sm: 10, md: 11, lg: 11 }}>
                      <Typography
                        component={"span"}
                        variant="subtitle2"
                        sx={{ fontWeight: 600 }}
                      >
                        {product}
                      </Typography>
                      <br />
                      {additions.length > 0 &&
                        additions.map((addition, index) => (
                          <Typography
                            component={"span"}
                            variant="caption"
                            key={index}
                          >
                            {addition} <br />
                          </Typography>
                        ))}
                    </Grid>
                  </Grid>
                </Box>
              );
            })}
        </Box>

        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          sx={{ marginTop: 1 }}
        >
          <AccessTimeIcon sx={{ fontSize: 14, marginRight: 0.5 }} />
          <Typography component={"span"} variant="caption">
            {ordered_time}
          </Typography>
        </Grid>

        {/* Divider if products are new or they have a comment */}
        {(type === 1 || comment.length > 0) && (
          <Divider sx={{ mt: 2, mb: 2, borderWidth: 1 }} flexItem />
        )}

        {/* Action buttons for new type of orders */}
        {type === 1 && (
          <Grid
            container
            justifyContent="space-around"
            sx={{
              marginTop: 2,
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
              },
              rowGap: {
                xs: 1,
                sm: 1,
                md: 1,
              },
            }}
          >
            <ButtonComponent
              text="Отменить"
              startIcon={<CancelIcon />}
              color="error"
              variant="outlined"
              styles={{ borderRadius: 2, paddingX: 2 }}
            />
            <ButtonComponent
              text="Принять"
              startIcon={<CheckIcon />}
              color="primary"
              variant="contained"
              styles={{ borderRadius: 2, paddingX: 2 }}
            />
          </Grid>
        )}

        {/* Comment component for preparing type of orders */}
        {comment.length > 0 && <Comment comment={comment} />}

        {/* Complete component for completed type of orders */}
        {completed && (
          <ButtonComponent
            text="Завершить"
            color="primary"
            variant="outlined"
            styles={{ width: "100%", borderWidth: 2, mt: 2 }}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default OrderItem;
