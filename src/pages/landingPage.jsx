import React from 'react';
import { Box, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';

export default function LandingPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 4,
      }}
    >
      {/* Portrait Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 4,
        }}
      >
        <img
          alt="Portrait of Lennard Szyperski"
          src="/portrait.jpg"
          style={{
            width: 200,
            height: 200,
            borderRadius: '50%',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Introduction Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: '100%',
          maxWidth: 1200,
          gap: 4,
        }}
      >
        {/* Column 1: Education */}
        <Box sx={{ textAlign: 'center', flex: 1 }}>
          <SchoolIcon sx={{ fontSize: 50, color: '#1976d2', marginBottom: 2 }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            Education
          </Typography>
          <Typography variant="body1" sx={{ color: '#555' }}>
            Rochester Institute of Technology
          </Typography>
          <Typography variant="body2" sx={{ color: '#777' }}>
            BS in Human Centered Computing
          </Typography>
          <Typography variant="body2" sx={{ color: '#777' }}>
            3.92 GPA, Summa Cum Laude
          </Typography>
        </Box>

        {/* Column 2: Skills */}
        <Box sx={{ textAlign: 'center', flex: 1 }}>
          <BuildIcon sx={{ fontSize: 50, color: '#1976d2', marginBottom: 2 }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            Skills
          </Typography>
          <Typography variant="body1" sx={{ color: '#555' }}>
            Technical Project Management
          </Typography>
          <Typography variant="body1" sx={{ color: '#555' }}>
            Full-Stack Development
          </Typography>
          <Typography variant="body1" sx={{ color: '#555' }}>
            UX/UI Design
          </Typography>
        </Box>

        {/* Column 3: Toolkit */}
        <Box sx={{ textAlign: 'center', flex: 1 }}>
          <CodeIcon sx={{ fontSize: 50, color: '#1976d2', marginBottom: 2 }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            Toolkit
          </Typography>
          <Typography variant="body1" sx={{ color: '#555' }}>
            React, JavaScript, MySQL
          </Typography>
          <Typography variant="body1" sx={{ color: '#555' }}>
            Node.js, Figma, Git
          </Typography>
          <Typography variant="body1" sx={{ color: '#555' }}>
            Material-UI, Java
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

