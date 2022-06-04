import React from "react";
import {Link} from "react-router-dom";
import "../../App.css"

const LoginNheader = () => {

    return (
        <div className="login">
            <h1 className="loginTitle">Seri Eczane Bul</h1>
            <Link to="/login" className="pick_button link">login</Link>
        </div>
    )
}

export default LoginNheader