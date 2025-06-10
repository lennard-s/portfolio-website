import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
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
  "linear-gradient(var(--angle), rgb(16.1% 20% 32.2%), rgb(26% 26% 33%))";
const mainTextGradient =
  "linear-gradient(var(--angle), rgb(94.1% 91.8% 93.3%), rgb(91% 87.1% 88.2%))";
// "linear-gradient(var(--angle), rgb(96.9% 71.8% 63.9%), rgb(92.2% 72.9% 72.5%), rgb(94.9% 84.7% 84.7%), rgb(94.1% 91.8% 83.9%))";
const tabsGradient =
  "linear-gradient(var(--angle), rgb(94.1% 91.8% 93.3%), rgb(91% 87.1% 88.2%))";
// "linear-gradient(var(--angle), rgb(96.9% 71.8% 63.9%), rgb(92.2% 72.9% 72.5%), rgb(94.9% 84.7% 84.7%), rgb(94.1% 91.8% 83.9%))";

export default function AppBarComponent() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

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
          <Box
            component="span"
            sx={{
              display: { xs: "inline", md: "none" },
            }}
          >
            Lenn's Portfolio
          </Box>
          <Box
            component="span"
            sx={{
              display: { xs: "none", md: "inline" },
            }}
          >
            Lennard's Portfolio
          </Box>
        </Typography>
        {/* Burger Menu */}
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
              sx={{
                "& .MuiDrawer-paper": {
                  background: appBarGradient,
                  color: "white",
                },
              }}
            >
              <List>
                <ListItem
                  button
                  component={Link}
                  to="/dev"
                  onClick={handleDrawerToggle}
                >
                  <ListItemText
                    primary="Dev"
                    slotProps={{
                      primary: { sx: { color: "rgb(94.1% 91.8% 93.3%)" } },
                    }}
                  />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/design"
                  onClick={handleDrawerToggle}
                >
                  <ListItemText
                    primary="Design"
                    slotProps={{
                      primary: { sx: { color: "rgb(94.1% 91.8% 93.3%)" } },
                    }}
                  />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/resume"
                  onClick={handleDrawerToggle}
                >
                  <ListItemText
                    primary="Resume"
                    slotProps={{
                      primary: { sx: { color: "rgb(94.1% 91.8% 93.3%)" } },
                    }}
                  />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/contact"
                  onClick={handleDrawerToggle}
                >
                  <ListItemText
                    primary="Contact"
                    slotProps={{
                      primary: { sx: { color: "rgb(94.1% 91.8% 93.3%)" } },
                    }}
                  />
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
            sx={{
              "& .MuiTab-root": {
                background: tabsGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
              "& .MuiTab-root.Mui-selected": {
                fontWeight: "bold",
              },
              "& .MuiTabs-indicator": {
                height: "2px",
                borderRadius: "0px",
                background:
                  "linear-gradient(var(--angle), rgb(96.9% 71.8% 63.9%), rgb(92.2% 72.9% 72.5%), rgb(94.9% 84.7% 84.7%), rgb(94.1% 91.8% 83.9%))",
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
