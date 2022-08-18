import { useContext, useState } from "react";
import { CardContext } from "../contexts/CardContext";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import safePath from "../../public/safe.png";
import dangerPath from "../../public/danger.png";

function Card({ card, mensuration, onBtnClick, isMain }) {
  const [isClicked, setClicked] = useState(false);
  //функция клика на кнопку Уничтожить
  const handleBtnClick = () => {
    onBtnClick(card);
    setClicked(true);
  };
  //дистанция в км/лунных орбитах
  const distance = mensuration
    ? `${card?.kilometers} км`
    : `${card?.lunarDistance} лунных орбит`;
  //путь к картинке
  const imgPath = card?.danger ? dangerPath : safePath;
  const altImg = card?.danger ? "Опасен" : "Не опасен";
  return (
    <section className={styles.card}>
      <h2 className={styles.cardText}>{card?.date}</h2>
      <div className={styles.cardColumns}>
        <Image
          src={imgPath}
          width={93}
          height={95}
          border-radius={16}
          placeholder={blur}
          alt={altImg}
        ></Image>
        <div className={styles.cardDescription}>
          <h3 className={styles.cardText}>{card?.name}</h3>
          <p className={styles.cardText}>&#216; {card?.absoluteMag}</p>
          <p className={styles.cardText}>&#8596; {distance}</p>
          <p className={styles.cardText}>{altImg}</p>
        </div>
      </div>
      {isMain ? (
        <button className={styles.cardButton} onClick={handleBtnClick}>
          {isClicked ? "В заказе" : "Уничтожить"}
        </button>
      ) : (
        ""
      )}
    </section>
  );
}

export default Card;
