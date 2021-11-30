import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'


const WaifuSfw = (props) => {

    const [waifu, setWaifu] = useState("https://i.waifu.pics/DjgwmRf.jpg")
   
     useEffect(() => {
       fetchWaifuImg();
     }, [])

     const fetchWaifuImg = () => {
        fetch('https://api.waifu.pics/sfw/waifu')
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
                <meta name="waifu sfw" content="show waifu sfw selected" />
            </Head>
            <h1>WAIFU</h1>
            <Link href="/">
                <a>Retour a l acceuil</a>
            </Link>
            <div className={styles.sizedBox}></div>

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
                        alt="random waifu sfw image"
                        width={300}
                        height={500}
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

export default WaifuSfw;