import { AiFillCloseCircle } from "react-icons/ai";
import "./style.css";

const Card = ({ nome, cargo, imagem, corDeFundo, aoDeletar,id }) => {
  return (
    <section className="colaborador">
      <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(id)} />
      <section className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt="imagem do colaborador" />
      </section>
      <section className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </section>
    </section>
  );
};

export default Card;
