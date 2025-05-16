import React, { useState } from 'react';
import { Box, ToggleButton, ToggleButtonGroup, Typography, Paper } from '@mui/material';

export default function PrototypeCard({ title, description, figmaEmbedCode, youtubeEmbedCode }) {
    const [mediaTab, setMediaTab] = useState(0);

    const handleMediaTabChange = (event, newValue) => {
        if (newValue !== null) setMediaTab(newValue);
    };

    const hasBothMedia = figmaEmbedCode && youtubeEmbedCode;

    return (
        <Paper sx={{
            p: 2,
            m: 1,
        }}>
            <Typography variant="h5" align="left" sx={{ mb: 2, color: '#333' }}>
                {title}
            </Typography>
            <Typography variant="body1" align="left" sx={{ mb: 4, color: '#555' }}>
                {description}
            </Typography>

            <Box sx={{ position: 'relative', width: '100%', paddingBottom: '56.25%', mb: 1 }}>
                {(!hasBothMedia || mediaTab === 0) && figmaEmbedCode && (
                    <iframe
                        src={figmaEmbedCode}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        allowFullScreen
                        title="Figma Prototype"
                    />
                )}
                {hasBothMedia && mediaTab === 1 && youtubeEmbedCode && (
                    <iframe
                        src={youtubeEmbedCode}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        allowFullScreen
                        title="YouTube Video"
                    />
                )}
                {!hasBothMedia && youtubeEmbedCode && !figmaEmbedCode && (
                    <iframe
                        src={youtubeEmbedCode}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        allowFullScreen
                        title="YouTube Video"
                    />
                )}
            </Box>
            {/* Option to hide the toggles if both media aren't present */}
            {/* {hasBothMedia && ( */}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ToggleButtonGroup
                        value={mediaTab}
                        exclusive
                        onChange={handleMediaTabChange}
                        size='small'
                    >
                        <ToggleButton value={0} sx={{ textTransform: 'none' }}>
                            Figma Prototype
                        </ToggleButton>
                        <ToggleButton value={1} sx={{ textTransform: 'none' }}>
                            YouTube Video
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            {/* )} */}
        </Paper>
    );
}