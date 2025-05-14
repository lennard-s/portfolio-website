import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';

export default function LandingPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        padding: 4,
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Portrait Section */}
        <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
          <Avatar
            alt="Your Name"
            src="/path-to-your-portrait.jpg" // Replace with your image path
            sx={{
              width: 200,
              height: 200,
              margin: '0 auto',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            }}
          />
        </Grid>

        {/* Introduction Section */}
        <Grid item xs={12} md={8}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Hello, I'm Lennard Szyperski
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', color: '#555' }}>
            I’m a [Your Profession/Role] with a passion for [Your Interests or Skills]. 
            Welcome to my portfolio site where I showcase my work, skills, and experiences. 
            Feel free to explore and connect with me!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

