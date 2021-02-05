import type { AppProps } from 'next/app';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

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
    <div className="page-container">
      <Header setInputText={setInputText} onSubmit={onSubmit}/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp