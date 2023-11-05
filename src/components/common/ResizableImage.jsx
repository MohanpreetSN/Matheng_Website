import { Box, Grid, ThemeProvider, Typography, Button, Fab, useMediaQuery } from '@mui/material';


export function ResizableImage({ src }) {
    return (
        <Box
            component="img"
            sx={{
                height: { xl: '32rem', lg: '28rem', md: '22rem', sm: '18rem', xs: '16rem' }
            }}
            alt="Header Image"
            src={src}
        />
    )
}

export function ResizableImageMedium({ src }) {
    return (
        <Box
            component="img"
            sx={{
                height: { xl: '24rem', lg: '20rem', md: '15rem', sm: '12rem', xs: '8rem' }
            }}
            alt="Header Image"
            src={src}
        />
    )
}