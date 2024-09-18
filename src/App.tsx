import "./App.css";
import Header from "./components/Header";
import Divider from "@mui/material/Divider";
import Orders from "components/Orders";

function App() {
  return (
    <div>
      <Header />
      <Divider />
      <Orders />
    </div>
  );
}

export default App;
