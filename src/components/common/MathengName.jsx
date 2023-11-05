import Typography from '@mui/material/Typography';

import { colors } from "../../utils/constants"

export function MathengNameLarge() {
    return (
        <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
                mx: 2,
                pr: 1,
                mb: 0.75,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'caveat',
                fontWeight: 700,
                fontStyle: 'italic',
                letterSpacing: '.1rem',
                color: colors.primaryPurple,
                textDecoration: 'none',
                fontSize: '2.25rem',
            }}
        >
            matheng
        </Typography>
    )
}

export function MathengNameSmall() {
    return (
        <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'caveat',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: colors.primaryPurple,
                textDecoration: 'none',
            }}
        >
            matheng
        </Typography>
    )
}



// module.exports = { MathengNameLarge, MathengNameSmall }