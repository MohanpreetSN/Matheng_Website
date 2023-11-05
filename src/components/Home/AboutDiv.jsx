import { Box, Grid, ThemeProvider, Typography, Button, Fab, useMediaQuery } from '@mui/material';

import '../../styles/Home.css';
import '../../styles/App.css';
import { colors } from '../../utils/constants';
import { theme } from '../../utils/Theme';
import RoundedPurpleButton from '../common/RoundedPurpleButton';
import { ResizableImageMedium } from '../common/ResizableImage';


export default function AboutDiv() {
    return (
        <Box
            sx={{
                // display: { sm: 'none', md: 'flex', xs: 'none' },
                // height: '40vw',
                alignItems: 'center',
                justifyContent: 'center',
                py: { xs: 3, sm: 4, md: 8, lg: 10, xl: 10 },
                px: { xs: 6, sm: 8, md: 8, lg: 20, xl: 35 }
            }}
        >
            <ThemeProvider theme={theme}>
                <Typography
                    variant='h3'
                    fontFamily='inter'
                    fontWeight='medium'
                    align='center'
                    sx={{
                        pb: { xs: 0.6, sm: 1, md: 1, lg: 1, xl: 1.2 },
                    }}
                >
                    About the Matheng Program
                </Typography>
                <Typography
                    variant='h4'
                    fontFamily='inter'
                    fontWeight='regular'
                    align='center'
                >
                    Matheng engages children in actively cultivating critical thinking skills as they advance autonomously through a meticulously designed curriculum. Encompassing a spectrum ranging from basic counting to intricate calculus, as well as phonemic understanding to complex literary works, the Matheng Math and English programs provide comprehensive coverage. The provided worksheets facilitate independent comprehension of novel concepts. With Matheng, students have the opportunity to advance incrementally through gradual, daily practice, fostering steady progress.<br />

                </Typography>

            </ThemeProvider>
            <Box align='center' sx={{ mt: { xs: 1.5, sm: 2, md: 2.5, lg: 3, xl: 3.4 } }}>
                <RoundedPurpleButton text='View Sample Worksheets' />
            </Box>

        </Box>
    )
}