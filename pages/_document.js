import { Html, Head, Main, NextScript } from 'next/document'

import { siteMeta } from 'lib/constants'
const { siteLang } = siteMeta

const Document = () => {
  return (
    <Html lang={siteLang}>
      <Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Head>
    </Html>
  )
}

export default Document
