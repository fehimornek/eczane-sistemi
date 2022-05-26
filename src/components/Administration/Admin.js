import React from 'react'
import Otomatik from "./Otomatik"
import TekTek from "./TekTek"
import Toplu from "./Toplu"
import Login from "./Login"
import "./Admin.css"

const Admin = () => {
    return (
        <div className='grid_container'>
            <Login></Login>
            <TekTek></TekTek>
            <Toplu></Toplu>
            <Otomatik></Otomatik>
        </div>
    )
}

export default Admin;