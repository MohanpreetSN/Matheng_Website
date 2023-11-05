import { Box, Grid, ThemeProvider, Typography, Button, Fab, useMediaQuery } from '@mui/material';

import '../../styles/Home.css';
import '../../styles/App.css';
import { colors } from '../../utils/constants';
import { theme } from '../../utils/Theme';
import RoundedPurpleButton from '../common/RoundedPurpleButton';
import { ResizableImageMedium } from '../common/ResizableImage';
import { SubDivLeft } from '../common/SubDiv';

export default function MiddleDiv() {
    return (
        <SubDivLeft
            bgColor={'rgba(244, 97, 166, 0.1)'}
            picSrc={"MainMiddle.svg"}
            heading={'Ages 6-12'}
            text={'After the enrollment, an initial assessment, free of charge, will assist the instructor in gauging the ideal entry point for the program. Your child\'s advancement will then unfold at their unique rhythm through personalized guidance, meticulously curated by our Instructors, and further reinforced at home through regular practice. With just 20 minutes of practice daily, your child can excel and surpass their grade’s curriculum.'}
        />
    )
}

// export default function MiddleDiv() {
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
//                                     pl: { xs: 3, sm: 4, md: 4, lg: 7, xl: 8 },
//                                     pr: { xs: 3, sm: 4 }
//                                     // textAlign: "center",
//                                 }}>
//                                 After the enrollment, an initial assessment, free of charge, will assist the instructor in gauging the ideal entry point for the program. Your child's advancement will then unfold at their unique rhythm through personalized guidance, meticulously curated by our Instructors, and further reinforced at home through regular practice. With just 20 minutes of practice daily, your child can excel and surpass their grade’s curriculum.
//                             </Typography>
//                         </ThemeProvider>
//                     </Box>
//                 </Grid>
//                 <Grid item md={6} sm={12} xs={12} px={'auto'} align='center' >
//                     <ResizableImageMedium src={"MainMiddle.svg"} />
//                 </Grid>

//             </Grid>
//         </Box>)
// }