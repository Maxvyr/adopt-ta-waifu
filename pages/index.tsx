import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adopt Ta Waifu</title>
        <meta name="Adopt Ta Waifu" content="Adopt Ta Waifu, searhc and find your best waifu or husbando" />
        <link rel="icon" href="/chibi_waifu.jpeg" />
      </Head>

      <main className={styles.main}>
        <Image
          src='/zero_two_sky.jpeg'
          alt="zero two night view"
          height={500}
          width={1000}
        />

        <p className={styles.description}>
          <Image
          className={styles.logo}
          src='/chibi_waifu2.png'
          alt="chibi waifu"
          height={120}
          width={120}
          />
        </p>

        <div className={styles.grid}>
          <Link href="/waifu">
            <a className={styles.card}>
              <h2>Waifu</h2>
            </a>
          </Link>
          
          <Link href="/husbando">
            <a className={styles.card}>
              <h2>Husbando</h2>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Maxvyr/adopt-ta-waifu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Maxvyr
        </a>
      </footer>
    </div>
  )
}

export default Home
