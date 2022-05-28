import Head from 'next/head'
import Game from '../src/Game'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico?v=0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#252931" />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/favicon-16x16.png" />
        <link rel="mask-icon" href="%PUBLIC_URL%/safari-pinned-tab.svg" color="#334455" />
        <meta name="apple-mobile-web-app-title" content="Tapword" />
        <meta name="application-name" content="Tapword" />
        <meta name="msapplication-TileColor" content="#2288ff" />

        <title>Tapword - Words are Limitless</title>
        <meta name="description" content="Tapword is a word game that tests your knowledge of English words" />
      </Head>

      <Game />
    </div>
  )
}
