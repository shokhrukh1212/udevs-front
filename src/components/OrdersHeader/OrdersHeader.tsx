import { useContext } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Search from "components/Search";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import OrderContext from "context/OrderContext";

const OrdersHeader = () => {
  const { orders } = useContext(OrderContext);

  // calculating total number of products
  const total_count = orders.reduce((total, order) => {
    return (
      total +
      order.items.reduce((itemTotal, item) => {
        return (
          itemTotal +
          item.orders.reduce((productTotal, product) => {
            return productTotal + product.count;
          }, 0)
        );
      }, 0)
    );
  }, 0);

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6, md: 8, lg: 9.5 }}>
        <Search />
      </Grid>
      <Grid
        size={{ xs: 6, sm: 3.5, md: 2.5, lg: 1.5 }}
        sx={{
          border: "2px solid #f5f5f5",
          borderRadius: 3,
          p: 1,
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <InventoryOutlinedIcon sx={{ fill: "blue" }} />
        <Typography>Всего: {total_count}</Typography>
        <KeyboardArrowDownIcon sx={{ fill: "blue" }} />
      </Grid>
      <Grid
        size={{ xs: 6, sm: 2.5, md: 1.5, lg: 1 }}
        sx={{
          border: "2px solid #f5f5f5",
          borderRadius: 3,
          p: 1,
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <AccessTimeIcon sx={{ mr: 1 }} />
        <Typography>45:08</Typography>
      </Grid>
    </Grid>
  );
};

export default OrdersHeader;
