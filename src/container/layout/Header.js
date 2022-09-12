import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  },
});

const pages = [
  { name: "Home", route: "/" },
  { name: "Create", route: "/create" },
  { name: "Manage", route: "/manage" },
  { name: "Qualification", route: "/qualification" },
  { name: "Help", route: "/help" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const navItems = [
  { name: "Home", route: "/" },
  { name: "Manage", route: "/manage" },
  { name: "Qualification", route: "/qualification" },
  { name: "Help", route: "/help" },
  { name: "Register", route: "/register" },
  { name: "Login", route: "/login" },
];
const authMenu = [
  { name: "Register", route: "/register" },
  { name: "Login", route: "/login" },
];
const drawerWidth = "100%";

const ResponsiveAppBar = (props) => {
  const classes = useStyles();

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { window } = props;
  const theme = useTheme();
  const trigger = useScrollTrigger();
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link to={`${item.route}`} className={classes.link} key={item.name}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  let ColorModeContext = props.colorModeContext;
  const colorMode = React.useContext(ColorModeContext);

  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <Slide appear={false} direction="down" in={!trigger}>
          <AppBar style={{ backgroundColor: "#092C74" }} component="nav">
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontWeight: 700,
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  WeTaskOnline
                </Typography>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
                <Box
                  sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                ></Box>
                <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontWeight: 700,
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  WeTaskOnline
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pages.map((page) => (
                    <Link
                      to={`${page.route}`}
                      className={classes.link}
                      key={page.name}
                    >
                      <Button
                        style={{ fontWeight: "bold", fontSize: 16 }}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        {page.name}
                      </Button>
                    </Link>
                  ))}
                </Box>
                <IconButton
                  sx={{ ml: 1 }}
                  onClick={colorMode.toggleColorMode}
                  color="inherit"
                >
                  {theme.palette.mode === "dark" ? (
                    <Brightness7Icon />
                  ) : (
                    <Brightness4Icon />
                  )}
                </IconButton>
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  {authMenu.map((page) => (
                    <Link
                      to={`${page.route}`}
                      key={page.route}
                      className={classes.link}
                    >
                      <Button
                        key={page.name}
                        style={{ fontWeight: "bold", fontSize: 16 }}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        {page.name}
                      </Button>
                    </Link>
                  ))}
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </Slide>
      </Box>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Toolbar />
    </React.Fragment>
  );
};

export default ResponsiveAppBar;
