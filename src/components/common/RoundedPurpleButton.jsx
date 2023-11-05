import { Box, Grid, ThemeProvider, Typography, Button, Fab, useMediaQuery } from '@mui/material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import CheckIcon from '@mui/icons-material/Check';

import { theme } from '../../utils/Theme';
import { colors } from '../../utils/constants';

export default function RoundedPurpleButton({ text = "BOOK YOUR FREE ASSESSMENT", submit = false }) {
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));
    const lgDown = useMediaQuery(theme.breakpoints.down("lg"));
    const textGiven = text !== "BOOK YOUR FREE ASSESSMENT";
    function prMaker() {
        if (mdDown) {
            if (!textGiven || submit) {
                return 0.5;
            }
            return 1;
        }
        if (submit) {
            if (lgDown) {
                return 1;
            }
            return 1.25;
        }
        if (textGiven) {
            return 2;
        }
        return 1;
    }
    function buttonSizer() {
        let sizex = "large"
        if (mdDown) {
            sizex = "small";
        } else if (lgDown) {
            sizex = 'medium'
        }
        return sizex;
    }
    return (
        <Fab className='roundedPurpleButton'
            variant="extended"
            size={buttonSizer()}
            aria-label="book free assessment"
            sx={{
                backgroundColor: colors.primaryPurple,
                color: 'white',
                pr: prMaker(),
                mb: 2,
                textTransform: 'none'
            }}>
            <ThemeProvider theme={theme}>
                <Typography variant='h5' fontWeight='regular'>
                    {text}
                </Typography>
            </ThemeProvider>
            {!textGiven && <ArrowForwardIosRoundedIcon sx={{ height: 0.5, pb: 0.3 }} />}
            {(textGiven && submit) && <CheckIcon sx={{ height: 0.5, pb: 0.3 }} />}
        </Fab>)
}