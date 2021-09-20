import Head from 'next/head'
import { CardCollection } from '../components/CardCollection'
// import { Card } from '../components/Card/Card'
// import { Envelope } from '../components/Card/Envelope'
// import { ImageSticker } from '../components/Card/Sticker'
// import { Stamp } from '../components/Card/Stamp'
// import { Sticker } from '../components/Card/Sticker'

const message = `***,

*** ****** **** *** **.

*** ******! **** *** **! *** ****** **.

***,
********`

// <Card
// className="bg-purple-300 text-white"
// message={message}
// onBack={
// <>
// <Stamp name="hamilton" />
// <ImageSticker name="pug" style={{ top: 100, left: 550 }} />
// <ImageSticker name="tea" style={{ top: -30, left: 400 }} />
// </>
// }
// />

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Head>
        <title>Birthday Cards</title>
        <meta name="description" content="bcards" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main
        className="flex items-center justify-center w-full h-full"
        style={{
          backgroundColor: '#fce043',
          backgroundImage: 'linear-gradient(315deg, #fce043 0%, #fb7ba2 74%)',
        }}
      >
        <CardCollection />
      </main>

      <footer></footer>
    </div>
  )
}
