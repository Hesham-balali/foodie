import { useLoaderData, Outlet } from "react-router-dom";
import * as React from "react";
import { styled, useTheme, ThemeProvider } from "@mui/material/styles";
import heshamTheme from "../theme/index";
import anotherTheme from "../theme/newtheme";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import CategoryIcon from "@mui/icons-material/Category";
import PersonIcon from "@mui/icons-material/Person";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import PublicIcon from "@mui/icons-material/Public";
import EggIcon from "@mui/icons-material/Egg";
import App from "../views/test";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigation } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import Switch from "@mui/material/Switch";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // const { categories } = useLoaderData();
  const navigate = useNavigate();
  const [appTheme, setAppTheme] = React.useState(heshamTheme);

  const [searchTerm, setSearchTerm] = useState("");
  // const history = useHistory();
  const history = "";
  const navigation = useNavigation();
  return (
    <ThemeProvider theme={appTheme}>
      <Box>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar color="primary" position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Menu
              </Typography>

              <Switch
                defaultChecked
                color="secondary"
                variant="contained"
                checked={anotherTheme}
                onChange={() => {
                  if (appTheme === heshamTheme) {
                    setAppTheme(anotherTheme);
                  } else {
                    setAppTheme(heshamTheme);
                  }
                }}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Toolbar>
            <Box sx={{ width: "100%" }}>
              {navigation.state === "loading" && <LinearProgress />}
            </Box>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate(`/`);
                  }}
                >
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate(`/categories`);
                  }}
                >
                  <ListItemIcon>
                    <CategoryIcon />
                  </ListItemIcon>
                  <ListItemText primary="Categories" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate(`/areas`);
                  }}
                >
                  <ListItemIcon>
                    <PublicIcon />
                  </ListItemIcon>
                  <ListItemText primary="Countries" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate(`/ingredients`);
                  }}
                >
                  <ListItemIcon>
                    <EggIcon />
                  </ListItemIcon>
                  <ListItemText primary="Ingredients" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate(`/aboutdev`);
                  }}
                >
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="About Dev" />
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
          <Main open={open}>
            <DrawerHeader />

            <Typography
              fontWeight="600"
              align="center"
              variant="h1"
              color="textPrimary"
              marginBottom="30px"
            >
              Foodie!
            </Typography>
            <Divider />
            {/* <TextField
            label="Search for a meal"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(`/search/${searchTerm}`)}
          >
            Search
          </Button> */}
            <Outlet />
            <Typography
              fontWeight="400"
              align="center"
              variant="body1"
              color="textPrimary"
              marginTop="100px"
            >
              © Copyright - Coding Front 2023 / Just React - Foodie App By
              HeshaM
            </Typography>
          </Main>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
