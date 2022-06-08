import React from "react";
import {Link} from "react-router-dom"

const Login = () => {
    return (
        <div className="log">
            <div className="splitScreen">
                <div className="left">
                    <Link to="/" className="pick_button link" style={{width:"10rem", marginTop:"4rem"}}>main page</Link>
                </div>
                <div className="right">
                    <h1>Admin Sayfası</h1>
                </div>
            </div>
        </div>
    )
}

export default Login;