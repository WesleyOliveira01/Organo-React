import { v4 as id } from "uuid";
import { useState } from "react";
import Banner from "./components/Banner/index";
import Formulario from "./components/Formulario/index";
import Time from "./components/Time";

const App = () => {
  const [times, setTimes] = useState([
    {
      id: id(),
      nome: "Programação",
      cor: "#D9F7E9",
    },
    {
      id: id(),
      nome: "Front-end",
      cor: "#E8F8FF",
    },
    {
      id: id(),
      nome: "Data-science",
      cor: "#F0F8E2",
    },
    {
      id: id(),
      nome: "Devops",
      cor: "#FDE7E8",
    },
    {
      id: id(),
      nome: "UX e design",
      cor: "#FAE9F5",
    },
    {
      id: id(),
      nome: "Mobile",
      cor: "#FFF5D9",
    },
    {
      id: id(),
      nome: "Inovação e Gestão",
      cor: "#FFEEDF",
    },
  ]);
  const [colaboradores, setColaboradores] = useState([]);
  const aoDeletar = (id) => {
    setColaboradores(
      colaboradores.filter((colaborador) => {
        if (colaborador.id != id) {
          return colaborador;
        }
      })
    );
  };

  const mudarCorDoTime = (cor, id) => {
    setTimes(
      times.map((time) => {
        if (time.id == id) {
          time.cor = cor;
        }
        return time;
      })
    );
  };

  const criaTime = (novoTime) => {
    setTimes([...times, novoTime]);
  };
  console.log(times);
  return (
    <>
      <Banner />
      <Formulario
        colaboradores={colaboradores}
        criaColaborador={setColaboradores}
        criarTime={criaTime}
        listaTimes={times}
        times={times.map((time) => time.nome)}
      />
      {times.map((time) => (
        <Time
          id={time.id}
          key={time.nome}
          nome={time.nome}
          cor={time.cor}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={aoDeletar}
          mudarCor={mudarCorDoTime}
        />
      ))}
    </>
  );
};

export default App;
