import { Box, Grid, ThemeProvider, Typography, Button, Fab, useMediaQuery } from '@mui/material';

import '../../styles/Home.css';
import '../../styles/App.css';
import { colors } from '../../utils/constants';
import { theme } from '../../utils/Theme';
import RoundedPurpleButton from '../common/RoundedPurpleButton';
import { ResizableImageMedium } from '../common/ResizableImage';
import { SubDivLeft } from '../common/SubDiv';

export default function EMiddleDiv() {
    return (
        <SubDivLeft
            bgColor={'rgba(244, 97, 166, 0.1)'}
            picSrc={"EMiddlePic.svg"}
            heading={'Ages 6-12'}
            text={'Through consistent and dedicated practice, young learners lay the groundwork for building a strong vocabulary and honing their phonemic skills. Students are taught about the basics of grammar and punctuation. Students also learn to write short sentences and start with small paragraphs to analyze. These cumulative efforts empower them to venture confidently into the domains of both reading and writing.'}
        />
    )
}

