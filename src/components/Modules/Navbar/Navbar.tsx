import React, { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import { alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import "./NavbarMod.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/authContext";
import { SiUdemy } from "react-icons/si";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineGlobal } from "react-icons/ai";

const Search:any = styled("div")(({ theme }) => ({
  position: "relative",

  borderRadius: theme.shape.borderRadius,

  backgroundColor: alpha(theme.palette.common.white, 0.15),

  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

  marginRight: theme.spacing(2),

  marginLeft: 0,

  width: "100%",

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),

    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),

  height: "100%",

  position: "absolute",

  pointerEvents: "none",

  display: "flex",

  alignItems: "center",

  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0), // vertical padding + font size from searchIcon

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,

    transition: theme.transitions.create("width"),

    width: "100%",

    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const drawerWidth = 250;

interface ThemeProps {
  breakpoints: {
    values: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  };
}

const theme: ThemeProps = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexGrow: 1,
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const settings = ["Profile", "Account", "Dashboard"];

const Navbar: React.FC = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const { refreshToken, nickName, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      refreshToken();
    }
  }, []);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" style={{ background: "#fff", color: "#000" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <StyledIconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </StyledIconButton>
            <Typography
              variant="h6"
              component="a"
              href="/"
              className={classes.title}
              fontWeight="bold"
              fontSize="24px"
              color="#000"
              sx={{
                textDecoration: "none",
              }}
            >
              <SiUdemy color="purple" />
              demy
            </Typography>
            <StyledBox className="btns_typo">
              <Button color="inherit">Categories</Button>
              <Search className="searchBar">
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search for anything"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Button color="inherit">Udemy Business</Button>
              <Button
                color="inherit"
                onClick={() => navigate("/mentor-register")}
              >
                Teach on Udemy
              </Button>
            </StyledBox>

            {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              ></Menu>
            </Box> */}

            <Box sx={{ flexGrow: 1 }} />

            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              className="btns_typo"
            >
              <Button sx={{ color: "#000" }}>
                <GiShoppingCart size="24px" />
              </Button>
              {nickName ? (
                <>
                  <Typography>{nickName}</Typography>
                  <Box sx={{ flexGrow: 0, marginLeft: "15px" }}>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/2.jpg"
                        />
                      </IconButton>
                    </Tooltip>
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
                      <MenuItem key={"logout"} onClick={logout}>
                        <Typography textAlign="center">Logout</Typography>
                      </MenuItem>
                    </Menu>
                  </Box>
                </>
              ) : (
                <div className="navbar__auth">
                  <Button
                    onClick={() => navigate("/choose-login")}
                    color="inherit"
                    variant="outlined"
                    sx={{ borderRadius: "0" }}
                  >
                    <Typography>Log In</Typography>
                  </Button>
                  <Button
                    onClick={() => navigate("/choose-register")}
                    color="inherit"
                    variant="contained"
                    sx={{
                      marginLeft: 2,
                      backgroundColor: "#000",
                      color: "#fff",
                      borderRadius: "0",
                    }}
                    className="signup"
                  >
                    <Typography>Sign Up</Typography>
                  </Button>
                </div>
              )}
              <Button
                color="inherit"
                variant="outlined"
                sx={{ color: "#000", borderRadius: "0", ml: 1 }}
              >
                <AiOutlineGlobal size="18px" />
              </Button>
            </Box>
          </Toolbar>
          <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
            <Box
              className={classes.drawer}
              role="presentation"
              onClick={handleDrawerClose}
              onKeyDown={handleDrawerClose}
            >
              <List>
                <ListItem>
                  <ListItemText primary="Categories" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Teach on Udemy" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Udemy Business" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Log In" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Sign Up" />
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default Navbar;
