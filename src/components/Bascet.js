import { useState, useEffect, useContext } from "react";
import styles from "../../styles/Home.module.css";
import AstContext from "../../stores/AstContext";
import Card from "../components/Card";
import Link from "next/link";

function Bascet() {
  const { arr, setArr } = useContext(AstContext);


  return (
    <>
      <h2 className={styles.mainTitle}>К уничтожению</h2>
      <section className={styles.photoGrid}>
        <ul className={styles.cards}>
          {arr.map((c, key) => {
            return <Card card={c} key={c.id} isMain={false} />;
          })}
        </ul>
      </section>
      <Link href="/bruce"><button className={styles.btnSave}>Позвать астронавтов-героев</button></Link>
      
    </>
  );
}

export default Bascet;
