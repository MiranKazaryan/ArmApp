import {useState, useEffect} from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

function Header() {
  const api_key = 'XAl4XWSGU8lDrnIKbxnc1hwUOsYNRfTJ95yhdr2H';
  const url= 'https://api.nasa.gov/planetary/apod?api_key=';
  const [link, setLink] = useState('');


  useEffect( () => {
    (async () => {
        const link = await fetch(`${url}${api_key}`).then(res => res.json()).then((res)=>{
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
        <Link href="/"><a className={styles.headerLink}>
          Астероиды
        </a></Link>
        <Link href="orders"><a className={styles.headerLink}>
          Заказ
        </a></Link>
      </div>
    </section>
  );
}

export default Header;
