import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

export default class MyDocument extends Document {
    static props;

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        this.props = initialProps;
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}
