import './App.css';
import Admin from './components/Administration/Admin';
import Main from './components/MainPage/Main';
import LoginAccount from './components/LoginPage/LoginAccount';
import ErrorPage from './components/misc/ErrorPage';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EczaneList } from './eczaneData';

function App() {
  const [eczaneler, setEczaneler] = useState(EczaneList)
  const [users, setUsers] = useState({admin : ["admin", "-", "-"], fehim: ["1234", "05454239292", "fehimornek@gmail.com"]})
  
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
