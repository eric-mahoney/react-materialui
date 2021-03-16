import "./App.css";
import Sidebar from "./components/Sidebar";
import { Box } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Box component="div">
      <Sidebar />
    </Box>
  );
}

export default App;
