import { Box, Grid, ThemeProvider, Typography, Button, Fab, useMediaQuery } from '@mui/material';

import '../../styles/Home.css';
import '../../styles/App.css';
import { colors } from '../../utils/constants';
import { theme } from '../../utils/Theme';
import RoundedPurpleButton from '../common/RoundedPurpleButton';
import { ResizableImageMedium } from '../common/ResizableImage';
import { SubDivRight } from '../common/SubDiv';

export default function EElementaryDiv() {
    return (
        <SubDivRight
            bgColor={'rgba(255, 175, 103, 0.1)'}
            picSrc={"EElementaryPic.svg"}
            heading={'Ages 3-5'}
            text={'At the beginning of the Matheng English Program, students start with letter recognition, phonics and letter writing as they are familiarized with the alphabet. They are also taught about common words and objects with the help of vibrant and playful pictures.  With consistent practice, students establish a bedrock of vocabulary, memory retention, and phonemic acumen, which equips them to start learning reading and writing.'}
        />
    )
}
