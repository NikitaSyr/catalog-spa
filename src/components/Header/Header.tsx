import s from './Header.module.css';
import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {getTotalCount} from "../../redux/itemsReducer";

const Header = () => {
    const totalCount = useSelector(getTotalCount);
    return (
        <header className={`${s.app__header} ${s.header}`}>
            <div className="container">
                <div className={s.header__row}>
                    <div className={s.header__column}>
                        <div className={s.login__info}>
                            <NavLink to={`catalog`}>Каталог</NavLink>
                        </div>
                    </div>
                    <div className={s.header__column}>
                        <div className={s.login__info}>
                            <NavLink to={`cart`}>Корзина {totalCount !== 0 && `(${totalCount})`}</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;