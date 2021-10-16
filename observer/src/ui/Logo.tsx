import React from "react";
import {useHistory} from "react-router-dom";
import '../css/Logo.css'
import logo from "../img/logo.svg"

export default function Logo() {
    const history = useHistory();

    return (
        <div className="clickable" onClick={() => {
            // set query string
            let params = new URLSearchParams();
            history.push({search: params.toString()});
            window.location.reload();
        }}>
        <img className="logo" src={logo} alt="logo"/>
        <p className="logo-text">bserver</p>
        </div>
    );
}
