import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Loading from "./components/loading";

const WaifuSfw = (props) => {
  const buttonsStyle =
    "border rounded-md border-sky-500 hover:border-sky-700 hover:rounded-lg hover:border-2 p-2";
  const [waifu, setWaifu] = useState("");

  useEffect(() => {
    fetchWaifuImg();
  }, []);

  const fetchWaifuImg = () => {
    fetch("https://api.waifu.pics/sfw/waifu")
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
        <title>Waifu SFW</title>
        <meta name="waifu sfw" content="show waifu sfw selected" />
        <link rel="icon" href="/chibi_waifu.jpeg" />
      </Head>
      <h1 className=" font-bold text-3xl">SFW</h1>
      <Link href="/">
        <a className={buttonsStyle}>Acceuil</a>
      </Link>
      <div className={styles.row}>
        <button className={buttonsStyle} onClick={handleClickNo}>
          <div className="py-4 flex flex-col justify-center relative font-bold">
            NO
          </div>
        </button>
        <div className={styles.sizedBox}></div>
        {waifu !== "" && (
          <Image
            className="flex p-10 rounded-xl"
            src={waifu}
            alt="random waifu sfw image"
            width={300}
            height={650}
            blurDataURL="/public/placeholder.jpeg"
            placeholder="blur"
          />
        )}
        {waifu === "" && <Loading />}
        <div className={styles.sizedBox}></div>
        <button className={buttonsStyle} onClick={handleClickYes}>
          <div className="py-4 flex flex-col justify-center relative font-bold">
            YES
          </div>
        </button>
      </div>
    </div>
  );
};

export default WaifuSfw;
