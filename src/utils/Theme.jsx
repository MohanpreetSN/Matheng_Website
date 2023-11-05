import { createTheme } from '@mui/material';

const theme = createTheme();

theme.typography.h1 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '4rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '5rem',
    },
};

theme.typography.h2 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '1.75rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '4rem',
    },
};

theme.typography.h3 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '1.25rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '3rem',
    },
};

theme.typography.h4 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '0.8rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.25rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.6rem',
    },
};

theme.typography.h5 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '0.75rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '0.75rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '0.9rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.2rem',
    },
};



export { theme };