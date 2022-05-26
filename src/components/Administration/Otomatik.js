import React from "react";

const Otomatik = ({setEczaneler, monthInfoArray}) => {
    return(
        <div className='atama_otomatik'>
          <h2>Otomatik Ata</h2>
          <form>
            <button>1 Gün</button>
            <button>1 Hafta</button>
            <button>1 Ay</button>
            <input type="submit"></input>
          </form>
        </div>
    )
}

export default Otomatik;