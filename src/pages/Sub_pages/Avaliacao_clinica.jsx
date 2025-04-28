import Header from "../../componentes_reutilizaveis/header";
import Footer from "../../componentes_reutilizaveis/Footer";
import "./Avaliacao_clinica.css";

const Avaliacao_clinica = () => {
  return (
    <div>
      <Header />

      <div className="container-pesquisa">
        <div className="cartao-pesquisa">
          <h1 className="titulo-pesquisa">Pesquisa de satisfação</h1>

          <div className="secao-pesquisa">
            <p>Essa é a sua primeira vez nessa clínica?</p>
            <div className="opcoes-pesquisa">
              <label>
                <input type="radio" name="primeira_vez" value="sim" /> Sim
              </label>
              <label>
                <input type="radio" name="primeira_vez" value="nao" /> Não
              </label>
            </div>
          </div>

          <div className="secao-pesquisa">
            <p>
              Com qual frequência você visita nossas instalações da clínica?
            </p>
            <div className="opcoes-pesquisa">
              <label>
                <input type="radio" name="frequencia" value="semanalmente" />{" "}
                Semanalmente
              </label>
              <label>
                <input type="radio" name="frequencia" value="mensalmente" />{" "}
                Mensalmente
              </label>
              <label>
                <input type="radio" name="frequencia" value="trimestralmente" />{" "}
                Trimestralmente
              </label>
              <label>
                <input type="radio" name="frequencia" value="menos" /> Menos que
                uma vez a cada 3 meses
              </label>
            </div>
          </div>

          <div className="secao-pesquisa">
            <p>Qual o seu grau de satisfação com o processo de agendamento?</p>
            <div className="escala-pesquisa">
              <span>Insatisfeito</span>
              {[...Array(10)].map((_, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="satisfacao_agendamento"
                    value={index + 1}
                  />
                  {index + 1}
                </label>
              ))}
              <span>Muito satisfeito</span>
            </div>
          </div>

          <div className="secao-pesquisa">
            <p>Qual a sua satisfação com o processo de check-in e recepção?</p>
            <div className="escala-pesquisa">
              <span>Insatisfeito</span>
              {[...Array(10)].map((_, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="satisfacao_checkin"
                    value={index + 1}
                  />
                  {index + 1}
                </label>
              ))}
              <span>Muito satisfeito</span>
            </div>
          </div>

          <div className="secao-pesquisa">
            <p>
              Quanto tempo precisou esperar pelo atendimento? (tempo além do
              agendado)
            </p>
            <div className="opcoes-pesquisa">
              <label>
                <input type="radio" name="tempo_espera" value="menos30" /> menos
                de 30 minutos
              </label>
              <label>
                <input type="radio" name="tempo_espera" value="30_45" /> 30 - 45
                minutos
              </label>
              <label>
                <input type="radio" name="tempo_espera" value="45_60" /> 45 - 60
                minutos
              </label>
              <label>
                <input type="radio" name="tempo_espera" value="mais60" /> acima
                de 60 minutos
              </label>
            </div>
          </div>

          <div className="secao-pesquisa">
            <p>Por favor, avalie os seguintes itens</p>
            {[
              "Profissionalismo dos funcionários",
              "Higiene do local",
              "Gentileza e carisma dos veterinários",
              "Cuidados prestados pelo veterinário",
            ].map((item, index) => (
              <div key={index} className="avaliacao-pesquisa">
                <p>{item}</p>
                <div className="estrelas-pesquisa">
                  {[...Array(5)].map((_, starIndex) => (
                    <label key={starIndex}>
                      <input
                        type="radio"
                        name={`avaliacao_${index}`}
                        value={starIndex + 1}
                      />
                      ★
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="secao-pesquisa">
            <label htmlFor="comentarios">
              Por favor, compartilhe conosco todos os comentários/sugestões
            </label>
            <textarea id="comentarios" className="campo-texto"></textarea>
          </div>

          <div className="secao-enviar">
            <button className="botao-enviar">Enviar</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Avaliacao_clinica;
