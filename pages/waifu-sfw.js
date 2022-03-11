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
                <title>Waifu SFW</title>
                <meta name="waifu sfw" content="show waifu sfw selected" />
                <link rel="icon" href="/chibi_waifu.jpeg" />
            </Head>
            <h1 className=' font-bold text-3xl'>SFW</h1>
            <Link href="/">
                <a className={styles.card}>Acceuil</a>
            </Link>
            <div className={styles.row}>
                <button 
                    className={styles.card} 
                    onClick={handleClickNo}>
                       <div className='py-4 flex flex-col justify-center relative font-bold'>NO</div>
                </button>
                <div className={styles.sizedBox}></div>
                    <Image
                    className='flex p-10 rounded-xl'
                        src={waifu}
                        alt="random waifu sfw image"
                        width={300}
                        height={650}
                        blurDataURL="/public/placeholder.jpeg"
                        placeholder="blur"
                        />
                <div className={styles.sizedBox}></div>
                <button 
                    className={styles.card}
                    onClick={handleClickYes}>
                        <div className='py-4 flex flex-col justify-center relative font-bold'>YES</div>
                </button>
            </div>
        </div>
    );
};

export default WaifuSfw;