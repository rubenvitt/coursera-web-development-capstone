import '../styles/globals.css'
import React, {useState} from "react";
import {LayoutComponent} from "../components/layout.component";

function MyApp({Component, pageProps}) {
    const [title, setTitle] = useState('');
    return <><LayoutComponent header={title}>
        <Component {...pageProps} titleSetter={setTitle}/>
    </LayoutComponent>
    </>
}

export default MyApp
