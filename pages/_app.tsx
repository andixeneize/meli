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
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="Description" content="A test website for MELI. You can search your favorite items." />
      </Head>
      <Header setInputText={setInputText} onSubmit={onSubmit}/>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp