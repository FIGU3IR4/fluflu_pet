import "./main_sos.css";
import { HeartPulse, PawPrint, AlertTriangle } from "lucide-react";

const Main_sos = () => {
  return (
    <div className="main-container">
      <section className="hero">
        <div className="hero-text">
          <h1>🐾 Primeiros Socorros para Pets</h1>
          <p>Saiba como agir com segurança e rapidez em situações de emergência.</p>
        </div>
        <div className="hero-img"></div>
      </section>

      <section className="grid-cards">
        <div className="card card-dog">
          <h2><PawPrint /> Para Cachorros</h2>
          <ul>
            <li><strong>Engasgo:</strong> Manobra de Heimlich com cuidado.</li>
            <li><strong>Sangramento:</strong> Pressão com pano limpo.</li>
            <li><strong>Queimaduras:</strong> Água fria, sem gelo.</li>
            <li><strong>Convulsões:</strong> Proteja o espaço, não encoste na boca.</li>
            <li><strong>Substância tóxica:</strong> Leve ao veterinário com a embalagem.</li>
          </ul>
        </div>

        <div className="card card-cat">
          <h2><PawPrint /> Para Gatos</h2>
          <ul>
            <li><strong>Fratura:</strong> Imobilize e leve com urgência.</li>
            <li><strong>Intoxicação:</strong> Identifique e leve ao vet.</li>
            <li><strong>Mordidas:</strong> Lave e leve ao vet.</li>
            <li><strong>Queimaduras:</strong> Água fria e sem cremes.</li>
            <li><strong>Engasgo:</strong> Se inconsciente, respiração artificial.</li>
          </ul>
        </div>
      </section>

      <section className="tip-box">
        <h2><AlertTriangle /> Dica Geral</h2>
        <p>Mantenha um kit de primeiros socorros com gaze, antisséptico, luvas, termômetro e soro fisiológico.</p>
      </section>

      <section className="links">
        <h2>🔗 Fontes confiáveis:</h2>
        <a href="https://www.petz.com.br/blog/primeiros-socorros-em-caes-e-gatos/">Petz</a>
        <a href="https://apaixonadosporquatropatas.com.br/montando-um-kit-de-primeiros-socorros-para-seu-pet-guia-completo/">Apaixonados por Quatro Patas</a>
        <a href="https://premierpet.com.br/tutor/primeiros-socorros-em-pets-o-que-e-importante-saber/">Premier Pet</a>
      </section>
    </div>
  );
};

export default Main_sos;
