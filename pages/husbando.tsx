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
            </Head>
            <Link href="/">
                <a>Retour a l acceuil</a>
            </Link>
            <main className={styles.center}>
                <h1>HUSBANDO</h1>
                <Image
                    src='/place_holder.jpeg'
                    alt="Image place holder"
                    height={520}
                    width={520}
                />
            </main>
        </>
    );
};

export default Husbando;