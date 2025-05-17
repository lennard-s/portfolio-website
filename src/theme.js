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
    },
});

export default theme;