import s from './Header.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={`${s.app__header} ${s.header}`}>
            <div className="container">
                <div className={s.header__row}>
                    <div className={s.header__column}>
                        <div className={s.header__logo}>
                            <img src="https://i.imgur.com/X96bCMU.png" alt=""/>
                        </div>
                    </div>
                    <div className={s.header__column}>
                        <div className={s.login__info}>
                            {props.isAuth
                                ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                                : <NavLink to={`/login`}>Login</NavLink>}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;