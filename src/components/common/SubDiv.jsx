import { Box, Grid, ThemeProvider, Typography, Button, Fab, useMediaQuery } from '@mui/material';

import '../../styles/Home.css';
import '../../styles/App.css';
import { colors } from '../../utils/constants';
import { theme } from '../../utils/Theme';
import RoundedPurpleButton from '../common/RoundedPurpleButton';
import { ResizableImageMedium } from '../common/ResizableImage';


export function SubDivRight({ bgColor, picSrc, heading, text }) {
    return (
        <Box
            sx={{
                // display: { sm: 'none', md: 'flex', xs: 'none' },
                display: 'flex',
                background: bgColor,
                // height: '40vw',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Grid container
                alignItems="center"
                justifyContent="center"
                sx={{
                    py: { xs: 3, sm: 4, md: 4, lg: 4, xl: 5 }
                }}>
                <Grid item md={6} sm={12} xs={12} px={'auto'} align='center' display={{ md: 'block', xs: 'none' }}>
                    <ResizableImageMedium src={picSrc} />
                </Grid>

                <Grid item md={6} sm={12} xs={12} align='center' sx={{ py: { xs: 2, sm: 3 } }}>
                    <Box sx={{ py: { lg: 2 } }}>
                        <ThemeProvider theme={theme}>
                            <Typography variant='h2'
                                sx={{
                                    fontFamily: 'grandstander',
                                    fontWeight: 'regular',
                                    // textAlign: "center",
                                }}>
                                {heading}
                            </Typography>
                            <Typography variant='h4'
                                sx={{
                                    fontFamily: 'inter',
                                    fontWeight: 'regular',
                                    pr: { xs: 3, sm: 4, md: 4, lg: 7, xl: 8 },
                                    pl: { xs: 3, sm: 4 }
                                    // textAlign: "center",
                                }}>
                                {text}
                            </Typography>
                        </ThemeProvider>
                    </Box>
                </Grid>
                <Grid item md={6} sm={12} xs={12} px={'auto'} align='center' display={{ md: 'none', xs: 'block' }}>
                    <ResizableImageMedium src={picSrc} />
                </Grid>

            </Grid>
        </Box>)
}


export function SubDivLeft({ bgColor, picSrc, heading, text }) {
    return (
        <Box
            sx={{
                // display: { sm: 'none', md: 'flex', xs: 'none' },
                display: 'flex',
                background: bgColor,
                // height: '40vw',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Grid container
                alignItems="center"
                justifyContent="center"
                sx={{
                    py: { xs: 3, sm: 4, md: 4, lg: 4, xl: 5 }
                }}>
                <Grid item md={6} sm={12} xs={12} align='center' sx={{ py: { xs: 2, sm: 3 } }}>
                    <Box sx={{ py: { lg: 2 } }}>
                        <ThemeProvider theme={theme}>
                            <Typography variant='h2'
                                sx={{
                                    fontFamily: 'grandstander',
                                    fontWeight: 'regular',
                                    // textAlign: "center",
                                }}>
                                {heading}
                            </Typography>
                            <Typography variant='h4'
                                sx={{
                                    fontFamily: 'inter',
                                    fontWeight: 'regular',
                                    pl: { xs: 3, sm: 4, md: 4, lg: 7, xl: 8 },
                                    pr: { xs: 3, sm: 4 }
                                    // textAlign: "center",
                                }}>
                                {text}
                            </Typography>
                        </ThemeProvider>
                    </Box>
                </Grid>
                <Grid item md={6} sm={12} xs={12} px={'auto'} align='center' >
                    <ResizableImageMedium src={picSrc} />
                </Grid>

            </Grid>
        </Box>)
}