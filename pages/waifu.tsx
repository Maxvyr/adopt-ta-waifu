import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const Waifu : NextPage = () => {
    return (
        <>
            <Head>
                <title>Waifu</title>
                <meta name="waifu pages" content="show waifu selected" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>WAIFU</h1>
            <Link href="/">
                <a>Retour a l acceuil</a>
            </Link>
        </>
    );
};

export default Waifu;