import React from "react";
import {Link} from "react-router-dom"

const Login = () => {
    return (
        <div className="log">
            <h2>Login</h2>
            <Link to="/" className="pick_button link">main page</Link>
        </div>
    )
}

export default Login;