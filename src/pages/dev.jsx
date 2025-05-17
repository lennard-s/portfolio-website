import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

export default function DevPage() {
  const projects = [
    {
      title: 'Project 1: Full-Stack Web App',
      description: 'A full-stack web application built with React, Node.js, and MySQL for managing club memberships.',
      videoUrl: 'https://www.youtube.com/embed/example1',
    },
    {
      title: 'Project 2: Mobile App',
      description: 'A cross-platform mobile app developed using Flutter for tracking fitness goals and progress.',
      videoUrl: 'https://www.youtube.com/embed/example2',
    },
    {
      title: 'Project 3: Machine Learning Model',
      description: 'A machine learning model for predicting housing prices using Python and TensorFlow.',
      videoUrl: 'https://www.youtube.com/embed/example3',
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 4,
        overflow: 'hidden', // Prevent horizontal scrolling on the entire page
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: '#333',
          marginBottom: 4,
          textAlign: 'center',
        }}
      >
        Development Projects
      </Typography>
      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto', // Enable horizontal scrolling for this container only
          gap: 3,
          padding: 2,
          scrollSnapType: 'x mandatory',
          '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar for a cleaner look
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              minWidth: '300px',
              maxWidth: '400px',
              flexShrink: 0,
              scrollSnapAlign: 'center',
              backgroundColor: '#fff',
              boxShadow: 1,
              borderRadius: 2,
            }}
          >
            <CardMedia
              component="iframe"
              src={project.videoUrl}
              title={project.title}
              sx={{
                height: 200,
                border: 'none',
              }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                {project.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#555' }}>
                {project.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}