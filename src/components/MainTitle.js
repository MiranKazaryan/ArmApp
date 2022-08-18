import Card from "./Card";
import { useEffect, useState } from "react";
import { CardContext } from "../contexts/CardContext";
import styles from "../../styles/Home.module.css";

function MainTitle({ cards, onBtnClick}) {
  const [checked, setChecked] = useState(false);
  const [card, setCard] = useState({});

  const [isActive, setActive] = useState(true);
  const [isActiveLunar, setActiveLunar] = useState(false);

  //функция отслеживающая выбор опасных астероидов
  function changeCheckbox() {
    setChecked(!checked);
  }

  function toggleKm(){
    if(isActive){""} else{setActive(true);setActiveLunar(false)};
    console.log("isActive",isActive);
    console.log("isActiveLunar",isActiveLunar);
  }
  function toggleLunar(){
    if(isActiveLunar){""}else{setActiveLunar(true);setActive(false);}
    console.log("isActive",isActive);
    console.log("isActiveLunar",isActiveLunar);
  }

  return (
    <>
      <section className={styles.main}>
        <h2 className={styles.mainTitle}>Ближайшие подлёты</h2>
        <div className={styles.mainBottom}>
          <div className={styles.mainBottom}>
            <p className={styles.mainText}>Отображать расстояние: &nbsp;</p>
            <div className={styles.btns}>
              <button
                className={isActive ? styles.mainBtnClicked : styles.mainBtn}
                onClick={toggleKm}
              >
                в километрах | &nbsp;
              </button>

              <button
                className={
                  isActiveLunar ? styles.mainBtnClicked : styles.mainBtn
                }
                onClick={toggleLunar}
              >
                в лунных орбитах
              </button>
            </div>
          </div>
          <div className={styles.mainCheck}>
            <input
              type="checkbox"
              checked={checked}
              onChange={changeCheckbox}
            ></input>
            <p className={styles.mainText}>Показать только опасные</p>
          </div>
        </div>
      </section>
      <section className={styles.photoGrid}>
        <ul className={styles.cards}>
          {checked
            ? cards.map((c, key) => {
                return c.danger ? (
                  <Card card={c} key={c.id} mensuration={isActive} onBtnClick={onBtnClick} isMain={true}/>
                ) : (
                  ""
                );
              })
            : cards.map((c, key) => (
                <Card card={c} key={c.id} mensuration={isActive} onBtnClick={onBtnClick} isMain={true}/>
              ))}
        </ul>
      </section>
    </>
  );
}

export default MainTitle;