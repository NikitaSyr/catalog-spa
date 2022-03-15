import {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getItemsList, requestItems} from "../../redux/itemsReducer";
import Preloader from "../Common/Preloader/Preloader";

type PropsType = {}

const Catalog: FC<PropsType> = () => {
    const [loading, setLoading] = useState(false);
    const itemsList = useSelector(getItemsList);
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            setLoading(true);
            await dispatch(requestItems());
            setLoading(false);
        })()

        }, [dispatch])
    console.log(itemsList);
    return (
        <div>
            {loading
                ? <Preloader/>
            : <div>Загрузилось</div>}
        </div>
    )
}

export default Catalog;