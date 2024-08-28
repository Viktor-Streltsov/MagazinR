import React from "react";
import styles from '../../style/Home.module.css';
import BD from '../../images/computer.png';

function Poster(props) {
    return (
        <section className={styles.home}>
            <div className={styles.title}>BIG SALE 20%</div>
            <div className={styles.product}>
                <div className={styles.text}>
                    <div>
                        <div className={styles.subtitle}>the bestseller of 2022</div>
                        <h1 className={styles.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
                        <button className={styles.button}>Shop now</button>
                    </div>
                    <div className={styles.image}>
                        <img src={BD} alt="img" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Poster