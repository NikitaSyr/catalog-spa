import React, {useEffect, useState} from 'react';
import './App.css';
import {HashRouter, Routes, Route} from "react-router-dom";
import Catalog from "./components/Catalog/Catalog";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import {useDispatch, useSelector} from "react-redux";
import {getItemsList, requestItems} from "./redux/itemsReducer";
import Preloader from "./components/Common/Preloader/Preloader";

//localStorage.clear();

function App() {
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
    if (loading) {
        return (
            <div className="app">
                <div className="app__wrapper">
                    <Preloader/>
                </div>
            </div>)
    }
    return (
        <HashRouter>
            <div className="app">
                <div className="app__wrapper">
                    <div className="content">
                        <Header/>
                        <div className="content__load">
                            <Routes>
                                <Route path="/catalog" element={<Catalog itemsList={itemsList}/>}/>
                                <Route path="/cart" element={<Cart/>}/>
                                <Route path="/" element={<div>Welcome to AppEvent shopping catalog</div>}/>
                                <Route path="*" element={<div>404 PAGE NOT FOUND</div>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
