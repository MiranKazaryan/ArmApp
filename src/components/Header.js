import {useState, useEffect} from "react";
import styles from "../../styles/Home.module.css";

function Header() {
  const api_key = 'XAl4XWSGU8lDrnIKbxnc1hwUOsYNRfTJ95yhdr2H';
  const url= 'https://api.nasa.gov/planetary/apod?api_key=';
  const [link, setLink] = useState('');


  useEffect( () => {
    (async () => {
        const link = await fetch(`${url}${api_key}`).then(res => res.json()).then((res)=>{
          console.log(res.url);
          setLink(res.url);
        });
    })()
    }, []
    )

  return (
    <section className={styles.header} id="img" style={{backgroundImage:`url(${link})`}}>
      <div className={styles.headerText}>
        <h1 className={styles.headerTitle}> ARMAGEDONN V2</h1>
        <p className={styles.headerSubtitle}>
          Сервис заказа уничтожения астероидов, опасно подлетающих к Земле.
        </p>
      </div>
      <div className={styles.headerLinks}>
        <a className={styles.headerLink} href="#">
          Астероиды
        </a>
        <a className={styles.headerLink} href="#">
          Заказ
        </a>
      </div>
    </section>
  );
}

export default Header;
