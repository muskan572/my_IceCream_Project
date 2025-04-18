import { useState } from "react";
import { PATH_DASH } from "../../routes/path";
import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  IconButton,
  Box,
  Badge,
  Drawer,
  useTheme,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import NavbarMenu from "./navbarMenu";
import { Link, Outlet } from "react-router-dom";

export default function Navbars() {
  const [input, setInput] = useState("");

  const [anchorEl, setAnchorE1] = useState(null);
  const openn = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorE1(null);
  };

  const handleClick = (event) => {
    setAnchorE1(event.currentTarget);
  };

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const theme = useTheme();

  const DrawerList = (
    <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
      <List className="text-xl font-semibold">
        <IconButton sx={{ display: "flex", justifyContent: "flex-end" }}>
          <FavoriteBorderIcon />
        </IconButton>
        {["Home", "Products", " About Us ", "Contact Us"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{ bgcolor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Stack
            direction="row"
            spacing={5}
            sx={{ flexGrow: 1, color: "black" }}
          >
            <img
              src="assets/images/Logo.png"
              alt="ice-cream parlour"
              style={{ width: "150px" }}
            />
            <Stack
              direction="row"
              spacing={8}
              padding={2}
              sx={{ display: { xs: "none", lg: "block" } }}
            >
              <Button
                component={Link}
                to={PATH_DASH.home}
                color="inherit"
                sx={{ fontWeight: "normal", fontSize: "17px" }}
              >
                Home
              </Button>

              <Button
                color="inherit"
                id="Products-button"
                onClick={handleClick}
                aria-controls={openn ? "Products-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openn ? "true" : undefined}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{ fontWeight: "normal", fontSize: "17px" }}
              >
                Products
              </Button>

              <Button
                component={Link}
                to={PATH_DASH.aboutUs}
                color="inherit"
                sx={{ fontWeight: "normal", fontSize: "17px" }}
              >
                About Us
              </Button>

              <Button
                component={Link}
                to={PATH_DASH.contact}
                color="inherit"
                sx={{ fontWeight: "normal", fontSize: "17px" }}
              >
                Contact Us
              </Button>
            </Stack>
          </Stack>
          <Menu
            id="Products-menu"
            anchorEl={anchorEl}
            open={openn}
            MenuListProps={{
              "aria-labelledby": "Products-button",
            }}
            onClose={handleClose}
          >
            <NavbarMenu />
          </Menu>

          <IconButton edge="start" color="inherit" aria-label="menu">
            <FavoriteBorderIcon
              sx={{
                color: theme.palette.grey[900],
                height: "25px",
                display: { xs: "none", lg: "block" },
              }}
            />
          </IconButton>

          <IconButton>
            <Badge badgeContent={1} sx={{ color: theme.palette.grey[900] }}>
              <ShoppingBagOutlinedIcon
                sx={{ color: "black", width: { xs: "20px", sm: "25px" } }}
              />
            </Badge>
          </IconButton>

          <IconButton>
            <SearchIcon
              sx={{
                color: theme.palette.grey[900],
                display: { xs: "block", md: "none" },
                width: { xs: "20px", sm: "25px" },
              }}
            />
          </IconButton>

          <IconButton
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: "block", lg: "none" },
            }}
          >
            <MenuIcon
              style={{
                color: theme.palette.grey[900],
                height: "30px",
                width: { xs: "20px", sm: "25px" },
              }}
            />
          </IconButton>

          <Stack flexDirection="row" spacing={2}>
            <Stack>
              <Drawer
                open={open}
                onClose={toggleDrawer(false)}
                sx={{ md: "hidden" }}
              >
                {DrawerList}
              </Drawer>
            </Stack>
          </Stack>

          <Stack sx={{ display: { xs: "none", md: "block" } }}>
            <Button
              variant="contained"
              startIcon={<SearchIcon />}
              sx={{
                backgroundColor: "black",
                borderRadius: "20px",
                color: theme.palette.grey[0],
                "&:hover": {
                  bgcolor: theme.palette.grey[900],
                },
              }}
              disableElevation
              disableRipple
            >
              <input
                type="text"
                placeholder="Search Here"
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  width: "90px",
                  color: theme.palette.grey[0],
                }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </Button>
          </Stack>
        </Toolbar>
        <Outlet />
      </AppBar>
    </>
  );
}
