import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';

import NavBar from "../components/Navbar";

import '../styles/App.css'



export default function AssessmentScreen() {
    return (
        <>
            <CssBaseline>
                <NavBar />
            </CssBaseline>
            <h1>Assessment Screen</h1>
        </>
    )
}