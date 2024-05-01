import React, {useEffect, useState} from "react";
import styles from '../../style/Product.module.css';
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import {useDispatch} from "react-redux";
import {addItemToCart} from "../../features/user/userSlice";

const SIZE = [23, 4.6, 12];

export const Product = (item) => {

    const {title, images, price, description } = item;

    const dispatch = useDispatch();

    const [currentImage, setCurrentImage] = useState();
    const [currentSize, setCurrentSize] = useState();

    useEffect(() => {
        if(!images.length) return;

        setCurrentImage(images[0]);
    }, [images])

    const addToCart = () => {
        dispatch(addItemToCart(item));
    }

    return (
        <section className={styles.product}>
            <div className={styles.images}>
                <div className={styles.current} style={{backgroundImage: `url(${currentImage})`}}/>
                <div className={styles.imagesList}>
                    {images.map((image, i) => (
                        <div
                            key={i}
                            className={styles.image}
                            style={{backgroundImage: `url(${image})`}}
                            onClick={() => {setCurrentImage(image)}}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.info}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.price}>{price}$</div>
                <div className={styles.color}>
                    <span>Color:</span> Green
                </div>
                <div className={styles.sizes}>
                    <span>Sizes:</span>

                    <div className={styles.list}>
                        {SIZE.map(size => (
                            <div onClick={() => {setCurrentSize(size)}} key={size} className={`${styles.size} ${currentSize === size ? styles.active : ''}`}>
                                {size}
                            </div>
                        ))}
                    </div>
                </div>

                <p className={styles.description}>{description}</p>

                <div className={styles.actions}>
                    <button onClick={addToCart} className={styles.add} disabled={!currentSize} >Add to card</button>
                    <button className={styles.favourite}>Add to favorites</button>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.purchase}>19 people purchased</div>
                </div>

                <Link to={ROUTES.HOME}>Return to store</Link>

            </div>
        </section>
    )
}