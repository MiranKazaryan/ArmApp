import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import brucePath from "../../public/orig.png";

export default function Home() {
  const api_key = "iNLNf43TJVIWwa5g2dhEmMAPOe7Pl5I6blVRKCVN";
  const urlHed = "https://api.nasa.gov/planetary/apod?api_key=";
  const [linkHead, setLinkHead] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>Order Bruce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={brucePath}
        width={842}
        height={936}
        alt={"Бригада спасения"}
      ></Image>
      <Link href="/">
        <button className={styles.btnSave}>К поискам новых опасностей</button>
      </Link>
      <Footer />
    </div>
  );
}
