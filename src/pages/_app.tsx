import type { AppProps } from 'next/app'
import Head from 'next/head'
import cx from 'classnames'
import React from 'react'
import { Noto_Serif_Display } from '@next/font/google'

import '../styles/globals.css'

import bg from '../../public/2x/background.jpeg'
import favicon16 from '../../public/favicon-16x16.png'
import favicon32 from '../../public/favicon-32x32.png'

export default function App({ Component, pageProps }: AppProps) {
  const title = "Kelly & Yan"
  const description = "Join us on our special day."
  const url = "htpps://kelly.and.yan.co"

  const [isLoaded, setLoaded] = React.useState(false)
  React.useEffect(() => {
    document.fonts.ready.then(() => {
      setLoaded(true)
    })
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex,nofollow,noarchive" />

        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={bg.src} />

        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={bg.src} />
        <meta property="og:description" content={description} />

        <meta name="viewport" content="initial-scale=1, minimum-scale=1" />

        <link rel="icon" type="image/png" sizes="32x32" href={favicon32.src} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16.src} />
      </Head>
      <main className={cx('app', !isLoaded && 'appLoading')}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
