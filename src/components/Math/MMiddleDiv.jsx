import { Box, Grid, ThemeProvider, Typography, Button, Fab, useMediaQuery } from '@mui/material';

import '../../styles/Home.css';
import '../../styles/App.css';
import { colors } from '../../utils/constants';
import { theme } from '../../utils/Theme';
import RoundedPurpleButton from '../common/RoundedPurpleButton';
import { ResizableImageMedium } from '../common/ResizableImage';
import { SubDivLeft } from '../common/SubDiv';

export default function MMiddleDiv() {
    return (
        <SubDivLeft
            bgColor={'rgba(244, 97, 166, 0.1)'}
            picSrc={"MiddlePic.svg"}
            heading={'Ages 6-12'}
            text={'Throughout elementary and middle school, the Matheng Math Program supports students in enhancing their mathematical proficiency through consistent daily practice. This process involves reinforcing their basics in elementary concepts like addition and subtraction, and fostering a deeper understanding of mathematical concepts like algebra and calculus. This develops a bedrock of knowledge upon which students can rely throughout their academic journey, and bolsters the critical thinking essential for the pursuit of scientific learning.'}
        />
    )
}


// export default function MMiddleDiv() {
//     return (
//         <Box
//             sx={{
//                 // display: { sm: 'none', md: 'flex', xs: 'none' },
//                 display: 'flex',
//                 background: 'rgba(244, 97, 166, 0.1)',
//                 // height: '40vw',
//                 alignItems: 'center',
//                 justifyContent: 'center'
//             }}
//         >
//             <Grid container
//                 alignItems="center"
//                 justifyContent="center"
//                 sx={{
//                     py: { xs: 3, sm: 4, md: 4, lg: 4, xl: 5 }
//                 }}>
//                 <Grid item md={6} sm={12} xs={12} align='center' sx={{ py: { xs: 2, sm: 3 } }}>
//                     <Box sx={{ py: { lg: 2 } }}>
//                         <ThemeProvider theme={theme}>
//                             <Typography variant='h2'
//                                 sx={{
//                                     fontFamily: 'grandstander',
//                                     fontWeight: 'regular',
//                                     // textAlign: "center",
//                                 }}>
//                                 Ages 6-12
//                             </Typography>
//                             <Typography variant='h4'
//                                 sx={{
//                                     fontFamily: 'inter',
//                                     fontWeight: 'regular',
//                                     pr: { xs: 3, sm: 4, md: 5, lg: 7, xl: 8 },
//                                     pl: { xs: 3, sm: 4 }
//                                     // textAlign: "center",
//                                 }}>
//                                 Throughout elementary and middle school, the Matheng Math Program supports students in enhancing their mathematical proficiency through consistent daily practice. This process involves reinforcing their basics in elementary concepts like addition and subtraction, and fostering a deeper understanding of mathematical concepts like algebra and calculus. This develops a bedrock of knowledge upon which students can rely throughout their academic journey, and bolsters the critical thinking essential for the pursuit of scientific learning.
//                             </Typography>
//                         </ThemeProvider>
//                     </Box>
//                 </Grid>
//                 <Grid item md={6} sm={12} xs={12} px={'auto'} align='center' >
//                     <ResizableImageMedium src={"MiddlePic.svg"} />
//                 </Grid>

//             </Grid>
//         </Box>)
// }