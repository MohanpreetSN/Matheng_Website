import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import '../styles/Navbar.css'
import { colors } from "../utils/constants"
import { useState } from 'react';

function MathengNameLarge() {
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

function MathengNameSmall() {
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


let defPages = [
    { name: 'Home', url: '/', textClass: 'menuItemText HomeClass' },
    { name: 'Math', url: '/mathpage', textClass: 'menuItemText MathClass' },
    { name: 'English', url: '/english', textClass: 'menuItemText MathClass' },
    { name: 'Contact', url: '/contact', textClass: 'menuItemText ContactClass' }
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


export default function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [pagesState, setPagesState] = useState(initPagesState);

    function pageUpdater(ind) {
        let pages = [...defPages];
        let currClass = pages[ind].textClass;
        if (!currClass.includes('selected')) {
            pages[ind].textClass = currClass + ' selected';
        }
        return pages;
    }

    function initPagesState() {
        const currentUrl = window.location.href;
        let pages = { ...defPages };
        if (currentUrl.includes('mathpage')) {
            return pageUpdater(1);
        } else if (currentUrl.includes('english')) {
            return pageUpdater(2);
        } else if (currentUrl.includes('contact')) {
            return pageUpdater(3);
        }
        return pageUpdater(0);
    }


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" style={{ background: 'none', boxShadow: 'none', mb: '0px' }}>
            <Container maxWidth={false}>
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Box
                        component="img"
                        sx={{
                            height: '2.25rem',
                            borderRadius: 30,
                            display: { md: 'flex', xs: 'none' }
                            // maxHeight: { xs: 233, md: 167 },
                            // maxWidth: { xs: 350, md: 250 },
                        }}
                        alt="Matheng Logo"
                        src="mathengLogo.jpg"
                    />
                    <MathengNameLarge />

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color={colors.primaryPurple}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pagesState.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    {/* <Typography textAlign="center"><a href={page.url}><span className={page.textClass}>{page.name}</span></a></Typography> */}
                                    <Button
                                        key={page.name}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href = page.url;
                                        }}
                                        sx={{ my: 0, px: 1, color: colors.primaryPurple, display: 'block' }}
                                    >
                                        <a href={page.url}><span className={page.textClass}>{page.name}</span></a>
                                    </Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        component="img"
                        sx={{
                            height: '2.25rem',
                            borderRadius: 30,
                            display: { md: 'none', xs: 'flex' }
                            // maxHeight: { xs: 233, md: 167 },
                            // maxWidth: { xs: 350, md: 250 },
                        }}
                        alt="Matheng Logo"
                        src="mathengLogo.jpg"
                    />
                    <MathengNameSmall />
                    <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'none', md: 'flex', } }} >
                        {pagesState.map((page) => (
                            <Box className='menuItem' key={page.name} sx={{ borderRadius: 5 }}>
                                <Button
                                    key={page.name}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = page.url;
                                    }}
                                    sx={{ my: 0, px: 1, color: colors.primaryPurple, display: 'block' }}
                                >
                                    <a href={page.url}><span className={page.textClass}>{page.name}</span></a>
                                </Button>
                            </Box>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
