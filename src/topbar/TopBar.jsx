import React from "react";
import "./TopBar.css";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
import InboxIcon from "@mui/icons-material/Inbox";

const drawerWidth = 240;

export default function TopBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box sx={{ display: "flex" }}>
        <Toolbar />
        <List>
        <img src="../logo.png" className="logoside" alt=" Delicious" />
          <ul className="topListside">
            <a href="">
              <li className="topListItemside">Location</li>
            </a>
            <a href="">
              <li className="topListItemside">Menu</li>
            </a>
            <a href="">
              <li className="topListItemside">About</li>
            </a>
            <a href="">
              <li className="topListItemside">Contact</li>
            </a>
          </ul>
        </List>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="top">
      {/* top left icon and menu */}
      <div className="topLeft">
        <div className="topL-L">
          <i className="menuIcon fas fa-bars" onClick={handleDrawerToggle}></i>
        </div>
        <div className="topL-R">
          <img src="../logo.png" className="logo" alt=" Delicious" />
        </div>
      </div>

      {/*  top center menu*/}
      <div className="topCenter">
        <ul className="topList">
          <a href="">
            <li className="topListItem">Location</li>
          </a>
          <a href="">
            <li className="topListItem">Menu</li>
          </a>
          <a href="">
            <li className="topListItem">About</li>
          </a>
          <a href="">
            <li className="topListItem">Contact</li>
          </a>
        </ul>
      </div>

      {/* top right buttons */}
      <div className="topRight">
        <ul className="login">
          <li className="loginText">login</li>
        </ul>
        <button className="sign-up-btn">Sign up</button>
        <i className="topSearchIcon fas fa-search"></i>
      </div>

      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModelProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </div>
  );
}
