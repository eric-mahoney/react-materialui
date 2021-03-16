import Drawer from "@material-ui/core/Drawer";
import { Divider, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { AccountCircle, LocalBar, Search, TrendingUp } from "@material-ui/icons";

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem button>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <LocalBar />
          </ListItemIcon>
          <ListItemText primary="See Breweries" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Search />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
