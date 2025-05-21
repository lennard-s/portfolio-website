import React, { useState } from 'react';
import { Box, Tabs, Tab, useMediaQuery, useTheme, Typography, Paper } from '@mui/material';
import PrototypeCard from '../components/prototypeCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="" allowfullscreen></iframe>
// prototype data
const prototypes = [
    {
        title: 'Tamagotchi BRONT',
        description: 'A Tamagotchi-like experience, where the user can interact with a virtual pet.',
        figmaEmbedCode: 'https://embed.figma.com/proto/g0v2A1yKpF2Sgtct9BbTzx/Tamagotchi-BRONT----?page-id=0%3A1&node-id=142-316&starting-point-node-id=34%3A10&embed-host=share',
        youtubeEmbedCode: 'https://www.youtube.com/embed/IPbW7ZShpjg?si=XDgXpWKmrPZ_tOZl',
    },
    {
        title: 'Campus Maps Redesign',
        description: 'A complete overhaul of the RIT campus map experience.',
        figmaEmbedCode: 'https://embed.figma.com/proto/UAOzmFJZhKM65EPHXo7UjW/Campus-Map-Redesign?page-id=0%3A1&node-id=1-2186&starting-point-node-id=1%3A2186&embed-host=share',
        youtubeEmbedCode: 'https://www.youtube.com/embed/your_video_id_here',
    },
    {
        title: 'North Star Goal Tracker',
        description: 'An AI powered goal setting and tracking app.',
        figmaEmbedCode: 'https://embed.figma.com/proto/tseog53dc3Bu6f151el3EJ/North-Star-Prototype?page-id=0%3A1&node-id=1-809&starting-point-node-id=1%3A809&embed-host=share',
        youtubeEmbedCode: 'https://www.youtube.com/embed/your_video_id_here',
    },
];

const settings = {
    dots: true,
    adaptiveHeight: true,
    infinite: true,
    centerMode: true,
    centerPadding: "5px",
    centered: true,
    speed: 500,
    slidesToShow: 1, // Number of cards visible at once
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 768, // For smaller screens
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

export default function DesignPage() {
    const [selectedTab, setSelectedTab] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleTabChange = (event, newValue) => {
        if (newValue !== null) setSelectedTab(newValue);
    };

    return (
        <>
            {/* Page Container */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' }, 
                    justifyContent: 'center',
                    p: 2,
                    // border: '2px solid #FFA500', // Orange border for the entire page
                }}
            >
                {/* Tabs Section */}
                <Box sx={{ width: { xs: '90%', md: 'fit-content'}, mr: 10}}>
                    <Paper
                        sx={{
                            position: { xs: 'fixed', md: 'sticky' },
                            top: { xs: 'unset', md: 180 }, // Fixed at top on mobile, sticky on desktop
                            bottom: { xs: 0, md: 'unset' },
                            width: 'fit-content',
                            mb: { xs: 2, md: 0 },
                            alignSelf: { xs: 'center', md: 'flex-start' },
                            borderRadius: 1,
                        }}
                    >
                        <Tabs
                            value={selectedTab}
                            onChange={handleTabChange}
                            textColor="primary"
                            indicatorColor="primary"
                            orientation={isMobile ? 'horizontal' : 'vertical'}
                            variant="scrollable"
                            sx={{
                                borderBottom: isMobile ? 1 : 0,
                                borderRight: isMobile ? 0 : 1,
                                borderColor: 'divider',
                                '.MuiTab-root': {
                                    textTransform: 'none',
                                    fontWeight: 'medium',
                                    padding: isMobile ? '8px 16px' : '12px 24px',
                                },
                            }}
                            centered={isMobile}
                        >
                            <Tab label="Prototyping" />
                            <Tab label="Graphic" />
                            <Tab label="Illustration" />
                        </Tabs>
                    </Paper>
                </Box>

                {/* Main Content Section */}
                <Box
                    sx={{
                        maxWidth: { xs: '90%', md: '60%' },
                        height: '80vh',
                        pt: { xs: 2, md: 0 }, // Padding top on mobile to account for fixed tabs
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        mx: { xs: 'auto', md: 'unset'}
                        // border: '2px solid #0000FF', // Blue border for the main content
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 'bold',
                            color: '#333',
                            textAlign: 'center',
                            mb: 1,
                        }}
                    >
                        Design Work
                    </Typography>
                        {selectedTab === 0 && (
                            <Slider {...settings}>
                                {prototypes.map((proto, index) => (
                                    <PrototypeCard key={index} {...proto} />
                                ))}
                            </Slider>
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
        </>
    );
}