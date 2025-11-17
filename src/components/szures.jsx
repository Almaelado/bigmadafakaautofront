import { useState } from "react";
import TypeaheadComponent from "./typeahead.jsx";
import RangeSlider from "./RangeSlider.jsx";
import Checkbox from "./checkbox.jsx";
import Button from 'react-bootstrap/Button';

export default function Szures({ value, onSearch }) {
    // Állapotok
    const [markak, setMarkak] = useState([]);
    const gyartmanyokList = ["Audi","BMW","Mercedes","Volkswagen","Toyota","Opel","Ford","Kia","Hyundai"];

    const [uzemanyag, setUzemanyag] = useState([]);
    const uzemanyagList = ["Benzin","Dízel","Elektromos","Hibrid"];

    const [szin, setSzin] = useState([]);
    const szinList = ["Fekete","Fehér","Szürke","Kék","Piros","Zöld","Sárga"];

    const [valto, setValto] = useState([]);

    const [evjarat, setEvjarat] = useState([1900,new Date().getFullYear()]);

    const maxKm = 500000;
    const [kmRange, setKmRange] = useState([0,maxKm]);
    

    const maxAr = 20000000;
    const [arRange, setArRange] = useState([0, maxAr]); // kétvégű csúszka

    const [motormeret, setMotormeret] = useState("");
    const [irat, setIrat] = useState(false);
    const [ajto, setAjto] = useState("");
    const [szemely, setSzemely] = useState("");

  // Kezelők (NEM hívnak többé triggerOnChange-t)
  const handleMarkakChange = setMarkak;
  const handleSzinChange = setSzin;
  const handleUzemanyagChange = setUzemanyag;
  const handleArChange = setArRange;
  const handleKmChange = setKmRange;
  const handleEvjaratChange = setEvjarat;

  // Csak gombnyomásra adja át a szűrőt
  const handleSearch = () => {
    const filters = {
      markak,
      uzemanyag,
      szin,
      arRange,
      kmRange,
      evjarat,
      irat,
      valto,
      motormeret,
      ajto,
      szemely
    };
    const filtersString = JSON.stringify(filters);
    if (onSearch) {
      onSearch(filtersString);
    }
  };

  return (
    <div className="p-4 bg-dark" style={{ width: "400px" }}>
      <TypeaheadComponent
        label="Gyártmányok"
        options={gyartmanyokList}
        value={markak}
        onChange={handleMarkakChange}
      />

      <TypeaheadComponent
        label="Üzemanyagok"
        options={uzemanyagList}
        value={uzemanyag}
        onChange={handleUzemanyagChange}
      />
        <TypeaheadComponent
        label="Színek"
        options={szinList}
        value={szin}
        onChange={handleSzinChange}
      />

      <RangeSlider
        label="Ár"
        min={0}
        max={maxAr}
        step={100000}
        value={arRange}
        onChange={handleArChange}
        mertek={"Ft"}
      />
      <RangeSlider
        label="Futott Kilométer"
        min={0}
        max={maxKm}
        step={50000}
        value={kmRange}
        onChange={handleKmChange}
        mertek={"Km"}
      />
      <RangeSlider
        label="Gyártási év"
        min={1900}
        max={new Date().getFullYear()}
        step={1}
        value={evjarat}
        onChange={handleEvjaratChange}
        mertek={"Év"}
      />
        <Checkbox cim="Érvényes Magyar Okmányokkal" value={irat} onChange={setIrat} />

        <Button variant="outline-info" onClick={handleSearch}>Keresés</Button>
    </div>
  );
}
