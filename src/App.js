import './App.css';
import Admin from './components/Administration/Admin';
import Main from './components/MainPage/Main';
import LoginAccount from './components/LoginPage/LoginAccount';
import ErrorPage from './components/misc/ErrorPage';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let eczaneList = []
  for (let i = 0; i < 30; i++) eczaneList.push({"Merkez1":"-", "Merkez2":"-", "Meriç":"-", "Havsa":"-", "Enez":"-",
                                               "Keşan":"-", "Lalapaşa":"-", "Süloğlu":"-", "İpsala":"-", "Uzunköprü":"-"})

  const [eczaneler, setEczaneler] = useState(eczaneList)
  const [users, setUsers] = useState({admin : ["admin", "-", "-"], fehim: ["1234", "05454239292", "fehimornek@gmail.com"]})
  
  useEffect(() => {
    window.localStorage.setItem("eczeneler", JSON.stringify(eczaneler))
  }, [eczaneler])

  useEffect(() => {
    window.localStorage.setItem("users", JSON.stringify(users))
  }, [users])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main eczaneler={eczaneler}/>}/>
          <Route path="/admin" element={<Admin eczaneler={eczaneler} setEczaneler={setEczaneler}/>}/>
          <Route path="/login" element={<LoginAccount users={users} setUsers={setUsers}/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
