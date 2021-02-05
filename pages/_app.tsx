import type { AppProps } from 'next/app';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head';
import Header from '../components/header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [inputText, setInputText] = useState("");
  const router = useRouter();

  const onSubmit = (e) => {
      e.preventDefault();

      if (inputText) {
          let url = '/items?search=' + inputText;
          url = url.replace(/ /g, '%20');
          router.push(url);
      }
  }


  return (
    <main className="page-container">
      <Head>
        <title>MELI Test Site</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Header setInputText={setInputText} onSubmit={onSubmit}/>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp