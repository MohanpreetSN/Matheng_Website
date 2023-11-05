import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { Helmet } from 'react-helmet';

import NavBar from "../components/Navbar";

import '../styles/App.css'
import MHeaderDiv from '../components/Math/MHeaderDiv';
import MAboutDiv from '../components/Math/MAboutDiv';
import MElementaryDiv from '../components/Math/MElementaryDiv';
import MMiddleDiv from '../components/Math/MMiddleDiv';
import MHighDiv from '../components/Math/MHighDiv';



export default function MathScreen() {
    return (
        <div>
            <Helmet>
                <style>{'body { background-color: #FAFAFF; }'}</style>
            </Helmet>
            <CssBaseline>
                <NavBar />
                <MHeaderDiv />
                <MAboutDiv />
                <MElementaryDiv />
                <MMiddleDiv />
                <MHighDiv />
            </CssBaseline>
        </div>
    )
}