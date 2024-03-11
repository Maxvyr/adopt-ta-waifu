import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import zeroTwoSky from "../public/zero_two_sky.jpeg";
import IconButton from "./components/icon-button";

const Home = () => {
  const classButton =
    "border rounded-md border-sky-500 hover:border-sky-700 hover:rounded-lg hover:border-2 p-6";

  return (
    <div className={styles.container}>
      <Head>
        <title>Adopt Ta Waifu</title>
        <meta
          name="Adopt Ta Waifu"
          content="Adopt Ta Waifu, searhc and find your best waifu or husbando"
        />
        <link rel="icon" href="/chibi_waifu.jpeg" />
      </Head>

      <main className={styles.main}>
        <Image
          className="rounded-b-[40px] object-cover"
          src={zeroTwoSky}
          alt="zero two night view"
        />

        <p className="text-center -mt-16 pb-16">
          <Image
            className="rounded-full"
            src="/chibi_waifu2.png"
            alt="chibi waifu"
            height={120}
            width={120}
          />
        </p>

        <div className="flex justify-center space-x-32 pb-16">
          <Link href="/waifu-sfw">
            <a className={classButton}>
              <h2 className="font-bold">SFW</h2>
            </a>
          </Link>

          <Link href="/waifu-nsfw">
            <a className={classButton}>
              <h2 className="font-bold">NSFW</h2>
            </a>
          </Link>
        </div>
      </main>

      <footer className="flex justify-between items-center px-4 mt-5 pb-2 border-t border-gray-300">
        <a
          href="https://github.com/Maxvyr/adopt-ta-waifu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="underline text-gray-400">Powered by Maxvyr @2022</div>
        </a>
        <div>
          <IconButton url="https://github.com/Maxvyr" />
          <IconButton url="https://x.com/maxvidalinc" />
        </div>
      </footer>
    </div>
  );
};

export default Home;
