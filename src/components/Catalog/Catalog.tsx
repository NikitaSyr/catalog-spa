import {FC} from "react";
import {ItemsType} from "../../types/types";
import CatalogItem from "./CatalogItem/CatalogItem";
import s from './Catalog.module.css';
import {useDispatch} from "react-redux";
import {actions} from "../../redux/itemsReducer";

type PropsType = {
    itemsList: Array<ItemsType>
}

const Catalog: FC<PropsType> = (props) => {
    const dispatch = useDispatch();
    const addItemToCartById = (id: number) => {
        dispatch(actions.addToCartAC(id))
    }

    const catalogElement = props.itemsList.map(item =>
        <CatalogItem key={item.id} id={item.id} image={item.image} name={item.name} price={item.price}
                     addItemToCartById={addItemToCartById}
        />)
    return (
        <div className={s.catalog}>
            {catalogElement}
        </div>
    )
}

export default Catalog;