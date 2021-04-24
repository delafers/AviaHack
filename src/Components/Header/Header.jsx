import React from "react";
import s from "./Header.module.css"
import logo from '../../assets/img/frela.png'
import ava from '../../assets/img/User_Avatar.png'

const Header = (props) => {
    return (
        <header className={s.header}>
                <img src={logo} />
            <a className={s.ava} href="http://localhost:8000/admin">
                <img src={ava}/>
            </a>
        </header>
    );
}
export default Header