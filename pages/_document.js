import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
            <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
            <meta name="Description" content="A test website for MELI. You can search your favorite items." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument