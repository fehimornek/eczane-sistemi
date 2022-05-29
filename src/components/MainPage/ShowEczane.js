import React from "react";
import "./Main.css"

const ShowEczane = ({newEczane, setNewEczane, eczaneler, showDate}) => {
    const eczaneGoster = () =>{
        document.getElementById("merkez1_main").innerHTML = eczaneler[showDate].Merkez1
        document.getElementById("merkez2_main").innerHTML = eczaneler[showDate].Merkez2
        document.getElementById("meric_main").innerHTML = eczaneler[showDate].Meriç
        document.getElementById("havsa_main").innerHTML = eczaneler[showDate].Havsa
        document.getElementById("enez_main").innerHTML = eczaneler[showDate].Enez
        document.getElementById("kesan_main").innerHTML = eczaneler[showDate].Keşan
        document.getElementById("lalapasa_main").innerHTML =  eczaneler[showDate].Lalapaşa
        document.getElementById("suloglu_main").innerHTML =  eczaneler[showDate].Süloğlu
        document.getElementById("ipsala_main").innerHTML =  eczaneler[showDate].İpsala
        document.getElementById("uzunkopru_main").innerHTML =  eczaneler[showDate].Uzunköprü

    }
    if (newEczane == 1){
        eczaneGoster()
        setNewEczane(0)
    }

    return (
        <div className="grid_container_showEczane">
            <table className="eczane_table">
                <tr>
                    <th>Şehir</th>
                    <th>Eczane</th>
                </tr>
                <tr>
                    <td>Merkez</td>
                    <td id="merkez1_main"></td>
                </tr>
                <tr>
                    <td>Merkez</td>
                    <td id="merkez2_main"></td>
                </tr>
                <tr>
                    <td>Meriç</td>
                    <td id="meric_main"></td>
                </tr>
                <tr>
                    <td>Havsa</td>
                    <td id="havsa_main"></td>
                </tr>
                <tr>
                    <td>Enez</td>
                    <td id="enez_main"></td>
                </tr>
                <tr>
                    <td>Keşan</td>
                    <td id="kesan_main"></td>
                </tr>
                <tr>
                    <td>Lalapaşa</td>
                    <td id="lalapasa_main"></td>
                </tr>
                <tr>
                    <td>Süloğlu</td>
                    <td id="suloglu_main"></td>
                </tr>
                <tr>
                    <td>İpsala</td>
                    <td id="ipsala_main"></td>
                </tr>
                <tr>
                    <td>Uzunköprü</td>
                    <td id="uzunkopru_main"></td>
                </tr>
            </table>
                
        </div>
    )
}

export default ShowEczane