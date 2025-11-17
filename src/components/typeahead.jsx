import { Typeahead } from "react-bootstrap-typeahead";
import { useState, useEffect } from "react";

export default function TypeaheadComponent({ options, value, onChange, label }) {
  const [selectedValues, setSelectedValues] = useState(value || []);

  useEffect(() => {
    setSelectedValues(value || []);
  }, [value]);

  // Márka törlése
  const removeItem = (item) => {
    const updatedValues = selectedValues.filter((v) => v !== item);
    setSelectedValues(updatedValues);
    onChange(updatedValues);
  };

  return (
    <div className="mb-3">
      <label className="form-label text-white">{label || "Kiválasztott:"}</label>
      <div className="mb-2">
        {selectedValues.map((item) => (
          <span
            key={item}
            className="badge bg-primary me-2"
            style={{ display: "inline-flex", alignItems: "center", padding: "0.4rem 0.6rem" }}
          >
            {item} 
            <button
              type="button"
              className="btn-close btn-close-white ms-2"
              aria-label="Remove"
              onClick={() => removeItem(item)}
              style={{ padding: "0", marginLeft: "0.3rem" }}
            ></button>
          </span>
        ))}
      </div>

      <Typeahead
        id="typeahead-search"
        options={options.filter(m => !selectedValues.includes(m))} // csak a még nem kiválasztottak
        placeholder="Elkezdesz írni..."
        selected={[]}
        multiple={false} // egy választás egyszerre
        onChange={(selected) => {
          if (selected.length === 0) return;

          const newValue = selected[0];
          const updatedValues = [...selectedValues, newValue];
          setSelectedValues(updatedValues);
          onChange(updatedValues);
        }}
      />
    </div>
  );
}
