import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function AppBarComponent() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
         Lennard Szyperski's Portfolio
        </Typography>
        <Button color="inherit">Dev</Button>
        <Button color="inherit">Design</Button>
        <Button color="inherit">Resume</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}