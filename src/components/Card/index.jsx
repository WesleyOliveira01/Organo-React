import "./style.css";

const Card = ({nome,cargo,imagem,corDeFundo}) => {
  return (
    <section className="colaborador">
      <div className="cabecalho" style={{backgroundColor:corDeFundo}}>
        <img
          src={imagem}
          alt="imagem do colaborador"
        />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </section>
  );
};

export default Card;

{
  /* <section>
            <div>
                <img src={imagem} alt="imagem do colaborador" />
            </div>
            <div>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </section> */
}
