import { use, useEffect, useState } from "react";
import TypeaheadComponent from "./typeahead.jsx";
import RangeSlider from "./RangeSlider.jsx";
import Checkbox from "./checkbox.jsx";
import Button from 'react-bootstrap/Button';
import http from "../http-common";

export default function Szures({ value, onSearch }) {
    // Állapotok
    const [markak, setMarkak] = useState([]);
    const [markaList, setMarkaList] = useState([]);

    const fetchMarkak = async () => {
      try {
        const response = await http.get('auto/marka');
        setMarkaList(response.data);
      } catch (error) {
        console.error("Error fetching markak:", error);
      }
    };

    const [uzemanyag, setUzemanyag] = useState([]);
    const [uzemanyagList, setUzemanyagList] = useState([]);

    const fetchUzemanyagok = async () => {
      try {
        const response = await http.get('auto/uzemanyag');
        setUzemanyagList(response.data);
      } catch (error) {
        console.error("Error fetching uzemanyag:", error);
      }
    };

    const [szin, setSzin] = useState([]);
    const [szinList, setSzinList] = useState([]);

    const fetchSzinek = async () => {
      try {
        const response = await http.get('auto/szin');
        setSzinList(response.data);
      } catch (error) {
        console.error("Error fetching szin:", error);
      }
    };

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

    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
      fetchMarkak();
      fetchUzemanyagok();
      fetchSzinek();
    }, []);

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
    <div id="Szures" >
      <TypeaheadComponent
        label="Gyártányok"
        options={markaList}
        labelKey="nev"
        value={markak}
        onChange={handleMarkakChange}
      />

      <TypeaheadComponent
        label="Üzemanyagok"
        options={uzemanyagList}
        labelKey="nev"
        value={uzemanyag}
        onChange={handleUzemanyagChange}
      />
        <TypeaheadComponent
        label="Színek"
        options={szinList}
        labelKey="nev"
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
         <p style={{cursor: "pointer", color: "blue"}} onClick={() => setShowMore(!showMore)}>
        {showMore ? "Kevesebb szűrő" : "További szűrők"}
      </p>

      {/* További szűrők */}
      {showMore && (
        <div id="moreFilters">
          <TypeaheadComponent
            label="Váltó típus"
            options={["Automata", "Manuális"]}
            value={valto}
            onChange={setValto}
          />
          <TypeaheadComponent
            label="Motorméret"
            options={["1.0", "1.2", "1.6", "2.0", "2.5", "3.0"]}
            value={motormeret}
            onChange={setMotormeret}
          />
          <TypeaheadComponent
            label="Ajtók száma"
            options={["3", "4", "5"]}
            value={ajto}
            onChange={setAjto}
          />
          <TypeaheadComponent
            label="Személyek száma"
            options={["2", "4", "5", "7"]}
            value={szemely}
            onChange={setSzemely}
          />
        </div>
      )}
    </div>
  );
}
