import { useState } from "react";
import { v4 as id } from "uuid";
// components
import CampoDeTexto from "../CampoTexto/index";
// CSS
import "./style.css";
import ListaSuspensa from "../ListaSuspensa/index";
import Botao from "../Botao/index";

const Formulario = ({ criaColaborador, colaboradores, times, criarTime }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [novoTime, setNovoTime] = useState("");
  const [cor, setCor] = useState("#000");

  const aoEnviar = (e) => {
    e.preventDefault();

    criaColaborador([
      ...colaboradores,
      {
        id: id(),
        nome,
        cargo,
        imagem,
        time,
      },
    ]);

    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  const aoCriarTime = (e) => {
    e.preventDefault();

    criarTime({ id: id(), nome: novoTime, cor });

    setNovoTime("");
    setCor("#000");
  };
  return (
    <section className="formulario">
      <form action="#" onSubmit={aoEnviar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoDeTexto
          obrigatorio={true}
          nome="Nome"
          valor="nome"
          placeholder="Digite seu nome"
          valInput={nome}
          setValInput={setNome}
        />
        <CampoDeTexto
          obrigatorio={true}
          nome="Cargo"
          valor="cargo"
          placeholder="Digite seu cargo"
          valInput={cargo}
          setValInput={setCargo}
        />
        <CampoDeTexto
          obrigatorio={false}
          nome="Imagem"
          valor="imagem"
          placeholder="Digite o endereco da imagem"
          valInput={imagem}
          setValInput={setImagem}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          item={times}
          time={time}
          setTime={setTime}
        />
        <Botao>Criar card</Botao>
      </form>
      <form action="#" onSubmit={aoCriarTime}>
        <h2>Preencha os dados para criar o novo time.</h2>
        <CampoDeTexto
          obrigatorio={true}
          nome="Time"
          valor="Time"
          placeholder="Digite o nome do time"
          valInput={novoTime}
          setValInput={setNovoTime}
        />
        <CampoDeTexto
          tipo="color"
          nome="Cor"
          valInput={cor}
          setValInput={setCor}
        />

        <Botao>Criar time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
