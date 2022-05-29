import React, {useState} from "react";
import indexCalculator from "../misc/indexCalculator";
import "./Main.css"
const PickDate = ({dates, setNewEczane, showDate, setShowDate}) => {
    let minDate = dates[0]
    let maxDate = dates[1]
    let lenMonth = dates[2]

    let calendarBool = 0

    const eczaneGosterBugun = () => {
        setShowDate(0)
        setNewEczane(1)
    }
    const eczaneGosterYarin = () => {
        setShowDate(1)
        setNewEczane(1)
    }
    const eczaneGosterTarih = () =>{
        let index = indexCalculator("tarih_main", minDate, lenMonth)
        setShowDate(index)
        setNewEczane(1)
    }

    return (
        <div className="grid_container_pickDate">  
                <button onClick={eczaneGosterBugun} className="pick_button">Bugünkü eczane</button>
                <button onClick={eczaneGosterYarin} className="pick_button">Yarınkı eczane</button>
                <input onChange={eczaneGosterTarih} defaultValue={minDate} id="tarih_main" type="date" min={minDate} max={maxDate} className="calendar_main"></input>            
        </div>
    )
}

export default PickDate