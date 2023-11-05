import { Box, Grid, ThemeProvider, Typography, Button, Fab, useMediaQuery } from '@mui/material';

import '../../styles/Home.css';
import '../../styles/App.css';
import { colors } from '../../utils/constants';
import { theme } from '../../utils/Theme';
import RoundedPurpleButton from '../common/RoundedPurpleButton';
import { ResizableImageMedium } from '../common/ResizableImage';
import { SubDivRight } from '../common/SubDiv';

export default function MElementaryDiv() {
    return (
        <SubDivRight
            bgColor={'rgba(255, 175, 103, 0.1)'}
            picSrc={"ElementaryPic.svg"}
            heading={'Ages 3-5'}
            text={'In the Matheng Math Program, youngsters initially engage in counting items and learning the number sequence. This precedes their progression to number writing, all tailored to their own comfortable learning pace. These abilities establish a strong foundation for acquiring fundamental addition and subtraction skills. As your child advances, you\'ll observe their growth in mental calculation ability, heightened concentration, and enhanced critical thinking abilities.'}
        />
    )
}


// export default function MElementaryDiv() {
//     return (
//         <Box
//             sx={{
//                 // display: { sm: 'none', md: 'flex', xs: 'none' },
//                 display: 'flex',
//                 background: 'rgba(255, 175, 103, 0.1)',
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
//                     <ResizableImageMedium src={"ElementaryPic.svg"} />
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
//                                 Ages 3-5
//                             </Typography>
//                             <Typography variant='h4'
//                                 sx={{
//                                     fontFamily: 'inter',
//                                     fontWeight: 'regular',
//                                     pr: { xs: 3, sm: 4, md: 5, lg: 7, xl: 8 },
//                                     pl: { xs: 3, sm: 4 }
//                                     // textAlign: "center",
//                                 }}>
//                                 In the Matheng Math Program, youngsters initially engage in counting items and learning the number sequence. This precedes their progression to number writing, all tailored to their own comfortable learning pace. These abilities establish a strong foundation for acquiring fundamental addition and subtraction skills. As your child advances, you'll observe their growth in mental calculation ability, heightened concentration, and enhanced critical thinking abilities.
//                             </Typography>
//                         </ThemeProvider>
//                     </Box>
//                 </Grid>
//                 <Grid item md={6} sm={12} xs={12} px={'auto'} align='center' display={{ md: 'none', xs: 'block' }}>
//                     <ResizableImageMedium src={"ElementaryPic.svg"} />
//                 </Grid>

//             </Grid>
//         </Box>)
// }