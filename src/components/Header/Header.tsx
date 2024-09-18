import Grid from "@mui/material/Grid2";
import Icon from "components/Icon";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <Grid container>
      <Grid
        size={{ xs: 2, sm: 1.5, md: 1, lg: 0.5 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRight: "2px solid #f5f5f5",
          p: 2,
        }}
      >
        <Link href="#">
          <Icon src="/assets/images/logo.png" alt="Logo" />
        </Link>
      </Grid>
      <Grid
        size={{ xs: 10, sm: 10.5, md: 11, lg: 11.5 }}
        sx={{ display: "flex", alignItems: "center", pl: 2 }}
      >
        <Typography variant="h5" fontWeight={"bold"}>
          Cегодняшние заказы
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
