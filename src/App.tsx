import "./App.css";
import Drawer from "@material-ui/core/Drawer";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Search } from "@material-ui/icons";

function App() {
  return (
    <div>
      <Drawer variant="permanent" anchor="left">
        <List>
          <ListItem button>
            <ListItemIcon>
              <Search />
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default App;
