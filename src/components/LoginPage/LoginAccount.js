import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./Login.css"
const LoginAccount = () => {

    return (
        <div className="main_div">
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    )
}

export default LoginAccount