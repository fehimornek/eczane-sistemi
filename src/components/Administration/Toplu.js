import React from "react";

const Toplu = ({dates}) => {
    const minDate = dates[0]
    const maxDate = dates[1]
    return(
        <div className='atama_toplu'>
          <h2>Toplu Ata</h2>
          <form>
            <input type="date" min={minDate} max={maxDate}></input>
            <table className="table_admin" align="center">
              <tr>
                <th>Merkez</th>
                <th>Merkez</th>
                <th>Meriç</th>
                <th>Havsa</th>
                <th>Enez</th>
                <th>Keşan</th>
                <th>Lalapaşa</th>
                <th>Süloğlu</th>
                <th>İpsala</th>
              </tr>    
              <tr>
                <th><input type="text" className="input_text"></input></th>
                <th><input type="text" className="input_text"></input></th>
                <th><input type="text" className="input_text"></input></th>
                <th><input type="text" className="input_text"></input></th>
                <th><input type="text" className="input_text"></input></th>
                <th><input type="text" className="input_text"></input></th>
                <th><input type="text" className="input_text"></input></th>
                <th><input type="text" className="input_text"></input></th>
                <th><input type="text" className="input_text"></input></th>
              </tr>  
          </table>
          <input type="submit"></input>
          </form>
          
        </div>
    )
}

export default Toplu;