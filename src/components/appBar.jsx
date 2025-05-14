import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, useMediaQuery, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export default function AppBarComponent() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation(); // Get the current route
  const [value, setValue] = useState(location.pathname); // Set the initial value based on the current route

  const handleChange = (event, newValue) => {
    setValue(newValue); // Update the selected tab
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
        >
          Lennard's Portfolio
        </Typography>
        <Tabs
          value={value} // Controlled value for the selected tab
          onChange={handleChange} // Handle tab change
          variant={isXs ? 'scrollable' : 'standard'}
          scrollButtons={isXs ? 'auto' : false}
          textColor="inherit"
        //   indicatorColor="secondary"
        >
          <Tab label="Dev" value="/dev" component={Link} to="/dev" />
          <Tab label="Design" value="/design" component={Link} to="/design" />
          <Tab label="Resume" value="/resume" component={Link} to="/resume" />
          <Tab label="Contact" value="/contact" component={Link} to="/contact" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}