import s from './Cart.module.css';
import React from "react";
import {useSelector} from "react-redux";
import {getTotalPrice} from "../../redux/itemsReducer";

const Cart = () => {
    const totalPrice = useSelector(getTotalPrice)
    return (
        <div className={s.cart}>
            {totalPrice}
        </div>
    )
}
export default Cart;