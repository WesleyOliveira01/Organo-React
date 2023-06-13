import { useState } from "react";
import hexToRgba from 'hex-to-rgba';
import Card from "../Card";
import "./style.css";

const Time = ({ nome, cor, colaboradores, aoDeletar, mudarCor }) => {
  return (
    colaboradores.length > 0 && (
      <section className="card" style={{backgroundColor:hexToRgba(cor,0.6)}}> 
        <input
          type="color"
          className="inputCor"
          value={cor}
          onChange={(e) => mudarCor(e.target.value, nome)}
        />

        <h3 style={{borderColor:hexToRgba(cor,0.6)}}>{nome}</h3>

        <div className="colaboradores">
          {colaboradores.map((colaborador, i) => {
            return (
              <Card
                key={i}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                corDeFundo={cor}
                aoDeletar={aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;

// cargo,imagem,time
