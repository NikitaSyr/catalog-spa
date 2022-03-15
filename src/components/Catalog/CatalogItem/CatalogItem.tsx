import React from 'react';
import Preloader from "../../Common/Preloader/Preloader";
import './../../../App.css';


type PropsType = {
    id: number
    image: string
    name: string
    price: number
}

const DialogItem: React.FC<PropsType> = (props) => {

    return (
        <div>
            <div>Название : "{props.name}"</div>
            <div>Цена : {props.price} руб.</div>
            {props.image
                ? <img src={props.image} alt=""/>
            : <Preloader/>}
            <button className="button">Добавить в корзину</button>
    </div>)
}

export default DialogItem;