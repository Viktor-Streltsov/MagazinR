import React from "react";
import styles from '../../style/Sidebar.module.css';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return(
        <section className={styles.sidebar}>
            <div className={styles.title}>CATEGORIES</div>
            <nav>
                <ul className={styles.menu}>
                    <li>
                        <NavLink to={`/cotegories/:${1}`}>
                            Link
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={styles.footer}>
                <a href={'/help'} target="_black" className={styles.link}>Help</a>
                <a href={'/terms'} target="_black" className={styles.link} style={{textDecoration: 'underline'}}>Terms & Condition</a>
            </div>
        </section>
    )
}

export default Sidebar