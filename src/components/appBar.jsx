import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const appBarGradient =
  "linear-gradient(var(--angle), rgb(16.1% 20% 32.2%), rgb(36.5% 36.5% 43.5%))";
const mainTextGradient =
  "linear-gradient(var(--angle), rgb(96.9% 71.8% 63.9%), rgb(92.2% 72.9% 72.5%), rgb(94.9% 84.7% 84.7%), rgb(94.1% 91.8% 83.9%))";
const tabsGradient =
  "linear-gradient(var(--angle), rgb(96.9% 71.8% 63.9%), rgb(92.2% 72.9% 72.5%), rgb(94.9% 84.7% 84.7%), rgb(94.1% 91.8% 83.9%))";

export default function AppBarComponent() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screens
  const location = useLocation(); // Get the current route
  const [value, setValue] = useState(location.pathname); // Set the initial value based on the current route

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue); // Update the selected tab
  };

  const handleLogoClick = () => {
    setValue(false); // Reset the selected tab
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        "--angle": "45deg",
        background: appBarGradient,
      }}
      elevation={1}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            width: "fit-content",
            cursor: "pointer",
            textDecoration: "none",
            background: mainTextGradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            whiteSpace: "nowrap",
          }}
          component={Link}
          to="/"
          onClick={handleLogoClick} // Reset tabs when clicked
        >
          Lenn's Portfolio
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
            >
              <List>
                <ListItem
                  button
                  component={Link}
                  to="/dev"
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary="Dev" />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/design"
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary="Design" />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/resume"
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary="Resume" />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/contact"
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary="Contact" />
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <Tabs
            value={value} // Controlled value for the selected tab
            onChange={handleChange} // Handle tab change
            variant="standard"
            textColor="inherit"
            indicatorColor="transparent"
            sx={{
              "& .MuiTab-root": {
                background: tabsGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
              "& .MuiTab-root.Mui-selected": {
                fontWeight: "bold", // Highlight selected tab
              },
            }}
          >
            <Tab label="Dev" value="/dev" component={Link} to="/dev" />
            <Tab label="Design" value="/design" component={Link} to="/design" />
            <Tab label="Resume" value="/resume" component={Link} to="/resume" />
            <Tab
              label="Contact"
              value="/contact"
              component={Link}
              to="/contact"
            />
          </Tabs>
        )}
      </Toolbar>
    </AppBar>
  );
}
