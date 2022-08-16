import {useContext, useState} from "react";
import { CardContext } from "../contexts/CardContext";
import styles from "../../styles/Home.module.css";
import safePath from '../images/safe.png';
import dangerPath from '../images/danger.png';

function Card(){
    const card = useContext(CardContext);
    const imgPath = card?.danger ? dangerPath : safePath; 
    const altImg = card?.danger ? 'Опасен' : 'Не опасен';
    console.log('cardCard',card);
    return(
        <section className={styles.card}>
            <h2 className={styles.cardText}></h2>
            <div className={styles.cardColumns}>
                <img src={imgPath} alt={altImg}></img>
                <div>
                    <h3 className={styles.cardText}>{card?.name}</h3>
                    <p className={styles.cardText}>&#216; {card?.absoluteMag}</p>
                    <p className={styles.cardText}>&#8596; {card?.kilometers}</p>
                    <p className={styles.cardText}>{altImg}</p>
                </div>
            </div>
            <button className={styles.cardButton}>Уничтожить</button>
        </section>
    );
}

export default Card;