import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';

import NavBar from "../components/Navbar";

import '../styles/App.css'
import ContactForm from '../components/contact/ContactForm';



export default function ContactScreen() {
    return (
        <>
            <CssBaseline>
                <NavBar />
                <ContactForm />
            </CssBaseline>
        </>
    )
}