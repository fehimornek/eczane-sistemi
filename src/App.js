import './App.css';
import Admin from './components/Administration/Admin';
import Main from './components/MainPage/Main';
import React, {useState} from 'react';

function App() {
  let eczaneList = []
  for (let i = 0; i < 30; i++) eczaneList.push({"Merkez1":"-", "Merkez2":"-", "Meriç":"-", "Havsa":"-", "Enez":"-",
                                               "Keşan":"-", "Lalapaşa":"-", "Süloğlu":"-", "İpsala":"-", "Uzunköprü":"-"})

  const [eczaneler, setEczaneler] = useState(eczaneList)
  return (
    <div className="App">
        <Main eczaneler={eczaneler}></Main>
        <Admin eczaneler={eczaneler} setEczaneler={setEczaneler}></Admin>
    </div>
  );
}

export default App;
