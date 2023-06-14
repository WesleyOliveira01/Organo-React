import { useState } from "react";
import "./style.css";

const CampoDeTexto = ({ nome, valor, placeholder, obrigatorio,valInput,setValInput,tipo}) => {
  const handleInput = (e) => {
    setValInput(e.target.value);
  };
  return (
    <div className="campo__texto">
      <label htmlFor={valor}>{nome}</label>
      <input
        required={obrigatorio}
        type={tipo}
        name={valor}
        id={valor}
        placeholder={placeholder}
        value={valInput}
        onChange={handleInput}
      />
    </div>
  );
};

export default CampoDeTexto;
