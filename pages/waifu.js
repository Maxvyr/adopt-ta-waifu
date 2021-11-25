import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'


const Waifu = (props) => {

    const [waifu, setWaifu] = useState("https://i.waifu.pics/DjgwmRf.jpg")
   
     useEffect(() => {
       fetch('https://api.waifu.pics/sfw/waifu')
       .then(response => response.json())
       .then(data => {
         setWaifu(data.url)
       })
     }, [])

    return (
        <>
            <Head>
                <title>Waifu</title>
                <meta name="waifu pages" content="show waifu selected" />
            </Head>
            <h1>WAIFU</h1>
            <Image
                src={waifu}
                alt="zero two night view"
                height={500}
                width={1000}
            />
            <Link href="/">
                <a>Retour a l acceuil</a>
            </Link>
        </>
    );
};

export default Waifu;