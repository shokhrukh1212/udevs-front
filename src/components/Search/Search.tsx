import { useContext } from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import OrderContext from "context/OrderContext";

const Search = () => {
  const { setOrderId } = useContext(OrderContext);

  return (
    <Box>
      <TextField
        id="outlined-basic"
        placeholder="Поиск по ID"
        size="small"
        type="number"
        onChange={(e) => setOrderId(e.target.value)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ fill: "blue" }} />
              </InputAdornment>
            ),
          },
        }}
        variant="outlined"
      />
    </Box>
  );
};

export default Search;
