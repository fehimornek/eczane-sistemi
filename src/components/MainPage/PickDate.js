import React from "react";

const PickDate = ({dates}) => {
    let minDate = dates[0]
    let maxDate = dates[1]
    return (
        <div className="pickDate">
            <h2>Bir gün veya tarih seçin</h2>
            <button>Bugün</button>
            <button>Yarın</button>
            <input type="date" min={minDate} max={maxDate}></input>
        </div>
    )
}

export default PickDate