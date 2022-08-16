import Card from "./Card";
import { CardContext } from "../contexts/CardContext";
import styles from "../../styles/Home.module.css";

function MainTitle({ cards }) {
  console.log("cardsMain", cards);

  return (
    <>
      <section className={styles.main}>
        <h2 className={styles.mainTitle}>Ближайшие подлёты</h2>
        <div className={styles.mainBottom}>
          <div className={styles.mainBottom}>
            <p className={styles.mainText}>Отображать расстояние: &nbsp;</p>
            <a className={styles.mainText} href="#">в километрах | &nbsp;</a>
            <a className={styles.mainText} href="#">в лунных орбитах</a>
          </div>
          <div className={styles.mainBottom}>
            <input type="checkbox"></input>
            <p className={styles.mainText}>Показать только опасные</p>
          </div>
        </div>
      </section>
      <section className={styles.photoGrid}>
        <ul className={styles.cards}>
          {cards.map((card) => (
            <CardContext.Provider value={card} key={card.id}>
              <Card />
            </CardContext.Provider>
          ))}
        </ul>
      </section>
    </>
  );
}

export default MainTitle;
