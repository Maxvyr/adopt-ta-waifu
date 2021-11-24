import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const Husbando : NextPage = () => {
    return (
        <>
            <Head>
                <title>Husbando</title>
                <meta name="husbando pages" content="show husbando selected" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>HUSBANDO</h1>
            <Link href="/">
                <a>Retour a l acceuil</a>
            </Link>
        </>
    );
};

export default Husbando;