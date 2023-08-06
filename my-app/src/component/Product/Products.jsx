import React from "react";
import styles from '../../style/Products.module.css';
import { Link } from "react-router-dom";

const Products = ({ title, style = {}, products = [], amount }) => {

    const list = products.filter((_, i) => i < amount)

    return (
        <section className={styles.products} style={style}>
            {title && <h2>{title}</h2>}
            <div className={styles.list}>
                {list.map(({id, images, title, category: {name: cat}, price}) => (
                    <Link className={styles.product} to={`/products/${id}`} key={id}>
                        <div className={styles.image} style={{background: `url(${images[0]})`}}></div>
                        <div className={styles.wrapper}>
                            <h3 className={styles.title}>{title}</h3>
                            <div className={styles.cat}>{cat}</div>
                            <div className={styles.info}>
                                <div className={styles.prices}>
                                    <div className={styles.price}>{price}$</div>
                                    <div className={styles.oldPrice}>
                                        {Math.floor(price * 0.8)}$
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    {Math.floor(Math.random() * 20 + 1)}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
};

export default Products;