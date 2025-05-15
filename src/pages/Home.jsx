import Header from "../componentes_reutilizaveis/header";
import Footer from "../componentes_reutilizaveis/Footer";
import "./Home.css";
import Pets1 from "../imgs/pets1.png";
import Button_Cadastro from "../componentes_reutilizaveis/Butao_Cadastro";
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
          <img src={Pets1} alt="" />
        </div>
      </div>
      <div>
        <Button_Cadastro />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
