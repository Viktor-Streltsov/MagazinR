import React from "react";
import styles from '../../style/Home.module.css';
import bannerImg from '../../images/banner.png';

const Banner = () => (
    <section className={styles.banner}>
        <div className={styles.left}>
            <p className={styles.content}>
                <span>SALE</span>
            </p>
            <button className={styles.more}>See more</button>
        </div>
        <div className={styles.right} style={{background: `url(${bannerImg})`}}>
            <p className={styles.discount}>save up to <span>50%</span> off</p>
        </div>
    </section>
)

export default Banner;