import React from "react";
import "./Main.css"

const ShowEczane = ({newEczane, setNewEczane, eczaneler, showDate}) => {
    const eczaneGoster = () =>{
        document.getElementById("merkez1_main").innerHTML = "Merkez " + eczaneler[showDate].Merkez1
        document.getElementById("merkez2_main").innerHTML = "Merkez " + eczaneler[showDate].Merkez2
        document.getElementById("meric_main").innerHTML = "Meriç " + eczaneler[showDate].Meriç
        document.getElementById("havsa_main").innerHTML = "Havsa " + eczaneler[showDate].Havsa
        document.getElementById("enez_main").innerHTML = "Enez " + eczaneler[showDate].Enez
        document.getElementById("kesan_main").innerHTML = "Keşan " + eczaneler[showDate].Keşan
        document.getElementById("lalapasa_main").innerHTML = "Lalapaşa "+ eczaneler[showDate].Lalapaşa
        document.getElementById("suloglu_main").innerHTML = "Süloğlu " + eczaneler[showDate].Süloğlu
        document.getElementById("uzunkopru_main").innerHTML = "Uzunköprü " + eczaneler[showDate].Uzunköprü

    }
    if (newEczane == 1){
        eczaneGoster()
        setNewEczane(0)
    }

    return (
        <div className="grid_container_showEczane">
                <div id="merkez1_main"></div>
                <div id="merkez2_main"></div>
                <div id="meric_main"></div>
                <div id="havsa_main"></div>
                <div id="enez_main"></div>
                <div id="kesan_main"></div>
                <div id="lalapasa_main"></div>
                <div id="suloglu_main"></div>
                <div id="ipsala_main"></div>
                <div id="uzunkopru_main"></div>
        </div>
    )
}

export default ShowEczane