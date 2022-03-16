import {FC} from "react";
import {ItemsType} from "../../types/types";
import CatalogItem from "./CatalogItem/CatalogItem";
import s from './Catalog.module.css';

type PropsType = {
    itemsList: Array<ItemsType>
}

const Catalog: FC<PropsType> = (props) => {
    console.log(props.itemsList);
    let catalogElement = props.itemsList.map(c =>
        <CatalogItem key={c.id} id={c.id} image={c.image} name={c.name} price={c.price}/>)
    return (
        <div className={s.catalog}>
            {catalogElement}
        </div>
    )
}

export default Catalog;