import { useState } from "react";
import TypeaheadComponent from "./typeahead.jsx";

export default function Szures({ value, onChange }) {

    const [markak, setMarkak] = useState([]);
    const gyartmanyokList = ["Audi","BMW","Mercedes","Volkswagen","Toyota","Opel","Ford","Kia","Hyundai"];

    const [uzemanyag, setUzemanyag] = useState([]);
    const uzemanyagList = ["Benzin","Dízel","Elektromos","Hibrid"];

    const [szin, setSzin] = useState([]);

    const [valto, setValto] = useState([]);

    const [evjarat, setEvjarat] = useState("");
    const [km, setKm] = useState("");
    const [ar, setAr] = useState("");
    const [motormeret, setMotormeret] = useState("");
    const [irat, setIrat] = useState("");
    const [ajto, setAjto] = useState("");
    const [szemely, setSzemely] = useState("");

  

  // Kezelők
  const handleMarkakChange = (newValues) => {
    setMarkak(newValues);
    triggerOnChange(newValues, uzemanyag);
  };


  const handleUzemanyagChange = (newValues) => {
    setUzemanyag(newValues);
    triggerOnChange(markak, newValues);
  };

  // Összes változás visszaküldése
  const triggerOnChange = (markak,uzemanyag) => {
    if (onChange) {
      onChange({ markak,uzemanyag });
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
    </div>
  );
}
