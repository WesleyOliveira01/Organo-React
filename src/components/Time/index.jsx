import Card from "../Card";
import "./style.css";

const Time = ({ nome, corPrimaria, corSecundaria,colaboradores }) => { 
    const bgPrimario = {borderColor:corPrimaria};
    const bgSecundario = {backgroundColor:corSecundaria}
  return (
    colaboradores.length > 0 && <section className="card" style={bgSecundario}>
      <h3 style={bgPrimario}>{nome}</h3>

      <div className="colaboradores">
        {colaboradores.map((colaborador,i)=>{
          return <Card key={i} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corDeFundo={corPrimaria} />;
        })}
      </div>
      
    </section>
  );
};

export default Time;

// cargo,imagem,time
