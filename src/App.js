import './App.css';
import Admin from './components/Administration/Admin';
import Main from './components/MainPage/Main';
import LoginAccount from './components/LoginPage/LoginAccount';
import ErrorPage from './components/misc/ErrorPage';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let eczaneList = []
  for (let i = 0; i < 30; i++) eczaneList.push({"Merkez1":"-", "Merkez2":"-", "Meriç":"-", "Havsa":"-", "Enez":"-",
                                               "Keşan":"-", "Lalapaşa":"-", "Süloğlu":"-", "İpsala":"-", "Uzunköprü":"-"})

  const [eczaneler, setEczaneler] = useState(eczaneList)
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main eczaneler={eczaneler}/>}/>
          <Route path="/admin" element={<Admin eczaneler={eczaneler} setEczaneler={setEczaneler}/>}/>
          <Route path="/login" element={<LoginAccount/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
