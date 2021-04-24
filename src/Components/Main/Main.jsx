import React from "react";
import s from './Man.module.css'
import {Route, NavLink} from "react-router-dom";
const Main = (props) => {
    return (
        <div className={s.content}>
            Здесь мог располагаться ваш текст
            Здесь мог располагаться ваш текст
            Здесь мог располагаться ваш текст
            Здесь мог располагаться ваш текст
            <div>
                <a href='http://localhost:3000/scanner'>
            <button href='http://localhost:3000/scanner' className={s.but}>
                сканировать QR
            </button>
                </a>
            </div>
        </div>
    )
}

export default Main