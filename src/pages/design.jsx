import React, { useState } from 'react';
import { Box, Tabs, Tab, useMediaQuery, useTheme, Typography, ToggleButton, ToggleButtonGroup, Paper } from '@mui/material';

// Reusable component for each prototype section
function PrototypeSection({ title, description, figmaEmbedCode, youtubeEmbedCode }) {
    const [mediaTab, setMediaTab] = useState(0);

    const handleMediaTabChange = (event, newValue) => {
        setMediaTab(newValue);
    };

    const hasBothMedia = figmaEmbedCode && youtubeEmbedCode;

    return (
        <Paper sx={{ mb: 4, p: 2 }}>
            <Typography variant="h5" align="center" sx={{ mb: 2, color: '#333' }}>
                {title}
            </Typography>
            <Typography variant="body1" align="left" sx={{ mb: 4, contentType: '#555' }}>
                {description}
            </Typography>

            <Box sx={{ position: 'relative', width: '100%', paddingBottom: '56.25%', mb: 1 }}>
                {(!hasBothMedia || mediaTab === 0) && figmaEmbedCode && (
                    <iframe
                        src={figmaEmbedCode}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        allowFullScreen
                    />
                )}
                {hasBothMedia && mediaTab === 1 && youtubeEmbedCode && (
                    <iframe
                        src={youtubeEmbedCode}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        allowFullScreen
                    />
                )}
                {!hasBothMedia && youtubeEmbedCode && !figmaEmbedCode && (
                    <iframe
                        src={youtubeEmbedCode}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        allowFullScreen
                    />
                )}
            </Box>
            {hasBothMedia && (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ToggleButtonGroup
                        value={mediaTab}
                        exclusive
                        onChange={handleMediaTabChange}
                    >
                        <ToggleButton value={0} sx={{ textTransform: 'none' }}>
                            Figma Prototype
                        </ToggleButton>
                        <ToggleButton value={1} sx={{ textTransform: 'none' }}>
                            YouTube Video
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            )}
        </Paper>
    );
}

// Sample prototype data (replace with your own embed URLs)
const prototypes = [
    {
        title: 'Prototype 1',
        description: 'A sleek mobile app interface designed for seamless user interaction.',
        figmaEmbedCode: 'https://www.figma.com/embed?embed_host=share&url=your_figma_url_here',
        youtubeEmbedCode: 'https://www.youtube.com/embed/your_video_id_here',
    },
    {
        title: 'Prototype 2',
        description: 'An innovative web dashboard with real-time data visualization.',
        figmaEmbedCode: 'https://www.figma.com/embed?embed_host=share&url=your_figma_url_here',
        youtubeEmbedCode: 'https://www.youtube.com/embed/your_video_id_here',
    },
    {
        title: 'Prototype 3',
        description: 'A minimalist e-commerce checkout flow optimized for conversions.',
        figmaEmbedCode: 'https://www.figma.com/embed?embed_host=share&url=your_figma_url_here',
    },
];

export default function DesignPage() {
    const [selectedTab, setSelectedTab] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Breakpoint for mobile screens

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // Column on mobile, row on desktop
                alignItems: 'flex-start',
                backgroundColor: '#f5f5f5',
                padding: 4,
                gap: 4,
                maxWidth: '1200px', // Limit the width of the parent container
                margin: '0 auto', // Center the container
            }}
        >
            {/* Tabs Section */}
            <Box
                sx={{
                    position: { xs: 'fixed', md: 'sticky' }, // Fixed at the bottom for mobile, sticky for desktop
                    bottom: { xs: 0, md: 'unset' }, // Align to the bottom for mobile
                    top: { xs: 'unset', md: 200 }, // Stick below the top for desktop
                    alignSelf: {xs: 'center', md: 'flex-start'},
                    zIndex: 1,
                    width: { xs: '90%', md: '200px' }, // Full width on mobile, fixed width on desktop
                    mb: { xs: 2, md: 0 }, // Remove margin bottom for mobile
                    flexShrink: 0,
                }}
            >
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    textColor="primary"
                    indicatorColor="primary"
                    orientation={isMobile ? 'horizontal' : 'vertical'} // Horizontal on mobile, vertical on desktop
                    sx={{
                        borderBottom: isMobile ? 1 : 0, // Border for horizontal tabs on mobile
                        borderRight: isMobile ? 0 : 1, // Border for vertical tabs on desktop
                        borderColor: 'divider',
                        backgroundColor: '#fff', // Background for tabs
                        borderRadius: 1,
                        '.MuiTab-root': {
                            textTransform: 'none', // Prevent uppercase
                            fontWeight: 'medium',
                            padding: isMobile ? '8px 16px' : '12px 24px', // Adjust padding
                        },
                    }}
                    centered={isMobile} // Center tabs on mobile
                >
                    <Tab label="Prototyping" />
                    <Tab label="Graphic" />
                    <Tab label="Illustration" />
                </Tabs>
            </Box>

            {/* Main Content Section */}
            <Box sx={{ flex: 1, width: { xs: '100%', md: 'calc(100% - 240px)' } }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        color: '#333',
                        marginBottom: 4,
                        textAlign: 'center',
                    }}
                >
                    Design Work
                </Typography>
                <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
                    {selectedTab === 0 && (
                        <>
                            {prototypes.map((proto, index) => (
                                <React.Fragment key={index}>
                                    <PrototypeSection {...proto} />
                                </React.Fragment>
                            ))}
                        </>
                    )}
                    {selectedTab === 1 && (
                        <Typography variant="body1" sx={{ color: '#555', textAlign: 'center' }}>
                            Graphic content goes here. Showcase your branding, posters, or other graphic design work.
                        </Typography>
                    )}
                    {selectedTab === 2 && (
                        <Typography variant="body1" sx={{ color: '#555', textAlign: 'center' }}>
                            Illustration content goes here. Showcase your digital or traditional illustrations.
                        </Typography>
                    )}
                </Box>
            </Box>
        </Box>
    );
}