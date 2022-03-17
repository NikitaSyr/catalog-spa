import React from 'react';
import Preloader from "../../Common/Preloader/Preloader";
import './../../../App.css';


type PropsType = {
    id: number
    image: string
    name: string
    price: number
    addItemQuantityById: (id: number) => void
    subtractItemQuantityById: (id: number) => void
    removeItemQuantityById: (id: number) => void
}


const CartItem: React.FC<PropsType> = ({id, image, name,
                                           price,addItemQuantityById,
                                           subtractItemQuantityById, removeItemQuantityById}) => {

    return (
        <div>
            <div>Название : "{name}"</div>
            <div>Цена : {price} руб.</div>
            {image
                ? <img src={image} alt=""/>
                : <Preloader/>}
            <button className="button"
                    onClick={() => {
                        addItemQuantityById(id)
                    }}
            >+
            </button>
            <button className="button"
                    onClick={() => {
                        subtractItemQuantityById(id)
                    }}
            >-
            </button>
            <button className="button"
                    onClick={() => {
                        removeItemQuantityById(id)
                    }}
            >Удалить
            </button>
        </div>
    )
}

export default CartItem;