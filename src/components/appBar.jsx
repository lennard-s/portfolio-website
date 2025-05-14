import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';


export default function AppBarComponent() {
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
        <Button color="inherit">Dev</Button>
        <Button color="inherit">Design</Button>
        <Button color="inherit" component={Link} to="/resume">
          Resume
        </Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}