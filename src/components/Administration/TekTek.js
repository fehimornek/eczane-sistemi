import React from "react";

const TekTek = ({setEczaneler}) => {
    const eczaneAtama = () =>{

    }

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
              <input type="date" min="2022-05-20" max="2023-05-20"></input>
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