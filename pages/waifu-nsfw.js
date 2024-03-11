import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Loading from "./components/loading";

const WaifuNsfw = () => {
  const [waifu, setWaifu] = useState("");

  useEffect(() => {
    fetchWaifuImg();
  }, []);

  const fetchWaifuImg = () => {
    fetch("https://api.waifu.pics/nsfw/waifu")
      .then((response) => response.json())
      .then((data) => {
        setWaifu(data.url);
      });
  };

  const handleClickYes = () => {
    setWaifu("");
    fetchWaifuImg();
  };

  const handleClickNo = () => {
    alert("Coming Soon!!");
  };

  return (
    <div className={(styles.main, styles.center)}>
      <Head>
        <title>Waifu NSFW</title>
        <meta name="waifu nsfw" content="show waifu nsfw selected" />
        <link rel="icon" href="/chibi_waifu.jpeg" />
      </Head>
      <h1 className=" font-bold text-3xl">NSFW</h1>
      <Link href="/">
        <a className={styles.card}>Acceuil</a>
      </Link>
      <div className={styles.row}>
        <button className={styles.card} onClick={handleClickNo}>
          <div className="py-4 flex flex-col justify-center relative font-bold">
            NO
          </div>
        </button>
        <div className={styles.sizedBox}></div>
        {waifu !== "" && (
          <Image
            className="flex p-10 rounded-xl"
            src={waifu}
            alt="random waifu nsfw image"
            width={300}
            height={650}
            blurDataURL="/public/placeholder.jpeg"
            placeholder="blur"
          />
        )}
        {waifu === "" && <Loading />}
        <div className={styles.sizedBox}></div>
        <button className={styles.card} onClick={handleClickYes}>
          <div className="py-4 flex flex-col justify-center relative font-bold">
            YES
          </div>
        </button>
      </div>
    </div>
  );
};

export default WaifuNsfw;
