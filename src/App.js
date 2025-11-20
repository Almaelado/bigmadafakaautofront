import './App.css'; 
import Autok from './components/autok.jsx';
import Bejelentkez from './components/bejelentkezes.jsx'
import Szures from './components/szures.jsx'
import Menu from './components/menu.jsx';

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [szur, setSzur] = useState("");

  return (
    <BrowserRouter>
      <Menu />
      <div className="App">
        <Szures onSearch={filterString => setSzur(filterString)} />
        <Autok szuro={szur} />

        {/* Példa route-ok */}
        <Routes>
          <Route path="/bejelentkez" element={<Bejelentkez />} />
          {/* Itt jöhetnek a többi route-ok */}
        </Routes>
      </div>    
    </BrowserRouter>
  );
}

export default App;
