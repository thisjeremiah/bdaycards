import Head from 'next/head'
import { Card } from '../components/Card/Card'
import { ImageSticker } from '../components/Card/Sticker'
import { Stamp } from '../components/Card/Stamp'
// import { Sticker } from '../components/Card/Sticker'

const message = `***,

*** ****** **** *** **.

*** ******! **** *** **! *** ****** **.

***,
********`

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Head>
        <title>bcards</title>
        <meta name="description" content="bcards" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <main
        className="flex items-center justify-center w-full h-full"
        style={{
          backgroundColor: '#fce043',
          backgroundImage: 'linear-gradient(315deg, #fce043 0%, #fb7ba2 74%)',
        }}
      >
        <Card
          className="bg-purple-300 text-white"
          message={message}
          onBack={
            <>
              <Stamp name="hamilton" />
              <ImageSticker name="pug" style={{ top: 100, left: 550 }} />
              <ImageSticker name="tea" style={{ top: -30, left: 400 }} />
            </>
          }
        />
      </main>

      <footer></footer>
    </div>
  )
}
