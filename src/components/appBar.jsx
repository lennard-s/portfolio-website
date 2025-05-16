import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

export default function AppBarComponent() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile screens
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
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'inherit',
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
                <ListItem button component={Link} to="/dev" onClick={handleDrawerToggle}>
                  <ListItemText primary="Dev" />
                </ListItem>
                <ListItem button component={Link} to="/design" onClick={handleDrawerToggle}>
                  <ListItemText primary="Design" />
                </ListItem>
                <ListItem button component={Link} to="/resume" onClick={handleDrawerToggle}>
                  <ListItemText primary="Resume" />
                </ListItem>
                <ListItem button component={Link} to="/contact" onClick={handleDrawerToggle}>
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
          >
            <Tab label="Dev" value="/dev" component={Link} to="/dev" />
            <Tab label="Design" value="/design" component={Link} to="/design" />
            <Tab label="Resume" value="/resume" component={Link} to="/resume" />
            <Tab label="Contact" value="/contact" component={Link} to="/contact" />
          </Tabs>
        )}
      </Toolbar>
    </AppBar>
  );
}