import React, {useEffect} from "react";
import indexCalculator from "../misc/indexCalculator";


const Toplu = ({eczaneler, setEczaneler, dates}) => {

    const eczaneAtaToplu = (e) =>{
      e.preventDefault()
      let index = indexCalculator("tarih_sec_toplu", minDate, lenMonth)
      let Merkez1 = document.getElementById("Merkez1_inp").value
      let Merkez2 = document.getElementById("Merkez2_inp").value
      let Meric = document.getElementById("Meric_inp").value
      let Havsa = document.getElementById("Havsa_inp").value
      let Enez = document.getElementById("Enez_inp").value
      let Kesan = document.getElementById("Kesan_inp").value
      let Lalapasa = document.getElementById("Lalapasa_inp").value
      let Suloglu = document.getElementById("Suloglu_inp").value
      let Ipsala = document.getElementById("Ipsala_inp").value
      let Uzunkopru = document.getElementById("Uzunkopru_inp").value
      let updated_eczaneler = eczaneler

      if (!Number.isNaN(index) && Merkez1 !== "" &&  Merkez2 !== "" &&  Meric !== "" &&  Havsa !== "" &&  Enez !== "" &&  Kesan !== "" &&  Lalapasa !== "" &&  Suloglu !== "" &&  Ipsala !== "" &&  Uzunkopru !== ""){
        updated_eczaneler[index]["Merkez1"] = Merkez1
        updated_eczaneler[index]["Merkez2"] = Merkez2
        updated_eczaneler[index]["Meriç"] = Meric 
        updated_eczaneler[index]["Havsa"] = Havsa
        updated_eczaneler[index]["Enez"] = Enez
        updated_eczaneler[index]["Keşan"] = Kesan
        updated_eczaneler[index]["Lalapaşa"] = Lalapasa
        updated_eczaneler[index]["Süloğlu"] = Suloglu
        updated_eczaneler[index]["İpsala"] = Ipsala
        updated_eczaneler[index]["Uzunköprü"] = Uzunkopru
        
        document.getElementById("errorMessage").style.visibility = "visible";
        document.getElementById("errorMessage").innerHTML="Degisiklikler kaydedildi!";
      }
      else {
        document.getElementById("errorMessage").style.visibility = "visible";
        document.getElementById("errorMessage").innerHTML="Gerekli alanları doldurunuz!";
      }
      setTimeout(function(){
        document.getElementById("errorMessage").style.visibility = "hidden";
        },1000);

      setEczaneler(updated_eczaneler)
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