import React from 'react';
import Preloader from "../../Common/Preloader/Preloader";
import s from './CatalogItem.module.css';


type PropsType = {
    id: number
    image: string
    name: string
    price: number
    addItemToCartById: (id: number) => void
}

const CatalogItem: React.FC<PropsType> = ({id, image, name, price, addItemToCartById}) => {
    return (
        <div className={s.catalog__item}>
            <div className={s.item__image}>
                {image
                    ? <img src={image} alt="" className={s.image__content}/>
                    : <Preloader/>}
            </div>
            <div className={s.info}>
                <div className={s.info__name}>"{name}"</div>
                <div className={s.info__price}>Цена : {price} руб.</div>
            </div>
            <button className={`${s.item__button} button`}
                    onClick={() => {
                        addItemToCartById(id)
                    }}
            >Добавить в корзину
            </button>
        </div>
    )
}

export default React.memo(CatalogItem);