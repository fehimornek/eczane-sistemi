import React, {useEffect} from "react";
import indexCalculator from "../misc/indexCalculator";


const Toplu = ({eczaneler, setEczaneler, dates}) => {

    const eczaneAtaToplu = (e) =>{
      e.preventDefault()
      let index = indexCalculator("tarih_sec_toplu", minDate, lenMonth)
      let updated_eczaneler = eczaneler
      updated_eczaneler[index]["Merkez1"] = document.getElementById("Merkez1_inp").value
      updated_eczaneler[index]["Merkez2"] = document.getElementById("Merkez2_inp").value
      updated_eczaneler[index]["Meriç"] = document.getElementById("Meric_inp").value
      updated_eczaneler[index]["Havsa"] = document.getElementById("Havsa_inp").value
      updated_eczaneler[index]["Enez"] = document.getElementById("Enez_inp").value
      updated_eczaneler[index]["Keşan"]= document.getElementById("Kesan_inp").value
      updated_eczaneler[index]["Lalapaşa"] = document.getElementById("Lalapasa_inp").value
      updated_eczaneler[index]["Süloğlu"] = document.getElementById("Suloglu_inp").value
      updated_eczaneler[index]["İpsala"] = document.getElementById("Ipsala_inp").value
      updated_eczaneler[index]["Uzunköprü"] = document.getElementById("Uzunkopru_inp").value
      setEczaneler(updated_eczaneler)
      console.log(eczaneler)
    }

    const minDate = dates[0]
    const maxDate = dates[1]
    const lenMonth = dates[2]

    return(
        <div className='atama_toplu'>
          <h2>Toplu Ata</h2>
          <form>
            <input id="tarih_sec_toplu" type="date" className="tarih_admin" min={minDate} max={maxDate}></input>
            <table className="table_admin" align="center">
              <tr>
                <th>Merkez1</th>
                <th>Merkez2</th>
                <th>Meriç</th>
                <th>Havsa</th>
                <th>Enez</th>
                <th>Keşan</th>
                <th>Lalapaşa</th>
                <th>Süloğlu</th>
                <th>İpsala</th>
                <th>Uzunköprü</th>
              </tr>    
              <tr>
                <th><input id="Merkez1_inp" type="text" className="input_text"></input></th>
                <th><input id="Merkez2_inp" type="text" className="input_text"></input></th>
                <th><input id="Meric_inp" type="text" className="input_text"></input></th>
                <th><input id="Havsa_inp" type="text" className="input_text"></input></th>
                <th><input id="Enez_inp" type="text" className="input_text"></input></th>
                <th><input id="Kesan_inp" type="text" className="input_text"></input></th>
                <th><input id="Lalapasa_inp" type="text" className="input_text"></input></th>
                <th><input id="Suloglu_inp" type="text" className="input_text"></input></th>
                <th><input id="Ipsala_inp" type="text" className="input_text"></input></th>
                <th><input id="Uzunkopru_inp" type="text" className="input_text"></input></th>
              </tr>  
          </table>
          <button onClick={eczaneAtaToplu} className="pick_button" style={{padding: "0.4rem 1.5rem"}}>eczane ata</button>
          </form>
          <hr></hr>
          
        </div>
    )
}

export default Toplu;