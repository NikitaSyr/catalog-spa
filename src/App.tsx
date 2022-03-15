import React from 'react';
import './App.css';
import {HashRouter, Routes, Route} from "react-router-dom";
import Catalog from "./components/Catalog/Catalog";
import Header from "./components/Header/Header";

function App() {
  return (
      <HashRouter>
        <div className="app">
          <div className="app__wrapper">
            <div className="content">
              <Header/>
              <div className="content__load">

                <Routes>
                  <Route path="" element={<Catalog/>}/>
                  {/*<Route path="" element={}/>*/}
                  {/*<Route path="" element={}/>*/}
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </HashRouter>
  );
}

export default App;
