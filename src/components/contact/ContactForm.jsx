import { Box, Grid, ThemeProvider, Typography, Button, Fab, useMediaQuery, TextField } from '@mui/material';

import '../../styles/Home.css';
import '../../styles/App.css';
import { colors } from '../../utils/constants';
import { theme } from '../../utils/Theme';
import RoundedPurpleButton from '../common/RoundedPurpleButton';
import { ResizableImageMedium } from '../common/ResizableImage';


export default function ContactForm() {
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Box
            sx={{
                // display: { sm: 'none', md: 'flex', xs: 'none' },
                // height: '40vw',
                background: 'rgba(108, 99, 255, 0.1)',
                alignItems: 'center',
                justifyContent: 'center',
                pt: { xs: 3, sm: 4, md: 6, lg: 8, xl: 8 },
                pb: { xs: 6, sm: 7, md: 9, lg: 12, xl: 12 },
                px: { xs: 6, sm: 8, md: 8, lg: 20, xl: 35 }
            }}
        >

            <ThemeProvider theme={theme}>
                <Typography variant='h2'
                    sx={{
                        fontFamily: 'grandstander',
                        fontWeight: 'regular',
                        textAlign: "center",
                        color: "black",
                    }}>
                    Free Assesment
                </Typography>
                <Box
                    sx={{
                        background: 'rgba(255, 255, 255, 0.25)',
                        borderRadius: 5,

                        // mx: { xs: 6, sm: 8, md: 8, lg: 20, xl: 20 },
                        pt: { xs: 0.5, sm: 0.75, md: 0.9, lg: 1, xl: 1 },
                    }}
                >
                    <Typography variant='h3'
                        sx={{
                            fontFamily: 'grandstander',
                            fontWeight: 'regular',
                            textAlign: "center",
                        }}>
                        Submit your info for a callback!
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Name"

                            /></div>
                    </Box>
                    <Box align='center' sx={{ mt: { xs: 1.25, sm: 2, md: 4, lg: 5, xl: 6 } }}>
                        <RoundedPurpleButton text='Submit' submit={true} />
                    </Box>
                </Box>

            </ThemeProvider>

        </Box>)
}