import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useGetProductsQuery} from "../../features/api/apiSlice";
import Products from "../Product/Products";
import {useSelector} from "react-redux";

import styles from '../../style/Category.module.css';

const Category = () => {
    const {id} = useParams();
    const {list} = useSelector(({categories}) => categories);

    const defaultValues = {
        title: "",
        price_min: 0,
        price_max: 0,
    };

    const defaultParams = {
        categoryId: id,
        limit: 5,
        offset: 0,
        ...defaultValues,
    };

    const [params, setParams] = useState(defaultParams);
    const [isEnd, setIsEnd] = useState(false);
    const [values, setValues] = useState(defaultValues);
    const [items, setItems] = useState([]);
    const [cat, setCat] = useState(null);


    const {data = [], isLoading, isSuccess} = useGetProductsQuery(params);

    useEffect(() => {
        if (isLoading) return;

        if (!data.length) return setIsEnd(true)

        setItems((_items) => [..._items, ...data]);
    }, [data, isLoading]);

    useEffect(() => {
        if (!id || !list.length) return;

        const category = list.find((item) => item.id === id * 1)

        setCat(category);
    }, [list, id]);

    useEffect(() => {
        if (!id) return;

        setValues(defaultValues);
        setItems([]);
        setIsEnd(false);
        setParams({...defaultParams, categoryId: id})

    }, [id]);

    const handleChange = ({target: {value, name}}) => {
        setValues({...value, [name]: value});
    }

    const handleReset = () => {
        setValues(defaultValues);
        setParams(defaultParams);
        setIsEnd(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setItems([]);
        setIsEnd(false);
        setParams({...defaultParams, ...values})
    }

    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>{cat?.name}</h2>
            <form className={styles.filters} onSubmit={handleSubmit}>
                <div className={styles.filter}>
                    <input
                        type='text'
                        name='title'
                        onChange={handleChange}
                        placeholder='Product name'
                        value={values.title}/>
                </div>
                <div className={styles.filter}>
                    <input
                        type='number'
                        name='price_min'
                        onChange={handleChange}
                        placeholder='0'
                        value={values.price_min}/>
                    <span>Price from</span>
                </div>
                <div className={styles.filter}>
                    <input
                        type='number'
                        name='price_max'
                        onChange={handleChange}
                        placeholder='0'
                        value={values.price_max}/>
                    <span>Price from</span>
                </div>

                <button type='submit' hidden/>
            </form>

            {isLoading ? (
                <div className={styles.preloader}>Loading...</div>
            ) : !isSuccess || !items.length ? (
                <div className={styles.back}>
                    <span>No results</span>
                    <button onClick={handleReset}>Reset</button>
                </div>
            ) : (
                <Products
                    title=''
                    products={items}
                    style={{padding: 0}}
                    amount={items.length}/>
            )}

            {!isEnd && (
                <div className={styles.more}>
                    <button onClick={() => setParams({...params, offset: params.offset + params.limit})}>See more
                    </button>
                </div>
            )}
        </section>
    );
};

export default Category;