import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { ReactComponentElement } from 'react';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
