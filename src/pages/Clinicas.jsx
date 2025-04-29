import React, { useState } from "react";
import Header from "../componentes_reutilizaveis/header";
import Footer from "../componentes_reutilizaveis/Footer";
import Barra_pesquisa from "../componentes_reutilizaveis/Barra_pesquisa";
import Clinica from "../components/componentes_primeiros socorros/Clinicacomponent";
import "./Clinicas.css";

const Clinicas = () => {
  const clinicasData = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNdPPAGFYDrV5Hm4x6Eh8FqxyMJUFR1Q-4BA&s",
      nome: "Pro-Animal",
      endereco: "Rua Lima Campos nº 10",
      telefone: "(81) 987905127",
    },
    {
      src: "https://cdn.folhape.com.br/upload/dn_arquivo/2020/11/whatsapp-image-2020-11-06-at-152544_1.jpeg",
      nome: "Petz",
      endereco: "Rua do Libano nº 598",
      telefone: "(81) 34587951",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_DdHZfC5PDLWzP_Nhh89rpZcTsbgIidk1Cw&s",
      nome: "Oh Pet",
      endereco: "Rua Alberto Paiva, 275-Graças, Recife",
      telefone: "(81) 96790050",
    },
    // Repita ou adicione mais clínicas conforme necessário
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNdPPAGFYDrV5Hm4x6Eh8FqxyMJUFR1Q-4BA&s",
      nome: "Pro-Animal 2",
      endereco: "Rua Lima Campos nº 10",
      telefone: "(81) 987905127",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_DdHZfC5PDLWzP_Nhh89rpZcTsbgIidk1Cw&s",
      nome: "Oh Pet 2",
      endereco: "Rua Alberto Paiva, 275-Graças, Recife",
      telefone: "(81) 96790050",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_DdHZfC5PDLWzP_Nhh89rpZcTsbgIidk1Cw&s",
      nome: "Oh Pet 3",
      endereco: "Rua Alberto Paiva, 275-Graças, Recife",
      telefone: "(81) 96790050",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const clinicsPerPage = 4;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - clinicsPerPage, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + clinicsPerPage, clinicasData.length - clinicsPerPage)
    );
  };

  const clinicsToShow = clinicasData.slice(startIndex, startIndex + clinicsPerPage);

  return (
    <div>
      <Header />
      <Barra_pesquisa />
      <div className="carrossel-container">
        <button onClick={handlePrev} disabled={startIndex === 0}>
          ◀
        </button>

        <div className="Lojas_clinicas">
          {clinicsToShow.map((clinica, index) => (
            <Clinica key={index} clinica={clinica} />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={startIndex + clinicsPerPage >= clinicasData.length}
        >
          ▶
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Clinicas;
