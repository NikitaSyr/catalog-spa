import React from 'react';
import t from "./CartItem.module.css";


type PropsType = {
    id: number
    name: string
    price: number
    quantity: number
    addItemQuantityById: (id: number) => void
    subtractItemQuantityById: (id: number) => void
    removeItemQuantityById: (id: number) => void
}


const CartItem: React.FC<PropsType> = ({
                                           id, name, quantity,
                                           price, addItemQuantityById,
                                           subtractItemQuantityById, removeItemQuantityById
                                       }) => {

    return (

        <>
            <tbody className={t.table}>

                <td>"{name}"</td>
                <td>{price} руб.</td>
                <td>{quantity} шт.</td>
                <td>
                    <button className={`${t.table__button} button`}
                            onClick={() => {
                                addItemQuantityById(id)
                            }}
                    >+
                    </button>
                    <button className={`${t.table__button} button`}
                            onClick={() => {
                                subtractItemQuantityById(id)
                            }}
                    >-
                    </button>
                    <button className={`${t.table__button} button`}
                            onClick={() => {
                                removeItemQuantityById(id)
                            }}
                    >Удалить
                    </button>
                </td>
            </tbody>
        </>
    )
}

export default CartItem;