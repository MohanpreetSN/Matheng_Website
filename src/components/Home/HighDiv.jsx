import { Box, Grid, ThemeProvider, Typography, Button, Fab, useMediaQuery } from '@mui/material';

import '../../styles/Home.css';
import '../../styles/App.css';
import { colors } from '../../utils/constants';
import { theme } from '../../utils/Theme';
import RoundedPurpleButton from '../common/RoundedPurpleButton';
import { ResizableImageMedium } from '../common/ResizableImage';
import { SubDivRight } from '../common/SubDiv';

export default function HighDiv() {
    return (
        <SubDivRight
            bgColor={'rgba(108, 99, 255, 0.1)'}
            picSrc={"MainHigh.svg"}
            heading={'Ages 13+'}
            text={'Throughout middle and high school years, the Kumon self-learning methodology plays a pivotal role in honing vital skills like evidence analysis and evaluation. These competencies empower your child to construct a formidable academic foundation. By embracing the discipline ingrained through daily exercises, they\'ll be exceptionally equipped for the demands of college and their future career path.'}
        />
    )
}

// export default function HighDiv() {
//     return (
//         <Box
//             sx={{
//                 // display: { sm: 'none', md: 'flex', xs: 'none' },
//                 display: 'flex',
//                 background: 'rgba(108, 99, 255, 0.1)',
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
//                 <Grid item md={6} sm={12} xs={12} px={'auto'} align='center' display={{ md: 'block', xs: 'none' }}>
//                     <ResizableImageMedium src={"MainHigh.svg"} />
//                 </Grid>

//                 <Grid item md={6} sm={12} xs={12} align='center' sx={{ py: { xs: 2, sm: 3 } }}>
//                     <Box sx={{ py: { lg: 2 } }}>
//                         <ThemeProvider theme={theme}>
//                             <Typography variant='h2'
//                                 sx={{
//                                     fontFamily: 'grandstander',
//                                     fontWeight: 'regular',
//                                     // textAlign: "center",
//                                 }}>
//                                 Ages 13+
//                             </Typography>
//                             <Typography variant='h4'
//                                 sx={{
//                                     fontFamily: 'inter',
//                                     fontWeight: 'regular',
//                                     pr: { xs: 3, sm: 4, md: 4, lg: 7, xl: 8 },
//                                     pl: { xs: 3, sm: 4 }
//                                     // textAlign: "center",
//                                 }}>
//                                 Throughout middle and high school years, the Kumon self-learning methodology plays a pivotal role in honing vital skills like evidence analysis and evaluation. These competencies empower your child to construct a formidable academic foundation. By embracing the discipline ingrained through daily exercises, they'll be exceptionally equipped for the demands of college and their future career path.
//                             </Typography>
//                         </ThemeProvider>
//                     </Box>
//                 </Grid>
//                 <Grid item md={6} sm={12} xs={12} px={'auto'} align='center' display={{ md: 'none', xs: 'block' }}>
//                     <ResizableImageMedium src={"MainHigh.svg"} />
//                 </Grid>

//             </Grid>
//         </Box>)
// }