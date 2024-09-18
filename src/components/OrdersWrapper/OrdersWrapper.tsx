import { Box, Divider, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Icon from "components/Icon";
import Orders from "components/Orders/Orders";
import OrdersHeader from "components/OrdersHeader";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";

const OrdersWrapper = () => {
  return (
    <Grid container>
      <Grid
        size={{ xs: 2, sm: 1.5, md: 1, lg: 0.5 }}
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          borderRight: "2px solid #f5f5f5",
          pt: 2,
          pb: 2,
        }}
      >
        <Link href="#">
          <Icon src="/assets/images/main_menu.png" alt="Main menu logo" />
        </Link>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <SettingsIcon
            sx={{
              justifySelf: "flex-end",
              mb: 2,
              "&:hover": { cursor: "pointer" },
            }}
          />
          <Divider flexItem sx={{ borderWidth: 1 }} />
          <Avatar
            alt="Avatar"
            src="/assets/images/avatar.png"
            sx={{
              width: "2rem",
              height: "2rem",
              mt: 2,
              "&:hover": { cursor: "pointer" },
            }}
          />
        </Box>
      </Grid>

      <Grid size={{ xs: 10, sm: 10.5, md: 11, lg: 11.5 }} sx={{ p: 2 }}>
        <OrdersHeader />
        <Orders />
      </Grid>
    </Grid>
  );
};

export default OrdersWrapper;
