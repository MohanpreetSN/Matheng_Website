import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { Helmet } from 'react-helmet';

import NavBar from "../components/Navbar";

import '../styles/App.css'
import '../styles/Home.css'
import { Box } from '@mui/material';
import HeaderDiv from '../components/Home/HeaderDiv';
import ElementaryDiv from '../components/Home/ElementaryDiv';
import MiddleDiv from '../components/Home/MiddleDiv';
import HighDiv from '../components/Home/HighDiv';
import AboutDiv from '../components/Home/AboutDiv';


export default function Home() {
    return (
        <div>
            <Helmet>
                <style>{'body { background-color: #FAFAFF; }'}</style>
            </Helmet>
            <CssBaseline>
                <NavBar />
                <HeaderDiv />
                <AboutDiv />
                <ElementaryDiv />
                <MiddleDiv />
                <HighDiv />
            </CssBaseline>
        </div>
    )
}