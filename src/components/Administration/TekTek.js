import React from "react";

const TekTek = ({eczaneler, setEczaneler, dates}) => {

    const indexCalculator = () =>{
      let seciliTarih = new Date(document.getElementById("tarih_sec").value)
      let seciliAy = seciliTarih.getMonth() + 1
      let seciliGun = seciliTarih.getDate()
      let minMonth = Number(minDate.split("-")[1])
      let minDay = Number(minDate.split("-")[2])
      let index = 0;
      if (minMonth === seciliAy){
          index= seciliGun - minDay
      }
      else if (minMonth !== seciliAy){
          index = seciliGun + lenMonth - minDay
      }
      return index
    }

    const eczaneAtama = (e) =>{
        e.preventDefault()
        let seciliSehir = document.getElementById("sehir_sec").value;
        let seciliEczane = document.getElementById("eczane_sec").value;
        let index = indexCalculator()
        const updatedEczane = eczaneler
        updatedEczane[index] = [seciliSehir, seciliEczane]
        setEczaneler(updatedEczane)
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
              <select id="sehir_sec">
                <option>Merkez</option>
                <option>Süloğlu</option>
                <option>Keşan</option>
                <option>İpsala</option>
                <option>Enez</option>
                <option>Meriç</option>
                <option>Lalapaşa</option>
                <option>Uzunköprü</option>
              </select>
            </div>
            <div className='tarih'>
              <input id="tarih_sec" type="date" min={minDate} max={maxDate}></input>
            </div>
            <div className='eczane'>
              <select id="eczane_sec">
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
            <input onClick={eczaneAtama} type="submit"></input>
          </form>
        </div>
    )
}

export default TekTek;