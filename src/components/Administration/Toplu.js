import React from "react";

const Toplu = ({setEczaneler, monthInfoArray}) => {
    return(
        <div className='atama_toplu'>
          <h2>Toplu Ata</h2>
          <form>
            <input type="date"></input>
            <table>
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
              <th>
                <input></input>
              </th>
              <th><input></input></th>
              <th><input></input></th>
              <th><input></input></th>
              <th><input></input></th>
              <th><input></input></th>
              <th><input></input></th>
              <th><input></input></th>
              <th><input></input></th>
            </tr>  
          </table>
          <input type="submit"></input>
          </form>
          
        </div>
    )
}

export default Toplu;