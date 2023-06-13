import { useState } from "react";
import Banner from "./components/Banner/index";
import Formulario from "./components/Formulario/index";
import Time from "./components/Time";

const App = () => {
  const [times,setTimes] = useState([
    {
      nome: "Programação",
      
      cor: "#D9F7E9",
    },
    {
      nome: "Front-end",
      
      cor: "#E8F8FF",
    },
    {
      nome: "Data-science",
      
      cor: "#F0F8E2",
    },
    {
      nome: "Devops",
      
      cor: "#FDE7E8",
    },
    {
      nome: "UX e design",
      
      cor: "#FAE9F5",
    },
    {
      nome: "Mobile",
      
      cor: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      
      cor: "#FFEEDF",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoDeletar = () => {
    console.log("deletando colaborador");
  }

  const mudarCorDoTime = (cor,nome) => {
    setTimes(times.map((time) =>{
      if (time.nome == nome ) {
        time.cor = cor;
      }
      return time
    }))
  }
  return (
    <>
      <Banner />
      <Formulario
        colaboradores={colaboradores}
        criaColaborador={setColaboradores}
        times={times.map((time) => time.nome)}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          cor={time.cor}
          colaboradores={colaboradores.filter((colaborador) => colaborador.time === time.nome)}
          aoDeletar={aoDeletar}
          mudarCor={mudarCorDoTime}
        />
      ))}
    </>
  );
};

export default App;
