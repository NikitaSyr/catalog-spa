import s from './Header.module.css';
import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {getTotalCount} from "../../redux/itemsReducer";

const Header = () => {
    const totalCount = useSelector(getTotalCount);
    return (
        <header className={s.header}>
            <div className={s.header__row}>
                <div className={s.header__column}>
                    <NavLink className="button" to={`catalog`}>Каталог</NavLink>
                </div>
                <div className={s.header__column}>
                    <NavLink className={`${s.header__button} button`}
                             to={`cart`}>Корзина {(totalCount !== 0 && totalCount) && `(${totalCount})`}</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;