import preloader from "../../../assets/preloader.png";
import React from "react";
import s from "./Preloader.module.css"

let Preloader = () => {
    return (
        <div className={s.preloader}>
            {preloader
                ? <img src={preloader} alt="" />
                : <div>Loading...</div>
            }
        </div>

    )
}

export default Preloader;