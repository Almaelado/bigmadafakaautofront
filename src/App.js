import './App.css'; 
import Autok from './components/autok.jsx';
import Bejelentkez from './components/bejelentkez.jsx';
import Regisztracio from './components/regisztracio.jsx';
import Szures from './components/szures.jsx';
import Menu from './components/menu.jsx';
import Fooldal from './components/fooldal.jsx';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [szur, setSzur] = useState("");
  
  return (
    <BrowserRouter>
      <Menu />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Fooldal />
              </>
            }
          />
          <Route
            path="/autok"
            element={
              <>
                <Szures onSearch={(filter) => setSzur(filter)} />
                <Autok szuro={szur} />
              </>
            }
          />
          <Route path="/regisztracio" element={<Regisztracio />} />
          <Route path="/bejelentkez" element={<Bejelentkez />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
