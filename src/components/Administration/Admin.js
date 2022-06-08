import React, {useEffect} from 'react'
import Otomatik from "./Otomatik"
import TekTek from "./TekTek"
import Toplu from "./Toplu"
import Login from "./Login"
import "./Admin.css"
import minMaxDate from '../misc/minMaxDate'

const Admin = ({eczaneler, setEczaneler}) => {
    let dates = minMaxDate()

    return (
        <div className='grid_container_admin'>
            <Login></Login>
            <TekTek eczaneler={eczaneler} setEczaneler={setEczaneler} dates={dates}></TekTek>
            <Toplu eczaneler={eczaneler} setEczaneler={setEczaneler} dates={dates}></Toplu>
            <Otomatik eczaneler={eczaneler} setEczaneler={setEczaneler} dates={dates}></Otomatik>
        </div>
    )
}

export default Admin;