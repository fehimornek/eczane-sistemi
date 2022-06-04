import React, {useState} from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./Login.css"
import {Link} from "react-router-dom"
import "../../App.css"

const LoginAccount = ({users, setUsers}) => {

    return (
        <div className="main_div">
            <Link to="/" className="pick_button link_login">main page</Link>
            <SignIn users={users}></SignIn>
            <SignUp users={users} setUsers={setUsers}></SignUp>
        </div>
    )
}

export default LoginAccount