import {FC} from "react";
import {ItemsType} from "../../types/types";
import CatalogItem from "./CatalogItem/CatalogItem";

type PropsType = {
    itemsList: Array<ItemsType>
}

const Catalog: FC<PropsType> = (props) => {
    console.log(props.itemsList);
    let catalogElement = props.itemsList.map(c =>
        <CatalogItem key={c.id} id={c.id} image={c.image} name={c.name} price={c.price}/>)
    return (
        <div>
            {catalogElement}
        </div>
    )
}

export default Catalog;