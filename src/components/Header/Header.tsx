import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Icon from "components/Icon";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Icon src="/assets/images/logo.png" alt="Logo" />
        <Divider orientation="vertical" flexItem />
        <Grid sx={{ display: "flex", alignItems: "center", pl: 2 }}>
          <Typography variant="h5" fontWeight={"bold"}>
            Cегодняшние заказы
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
