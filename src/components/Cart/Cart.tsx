import s from './Cart.module.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {actions, getAddedItems, getTotalCount, getTotalPrice} from "../../redux/itemsReducer";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
    const totalPrice = useSelector(getTotalPrice);
    const totalCount = useSelector(getTotalCount);
    const addedItems = useSelector(getAddedItems);
    const dispatch = useDispatch();
    const addItemQuantityById = (id: number) => {
        dispatch(actions.addQuantityAC(id))
    }
    const subtractItemQuantityById = (id: number) => {
        dispatch(actions.subtractQuantityAC(id))
    }
    const removeItemQuantityById = (id: number) => {
        dispatch(actions.removeItemAC(id))
    }

    const cartElement = addedItems.map(item =>
        <CartItem key={item.id} id={item.id} image={item.image} name={item.name} price={item.price}
                  addItemQuantityById={addItemQuantityById}
                  subtractItemQuantityById={subtractItemQuantityById}
                  removeItemQuantityById={removeItemQuantityById}
        />)
    return (
        <div className={s.cart}>
            {cartElement}
            <div>Количество предметов в корзине: {totalCount}</div>
            <div>Итого: {totalPrice}</div>
        </div>
    )
}
export default Cart;