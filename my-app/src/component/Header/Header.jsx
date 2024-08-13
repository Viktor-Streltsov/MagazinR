import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import LOGO from "../../images/logo.svg";
import AVATAR from "../../images/avatar.jpg";
import {useDispatch, useSelector} from "react-redux";
import {toggleForm} from "../../features/user/userSlice";
import styles from '../../style/Header.module.css';
import {useGetProductsQuery} from "../../features/api/apiSlice";


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const { currentUser } = useSelector(({user}) => user);

    const [values, setValues] = useState({
        name: 'My name',
        avatar: AVATAR,
    });

    const {data, isLoading} = useGetProductsQuery({title: searchValue});

    console.log(data)

    useEffect(() => {
        if(!currentUser) return;

        setValues(currentUser);
    }, [currentUser]);

    const handleClick = () => {
        if(!currentUser) dispatch(toggleForm(true));
        else navigate(ROUTES.PROFILE);
    }

    const handleSearch = ({target: {value}}) => {
        setSearchValue(value);
    }

    return(
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="stuuf" />
                </Link>
            </div>

            <div className={styles.info}>
                <div className={styles.user} onClick={handleClick}>
                    <div className={styles.avatar} style={{backgroundImage: `url(${values.avatar})`}}/>
                    <div className={styles.username}>{values.name}</div>
                </div>


                <form className={styles.form}>
                    <div className={styles.icon}>
                        <svg className="icon">
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}/>
                        </svg>
                    </div>

                    {/*! Важно для работы*/}

                    <div className={styles.input}>
                        <input 
                            type="search"
                            name="seatch"
                            placeholder="Search for anyting..."
                            autoComplete="off"
                            onChange={handleSearch}
                            value={searchValue}
                            />
                    </div>
                    {searchValue && <div className={styles.box}>
                        {isLoading ? 'Loading' : !data.length ? 'No results' : (
                            data.map(({title, images, id}) => {
                                return (
                                    <Link key={id} onClick={() => setSearchValue('')} className={styles.item} to={`/products/${id}`}>
                                        <div className={styles.image}
                                             style={{backgroundImage: `url(${images[0]})`}}/>
                                        <div className={styles.title}>
                                            {title}
                                        </div>
                                    </Link>
                                )
                            })
                        )}
                    </div>}
                </form>

                <div className={styles.account}>
                    <Link to={ROUTES.HOME} className={styles.favourites}>
                        <svg className={styles["icon-fav"]}>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}/>
                        </svg>
                    </Link>
                    <Link to={ROUTES.CARD} className={styles.cart}>
                        <svg className={styles["icon-cart"]}>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`}/>
                        </svg>
                        <span className={styles.count}>2</span>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Header