import * as React from "react";
import './Sidebar.css';
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.standard,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.standard,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = ({ open }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <List>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "Grey",
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon className="itemIcon" />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} className="itemText" />
            </ListItemButton>
          </Link>
          <Link
            to="/table"
            style={{
              textDecoration: "none",
              color: "Grey",
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <TableRestaurantIcon />
              </ListItemIcon>
              <ListItemText primary={"Table"} />
            </ListItemButton>
          </Link>
          <Link
            to="/users"
            style={{
              textDecoration: "none",
              color: "Grey",
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={"Users"} />
            </ListItemButton>
          </Link>
          <Link
            to="/form"
            style={{
              textDecoration: "none",
              color: "Grey",
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary={"Form"} />
            </ListItemButton>
          </Link>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
