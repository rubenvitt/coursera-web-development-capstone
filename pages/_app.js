import '../styles/globals.css'
import React, {useState} from "react";
import {LayoutComponent} from "../components/layout.component";
import Head from "next/head";

function MyApp({Component, pageProps}) {
    const [title, setTitle] = useState('');
    return <>
        <Head>
            <title>Rubeen {title !== '' ? `(${title})` : ''} | Coursera</title>
        </Head>
        <LayoutComponent header={title}>
            <Component {...pageProps} titleSetter={setTitle}/>
        </LayoutComponent>
    </>
}

export default MyApp
