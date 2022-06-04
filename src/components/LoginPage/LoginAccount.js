import React, {useState} from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./Login.css"


const LoginAccount = () => {
    const [users, setUsers] = useState({admin : "amdin", fehim: "1234"})

    return (
        <div className="main_div">
            <SignIn users={users}></SignIn>
            <SignUp setUsers={setUsers}></SignUp>
        </div>
    )
}

export default LoginAccount