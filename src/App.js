import './App.css'; 
import Autok from './components/autok.jsx';
import Bejelentkez from './components/bejelentkez.jsx';
import Regisztracio from './components/regisztracio.jsx';
import Szures from './components/szures.jsx';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Menu from './components/menu.jsx';
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
                <Szures onSearch={(filter) => setSzur(filter)} />
                <Autok szuro={szur} />
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
          <Route path="/bejelentkez" element={<Bejelentkez />} />
          <Route path="/regisztracio" element={<Regisztracio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
