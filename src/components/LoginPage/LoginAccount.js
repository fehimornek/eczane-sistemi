import React, {useEffect} from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./Login.css"
import {Link} from "react-router-dom"
import "../../App.css"

const LoginAccount = (props) => {
    return (
        <div className="main_div">
            <Link to="/" className="pick_button link_login" style={{fontSize: "1.5rem"}}>main page</Link>
            <SignIn users={props.users}></SignIn>
            <SignUp users={props.users} setUsers={props.setUsers}></SignUp>
        </div>
    )
}

export default LoginAccount