import styles from "../../styles/Home.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        {new Date().getFullYear()} &#169; Все права и планеты защищены
      </p>
    </footer>
  );
}

export default Footer;