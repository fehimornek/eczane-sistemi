import React, {useEffect} from "react";
import indexCalculator from "../misc/indexCalculator";
const TekTek = ({eczaneler, setEczaneler, dates}) => {
    const eczaneAtaTek = (e) =>{
        e.preventDefault()
        let seciliSehir = document.getElementById("sehir_sec_tek").value;
        let seciliEczane = document.getElementById("eczane_sec_tek").value;
        let index = indexCalculator("tarih_sec_tek", minDate, lenMonth)

        if (!Number.isNaN(index)){
          const updatedEczane = eczaneler
          updatedEczane[index][seciliSehir] = seciliEczane
          setEczaneler(updatedEczane)
          document.getElementById("mesaj_basari_hata").innerHTML="Degisiklikler kaydedildi!";
        }
        else{
          document.getElementById("mesaj_basari_hata").innerHTML="Tarih secin!";
        }
        setTimeout(function(){
          document.getElementById("mesaj_basari_hata").innerHTML="";
          },1000);
    }
    

    const minDate = dates[0]
    const maxDate = dates[1]
    const lenMonth = dates[2]
    return(
        <div className='atama_tek'>
          <hr></hr>
          <h2>Tek Tek Ata</h2>
          <form>
            <select id="sehir_sec_tek" className="eczaneSecici">
                <option>Merkez1</option>
                <option>Merkez2</option>
                <option>Süloğlu</option>
                <option>Keşan</option>
                <option>Hav</option>
                <option>İpsala</option>
                <option>Enez</option>
                <option>Meriç</option>
                <option>Lalapaşa</option>
                <option>Uzunköprü</option>
            </select>
            <input id="tarih_sec_tek" type="date" className="tarih_admin" min={minDate} max={maxDate}></input>
            <input type="text" id="eczane_sec_tek" className="input_text"/>
            <button onClick={eczaneAtaTek} className="pick_button tektekBtn">atama yap</button>
          </form>
          <h4 id="mesaj_basari_hata"></h4>
          <hr></hr>
        </div>
    )
}

export default TekTek;