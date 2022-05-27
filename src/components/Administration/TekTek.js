import React from "react";
import indexCalculator from "./IndexCalculator";
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
        console.log(eczaneler)
    }

    const minDate = dates[0]
    const maxDate = dates[1]
    const lenMonth = dates[2]
    return(
        <div className='atama_tek'>
          <h2>Tek Tek Ata</h2>
          <form>
            <div className='sehir'>
              <select id="sehir_sec_tek">
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
            </div>
            <div className='tarih'>
              <input id="tarih_sec_tek" type="date" min={minDate} max={maxDate}></input>
            </div>
            <div className='eczane'>
              <select id="eczane_sec_tek">
                <option>Faruk</option>
                <option>Cemal</option>
                <option>Kumpir</option>
                <option>Zaa</option>
                <option>Hebele</option>
                <option>Hübele</option>
                <option>Lala</option>
                <option>Lolo</option>
              </select>
            </div>
            <input onClick={eczaneAtaTek} type="submit"></input>
          </form>
          <h4 id="mesaj_basari_hata"></h4>

        </div>
    )
}

export default TekTek;