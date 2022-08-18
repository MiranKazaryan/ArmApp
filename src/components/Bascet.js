import { useState, useEffect, useContext } from "react";
import styles from "../../styles/Home.module.css";
import AstContext from "../../stores/AstContext";
import Card from "../components/Card"

function Bascet() {
  const { arr, setArr } = useContext(AstContext);
  console.log(arr);

  return (
    <>
      <section className={styles.photoGrid}>
        <ul className={styles.cards}>
          {arr.map((c, key) => {
            return (
              <Card
                card={c}
                key={c.id}
                isMain={false}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default Bascet;
