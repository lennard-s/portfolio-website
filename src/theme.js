import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: 'linear-gradient(to right, #f0f4f8, #d9e2ec)',
                    minHeight: '100vh',
                    backgroundAttachment: 'fixed',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    '--angle': '135deg',
                    background: 'linear-gradient(var(--angle), rgba(250, 250, 250, 0.5), rgba(240, 248, 255, 0.5))',
                },
            },
        },
    },
});

export default theme;