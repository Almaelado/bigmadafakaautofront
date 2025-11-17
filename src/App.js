import Autok from './components/autok.jsx';
import Bejelentkez from './components/bejelentkezAdmin.jsx'
import Szures from './components/szures.jsx'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [szur,setSzur] = useState("");
  return (
      <>
      <div className="d-flex justify-content-center">
        <Szures onSearch={filterString => setSzur(filterString)} />
      <Autok szuro={szur} />
        </div>    
      
      </>
  )
}

export default App;
