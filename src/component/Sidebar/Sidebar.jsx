import React from "react";
import styles from '../../style/Sidebar.module.css';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTES } from "../../utils/routes";

const Sidebar = () => {

    const { list } = useSelector(({categories}) => categories);


    return(
        <section className={styles.sidebar}>
            <div className={styles.title}>CATEGORIES</div>
            <nav className={styles.navMenu}>
                <ul className={styles.menu}>
                    {list.map(({id, name}) => (
                        <li key={id}>
                            <NavLink className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`} to={`/categories/${id}`}>
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={styles.footer}>
                <NavLink
                    to={ROUTES.HELP}
                    className={({ isActive }) =>
                        `${styles.link} ${isActive ? styles.active : ""}`
                    }
                >
                    Help
                </NavLink>
                <NavLink
                    to={ROUTES.TERMS}
                    className={({ isActive }) =>
                        `${styles.link} ${styles.linkUnderline} ${isActive ? styles.active : ""}`
                    }
                >
                    Terms & Condition
                </NavLink>
            </div>
        </section>
    )
}

export default Sidebar
