import { useState } from "react";
// CSS
import "./style.css";

const ListaSuspensa = ({ label, item, obrigatorio, time, setTime }) => {
  const handleTime = (e) => {
    setTime(e.target.value);
  };
  return (
    <section className="lista">
      <label htmlFor="times">{label}</label>
      <select
        onChange={handleTime}
        value={time}
        name="times"
        id="times"
        required={obrigatorio}
      >
        <option value=""></option>
        {item.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </section>
  );
};

export default ListaSuspensa;
