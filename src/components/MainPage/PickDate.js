import React from "react";
import indexCalculator from "../misc/indexCalculator";

const PickDate = ({dates, setShowDate}) => {
    let minDate = dates[0]
    let maxDate = dates[1]
    let lenMonth = dates[2]

    const eczaneGosterBugun = () => {
        setShowDate(0)
    }
    const eczaneGosterYarin = () => {
        setShowDate(1)
    }
    const eczaneGosterTarih = () =>{
        let index = indexCalculator("tarih_main", minDate, lenMonth)
        setShowDate(index)
    }

    return (
        <div className="pickDate">
            <h2>Bir gün veya tarih seçin</h2>
            <button onClick={eczaneGosterBugun}>Bugün</button>
            <button onClick={eczaneGosterYarin}>Yarın</button>
            <input id="tarih_main" type="date" min={minDate} max={maxDate}></input>
            <button onClick={eczaneGosterTarih}></button>
        </div>
    )
}

export default PickDate