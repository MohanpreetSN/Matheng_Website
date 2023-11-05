import { Box, Grid, ThemeProvider, Typography, Button, Fab, useMediaQuery } from '@mui/material';

import '../../styles/Home.css';
import '../../styles/App.css';
import { colors } from '../../utils/constants';
import { theme } from '../../utils/Theme';
import RoundedPurpleButton from '../common/RoundedPurpleButton';
import { ResizableImageMedium } from '../common/ResizableImage';


export default function MAboutDiv() {
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));
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
                >
                    About the Matheng Math Program
                </Typography>
                <Typography
                    variant='h4'
                    fontFamily='inter'
                    fontWeight='regular'
                    align='center'
                >
                    With just 30 minutes of practice a day, most students become proficient in their own grade’s math curriculum within weeks. They can also effortlessly excel in concepts that place them ahead of their peers by several grades in a matter of months. Your Matheng Instructor will perform an assessment test to determine your child's starting point.
                </Typography>
                <Grid container
                    alignItems="center"
                    justifyContent="center"
                >
                    {!mdDown && <Grid item md={6} sm={12} xs={12} >
                        <Box display="flex"
                            justifyContent="center">
                            <Typography variant='h4'
                                sx={{
                                    fontFamily: 'inter',
                                    fontWeight: 'regular',
                                    // textAlign: "center",
                                }}>
                                <ul>
                                    <li>Counting and number sequencing</li>
                                    <li>Addition and Subtraction</li>
                                    <li>Multiplication and Division</li>
                                    <li>Order of Operations</li>
                                    <li>Geometry and Measurement</li>
                                    <li>Fractions and Decimals</li>
                                </ul>
                            </Typography>
                        </Box>
                    </Grid>}
                    {!mdDown && <Grid item md={6} sm={12} xs={12} >
                        <Box display="flex"
                            justifyContent="center">
                            <Typography variant='h4'
                                sx={{
                                    fontFamily: 'inter',
                                    fontWeight: 'regular',
                                    // textAlign: "center",
                                }}>
                                <ul>
                                    <li>Positive and Negative Numbers</li>
                                    <li>Solving equations</li>
                                    <li>Graphs and Charts</li>
                                    <li>Probability and Statistics</li>
                                    <li>Algebra - Elementary to Advanced</li>
                                    <li>Trigonometry and Logarithms</li>
                                </ul>
                            </Typography>
                        </Box>
                    </Grid>}
                    {mdDown && <Grid item md={6} sm={12} xs={12}  >
                        <Box display="flex"
                            justifyContent="center" >
                            <Typography variant='h4'
                                sx={{
                                    fontFamily: 'inter',
                                    fontWeight: 'regular',
                                    // textAlign: "center",
                                }}>
                                <ul>
                                    <li>Positive and Negative Numbers</li>
                                    <li>Solving equations</li>
                                    <li>Graphs and Charts</li>
                                    <li>Probability and Statistics</li>
                                    <li>Algebra - Elementary to Advanced</li>
                                    <li>Trigonometry and Logarithms</li>
                                    <li>Positive and Negative Numbers</li>
                                    <li>Solving equations</li>
                                    <li>Graphs and Charts</li>
                                    <li>Probability and Statistics</li>
                                    <li>Algebra - Elementary to Advanced</li>
                                    <li>Trigonometry and Logarithms</li>
                                </ul>
                            </Typography>
                        </Box>
                    </Grid>}
                </Grid>
            </ThemeProvider>
            <Box align='center' sx={{ mt: { xs: 1.25, sm: 2, md: 4, lg: 5, xl: 6 } }}>
                <RoundedPurpleButton text='View Sample Worksheets' />
            </Box>
        </Box>)
}