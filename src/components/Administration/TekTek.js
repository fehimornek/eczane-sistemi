import React from "react";

const TekTek = ({dates}) => {
    const eczaneAtama = () =>{

    }
    const minDate = dates[0]
    const maxDate = dates[1]
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
              <input type="date" min={minDate} max={maxDate}></input>
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