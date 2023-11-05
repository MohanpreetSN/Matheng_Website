import { Box, Grid, ThemeProvider, Typography, Button, Fab, useMediaQuery } from '@mui/material';

import '../../styles/Home.css';
import '../../styles/App.css';
import { colors } from '../../utils/constants';
import { theme } from '../../utils/Theme';
import RoundedPurpleButton from '../common/RoundedPurpleButton';
import { ResizableImage } from '../common/ResizableImage';


export default function EHeaderDiv() {

    return (
        <Box
            sx={{
                // display: { sm: 'none', md: 'flex', xs: 'none' },
                display: 'flex',
                background: 'rgba(108, 99, 255, 0.1)',
                // height: '40vw',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Grid container
                alignItems="center"
                justifyContent="center"
                sx={{
                    py: { xs: 3, sm: 4, md: 8, lg: 8, xl: 8 }
                }}>
                <Grid item md={6} sm={12} xs={12} align='center' sx={{ py: { xs: 2, sm: 3 } }}>
                    <Box sx={{ py: { lg: 2 } }}>
                        <ThemeProvider theme={theme}>
                            <Typography variant='h2'
                                sx={{
                                    fontFamily: 'grandstander',
                                    fontWeight: '500',
                                    // textAlign: "center",
                                }}>
                                Develop and Enhance<br />your child’s reading<br />and writing skills
                            </Typography>
                        </ThemeProvider>
                    </Box>
                    <Box align='center' sx={{ mt: { xs: 0.75, sm: 1, md: 1.5, lg: 0, xl: 0 } }}>
                        <RoundedPurpleButton />
                    </Box>
                </Grid>
                <Grid item md={6} sm={12} xs={12} px={'auto'} align='center' sx={{
                    pl: { xs: 1, sm: 1 }
                }}>
                    <ResizableImage src={"EnglishPic.svg"} />
                </Grid>

            </Grid>
        </Box>
    )
}