import { Box, Grid, ThemeProvider, Typography, Button, Fab, useMediaQuery } from '@mui/material';

import '../../styles/Home.css';
import '../../styles/App.css';
import { colors } from '../../utils/constants';
import { theme } from '../../utils/Theme';
import RoundedPurpleButton from '../common/RoundedPurpleButton';
import { ResizableImageMedium } from '../common/ResizableImage';


export default function EAboutDiv() {
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
                    About the Matheng English Program
                </Typography>
                <Typography
                    variant='h4'
                    fontFamily='inter'
                    fontWeight='regular'
                    align='center'
                >
                    The Matheng English Program can empower your child to communicate effectively, access information, and succeed in an interconnected global landscape. Students work at their own pace and learn reading, writing and speaking skills and surpass their peers in a short period of time, paving the way for a brighter future.
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
                                    <li>Phonetics and Letter Recognition</li>
                                    <li>Vocabulary and Pronunciation</li>
                                    <li>Nouns and Verbs</li>
                                    <li>Adjectives and Adverbs</li>
                                    <li>Subject and Predicate</li>
                                    <li>Grammar and Punctuation</li>
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
                                    <li>Sentence Building</li>
                                    <li>Reading Comprehension</li>
                                    <li>Interpretation and Summarization</li>
                                    <li>Essay and Article Writing</li>
                                    <li>Critical Thinking</li>
                                    <li>Fluency and Speaking Skills</li>
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
                                    <li>Phonetics and Letter Recognition</li>
                                    <li>Vocabulary and Pronunciation</li>
                                    <li>Nouns and Verbs</li>
                                    <li>Adjectives and Adverbs</li>
                                    <li>Subject and Predicate</li>
                                    <li>Grammar and Punctuation</li>
                                    <li>Sentence Building</li>
                                    <li>Reading Comprehension</li>
                                    <li>Interpretation and Summarization</li>
                                    <li>Essay and Article Writing</li>
                                    <li>Critical Thinking</li>
                                    <li>Fluency and Speaking Skills</li>
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