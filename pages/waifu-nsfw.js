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

     const handleClickYes = () => {       
         fetchWaifuImg();
    }


    const handleClickNo = () => {       
        alert("Coming Soon!!");
    }
    



    return (
        <div className={styles.main, styles.center}>
            <Head>
                <title>Waifu</title>
                <meta name="waifu nsfw" content="show waifu nsfw selected" />
            </Head>
            <h1 className={styles.title}>NSFW</h1>
            <Link href="/">
                <a className={styles.card}>Acceuil</a>
            </Link>
            <div className={styles.row}>
                <button 
                    className={styles.card}
                    onClick={handleClickNo}>
                        NO
                </button>
                <div className={styles.sizedBox}></div>
                    <Image
                    className={styles.imageWaifu}
                        src={waifu}
                        alt="random waifu nsfw image"
                        width={300}
                        height={650}
                        blurDataURL="/public/placeholder.jpeg"
                        placeholder="blur"
                        />
                <div className={styles.sizedBox}></div>
                <button 
                    className={styles.card}
                    onClick={handleClickYes}>
                        YES
                </button>
            </div>
        </div>
    );
};

export default WaifuNsfw;