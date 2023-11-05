import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { Helmet } from 'react-helmet';


import NavBar from "../components/Navbar";

import '../styles/App.css'
import EHeaderDiv from '../components/English/EHeaderDiv';
import EAboutDiv from '../components/English/EAboutDiv';
import EElementaryDiv from '../components/English/EElementaryDiv';
import EMiddleDiv from '../components/English/EMiddleDiv';
import EHighDiv from '../components/English/EHighDiv';

export default function EnglishScreen() {
    return (
        <div>
            <Helmet>
                <style>{'body { background-color: #FAFAFF; }'}</style>
            </Helmet>
            <CssBaseline>
                <NavBar />
                <EHeaderDiv />
                <EAboutDiv />
                <EElementaryDiv />
                <EMiddleDiv />
                <EHighDiv />
            </CssBaseline>
        </div>
    )
}