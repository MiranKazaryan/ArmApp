import {useState, useEffect} from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

function Header({link}) {
  const [isActive, setActive] = useState(true);
  const [isActiveOrd, setActiveOrd] = useState(false);
//Проработать переключение кнопок при переключении
  function toggleAst(){
    if(isActive){""} else{setActive(true);setActiveOrd(false)};
    console.log("isActive",isActive);
    console.log("isActiveOrd",isActiveOrd);
  }
  function toggleOrd(){
    if(isActiveOrd){""}else{setActiveOrd(true);setActive(false);}
    console.log("isActive2",isActive);
    console.log("isActiveOrd2",isActiveOrd);
  }
  return (
    <section className={styles.header} id="img" style={{backgroundImage:`url(${link})`}}>
      <div className={styles.headerText}>
        <h1 className={styles.headerTitle}> ARMAGEDONN V2</h1>
        <p className={styles.headerSubtitle}>
          Сервис заказа уничтожения астероидов, опасно подлетающих к Земле.
        </p>
      </div>
      <div className={styles.headerLinks}>
        <Link href="/"><a className={isActive ? styles.headerLinkClicked : styles.headerLink}   onClick={toggleAst}>
          Астероиды
        </a></Link>
        <Link href="orders"><a className={isActiveOrd ? styles.headerLinkClicked : styles.headerLink}  onClick={toggleOrd}>
          Заказ
        </a></Link>
      </div>
    </section>
  );
}

export default Header;
