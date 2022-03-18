import s from './Cart.module.css';
import t from "./CartItem/CartItem.module.css";
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
        <CartItem key={item.id} id={item.id} name={item.name} price={item.price} quantity={item.quantity}
                  addItemQuantityById={addItemQuantityById}
                  subtractItemQuantityById={subtractItemQuantityById}
                  removeItemQuantityById={removeItemQuantityById}
        />)
    return (
        <div className={s.cart}>
            {totalCount > 0 ? <>
                <table className={s.cart__table}>
                    <tr className={t.table}>
                        <th>Название</th>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th>Изменить количество</th>
                    </tr>
                {cartElement}
                </table>
                <div>Количество предметов в корзине: {totalCount} шт.</div>
                <div>Итого: {totalPrice} руб.</div>
                <button className="button">Оформить заказ</button></>
            : <div>Корзина пуста</div>
            }
        </div>
    )
}
export default Cart;