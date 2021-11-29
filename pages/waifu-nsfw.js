import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'


const WaifuNsfw = () => {

    const [waifu, setWaifu] = useState("https://i.waifu.pics/HFUzsfs.jpg");
   
     useEffect(() => {
       fetchWaifuImg();
     }, [])

     const fetchWaifuImg = () => {
        fetch('https://api.waifu.pics/nsfw/waifu')
        .then(response => response.json())
        .then(data => {
          setWaifu(data.url);
        });
     }

     const handleClick = () => {       
         fetchWaifuImg();
    }
    return (
        <>
            <Head>
                <title>Waifu Nsfw</title>
                <meta name="Waifu Nsfw" content="show waifu nsfw selected" />
            </Head>
            <Link href="/">
                <a>Retour a l acceuil</a>
            </Link>
            <main className={styles.center}>
                <Image
                    src={waifu}
                    alt="Image place holder"
                    height={520}
                    width={520}
                />
            </main>
        </>
    );
};

export default WaifuNsfw;