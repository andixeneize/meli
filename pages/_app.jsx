import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import SearchBox from '../components/searchBox';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [inputText, setInputText] = useState("");
  const router = useRouter();

  const onSearch = (e) => {
      e.preventDefault();

      if (inputText) {
        // Format blank spaces on search url 
        let url = '/items?search=' + inputText;
        url = url.replace(/ /g, '%20');
        router.push(url);
      }
  }

  return (
    <main className="page-container">
      <Head>
        <title>Mercado Libre Argentina</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <SearchBox setInputText={setInputText} onSubmit={onSearch}/>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp;