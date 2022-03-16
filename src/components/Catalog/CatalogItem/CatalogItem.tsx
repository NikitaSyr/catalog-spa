import React from 'react';
import Preloader from "../../Common/Preloader/Preloader";
import './../../../App.css';


type PropsType = {
    id: number
    image: string
    name: string
    price: number
    addItemToCartById: (id: number) => void
}


const CatalogItem: React.FC<PropsType> = ({id, image, name, price, addItemToCartById}) => {
    // const handleClick = useSelector(addToCart(id));
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(addToCart(id));
    // }, [dispatch])
    return (
        <div>
            <div>Название : "{name}"</div>
            <div>Цена : {price} руб.</div>
            {image
                ? <img src={image} alt=""/>
                : <Preloader/>}
            <button className="button"
                    onClick={() => {
                        addItemToCartById(id)
                    }}
            >Добавить в корзину
            </button>
        </div>
    )
}

export default CatalogItem;