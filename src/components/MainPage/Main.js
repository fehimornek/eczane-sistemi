import LoginNheader from "./LoginNheader";
import PickDate from "./PickDate";
import ShowEczane from "./ShowEczane";
import "./Main.css"
import minMaxDate from "../misc/minMaxDate";
import React, {useState} from "react";

const Main = ({eczaneler}) => {
    let dates = minMaxDate()
    const [showDate, setShowDate] = useState(0)
    const [newEczane, setNewEczane] = useState(0)

    return (
        <div className="grid_container_main">
            <LoginNheader eczaneler={eczaneler}></LoginNheader>
            <h2 className="text_eczane">Gün veya tarih seçin</h2>
            <PickDate setNewEczane={setNewEczane} dates={dates} showDate={showDate} setShowDate={setShowDate}></PickDate>
            <h2 className="text_show">Eczaneler</h2>
            <ShowEczane newEczane={newEczane} setNewEczane={setNewEczane} eczaneler={eczaneler} showDate={showDate}></ShowEczane>
            <div className="extraInformation">
                <h4 id="telInfo">505 592 9344</h4>
                <h4 id="addressInfo">Edirne</h4>
            </div>
        </div>
    )
}

export default Main