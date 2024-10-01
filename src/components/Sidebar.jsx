import  { useState } from "react";
import React from "react"
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import { Collapse } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CategoryIcon from "@mui/icons-material/Category";
import AttractionsIcon from "@mui/icons-material/Attractions";
import WidgetsIcon from "@mui/icons-material/Widgets";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import useAppStore from "../AppStore";
   

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX:"hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  backgroundColor: 'lightblue', // Add this line to change background color
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      backgroundColor: 'lightblue', // Apply same color to opened state
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: 'lightblue', // Apply same color to closed state
    },
  }),
}));


export default function Sidebar() {
  const theme = useTheme();
  const [isCollaps, setIsCollaps] = useState(true);
  const [isCollaps2, setIsCollaps2] = useState(true);
  
  const navigate = useNavigate();
  const location = useLocation();
  const open = useAppStore((state) => state.dopen);

  const handleCollapse = () => {
    setIsCollaps(!isCollaps);
  };
  const handleCollapse2 = () => {
    setIsCollaps2(!isCollaps2);
  };


  const getActiveStyle = (path) => ({
    backgroundColor: location.pathname === path ? theme.palette.action.selected : "inherit",
    '&:hover': {
      backgroundColor: location.pathname === path ? theme.palette.action.hover : "lightgray", // Change to desired hover color
    },
    '&:active': {
      backgroundColor: location.pathname === path ? theme.palette.action.active : "white", // Change to desired active color
    },
  });
  return (
    <Box sx={{ display: "flex" ,}}>
      <CssBaseline />
      <Drawer variant="permanent"  open={open}>
        <DrawerHeader>
          <IconButton>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/dashboard")}
          >
            <ListItemButton
              sx={{
                ...getActiveStyle("/dashboard"),
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={handleCollapse}
          >
            <ListItemButton
              sx={{
                ...getActiveStyle("/catalog"),
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <AutoStoriesIcon />
              </ListItemIcon>
              <ListItemText primary="Catalog" sx={{ opacity: open ? 1 : 0 }} />
              {isCollaps ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
            </ListItemButton>
          </ListItem>
          <Collapse in={isCollaps} timeout="auto" unmountOnExit>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => navigate("/product")}
            >
              <ListItemButton
                sx={{
                  ...getActiveStyle("/product"),
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <WidgetsIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Product"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => navigate("/category")}
            >
              <ListItemButton
                sx={{
                  ...getActiveStyle("/category"),
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Category"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => navigate("/brands")}
            >
              <ListItemButton
                sx={{
                  ...getActiveStyle("/brands"),
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <AttractionsIcon />
                </ListItemIcon>
                <ListItemText primary="Brands" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => navigate("/inventory")}
            >
              <ListItemButton
                sx={{
                  ...getActiveStyle("/inventory"),
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <InventoryIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Inventory"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Collapse>

          {/* order management */}

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={handleCollapse2}
          >
            <ListItemButton
              sx={{
                ...getActiveStyle("/orders"),
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <ShoppingCartCheckoutIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" sx={{ opacity: open ? 1 : 0 }} />
              {isCollaps2 ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
            </ListItemButton>
          </ListItem>
          <Collapse in={isCollaps2} timeout="auto">
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => navigate("/order")}
            >
              <ListItemButton
                sx={{
                  ...getActiveStyle("/order"),
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Order" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => navigate("/cancel-order")}
            >
              <ListItemButton
                sx={{
                  ...getActiveStyle("/cancel-order"),
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <RemoveShoppingCartIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Cancel Orders"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => navigate("/return-order")}
            >
              <ListItemButton
                sx={{
                  ...getActiveStyle("/return-order"),
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <AssignmentReturnIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Return Orders"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Collapse>

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/complaints")}
          >
            <ListItemButton
              sx={{
                ...getActiveStyle("/complaints"),
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <SmsFailedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Complaints"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/pin-message")}
          >
            <ListItemButton
              sx={{
                ...getActiveStyle("/pin-message"),
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <MarkUnreadChatAltIcon />
              </ListItemIcon>
              <ListItemText
                primary="Pin message"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/settings")}
          >
            <ListItemButton
              sx={{
                ...getActiveStyle("/settings"),
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
