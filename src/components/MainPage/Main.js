import React from "react";
import LoginNheader from "./LoginNheader";
import PickDate from "./PickDate";
import ShowEczane from "./ShowEczane";
import "./Main.css"
import minMaxDate from "../misc/minMaxDate";

const Main = () => {
    let dates = minMaxDate()
    return (
        <div className="grid_container_main">
            <LoginNheader></LoginNheader>
            <PickDate dates={dates}></PickDate>
            <ShowEczane></ShowEczane>
        </div>
    )
}

export default Main