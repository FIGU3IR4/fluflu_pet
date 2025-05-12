import Header from "../componentes_reutilizaveis/header";
import Footer from "../componentes_reutilizaveis/Footer";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="main">
      
        <div>
          <h1>
            <strong>
              Conecte-se ao mundo <br />
              dos pets: <span className="word1">Cuidados,</span>
              <br /> <span className="word2">Amor</span> e tudo o que eles{" "}
              <br /> precisam, <br />
              Em um so lugar.
            </strong>
          </h1>
        </div>
        <div className="animal_foto">
          <img
            src="https://conexaoplaneta.com.br/wp-content/uploads/2021/10/dia-mundial-animais-2-conexao-planeta.jpg"
            alt=""
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
