import React, { useState } from "react";
import Header from "../componentes_reutilizaveis/header";
import Footer from "../componentes_reutilizaveis/Footer";
import Barra_pesquisa from "../componentes_reutilizaveis/Barra_pesquisa";
import Clinica from "../components/componentes_primeiros socorros/Clinicacomponent";
import "./Clinicas.css";

const Clinicas = () => {
  const clinicasData = [
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipM4KCZsdl6RpACo291aMnH-AtMu_ecmgnk2Kmmt=s1360-w1360-h1020-rw",
      nome: "Pet Dream",
      endereco: "Rua Lima Campos nº 10 - Recife",
      telefone: "(81) 987905127",
    },
    {
      src: "https://cdn.folhape.com.br/upload/dn_arquivo/2020/11/whatsapp-image-2020-11-06-at-152544_1.jpeg",
      nome: "Petz",
      endereco: "Rua do Libano nº 598 - Olinda",
      telefone: "(81) 34587951",
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr62O3eMpHhkknh707NlyD6kQBFO_MCdMgZNNw9s3xR1daz4B5rWBV7VWBL9GM13Ej0-wLcE9pBlK8mtfv2baGSYeFum_au3oeMeP8-1j9df-84BfASJUIVrXRcSmXwj15sKGH7-w=s1360-w1360-h1020-rw",
      nome: "PET FILHOS",
      endereco: "Rua Lima Campos nº 10 - Cabo",
      telefone: "(81) 987905127",
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nou0N66XqURNgOp-aFaudTWWcp9_YNVeXwsqh_Ina-QgWxfYtvL0NKXr5bEryRXXgRTa_My16--8H9YxaojrsIsuDMP6Iwmp3KpFWku-qyL3ZKYsanXAZ7bN2XpEHE-QN6fdEif=w325-h218-n-k-no",
      nome: "Bicho Mimado",
      endereco: "Rua Lima Campos nº 10 - Janga",
      telefone: "(81) 987905127",
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipM77YRSKXbZv9BuzBq7ui0KEVWSDRaFKjsuhBQ=s1360-w1360-h1020-rw  ",
      nome: "Veterinary Vita",
      endereco: "Rua Lima Campos nº 10 - Boa viagem",
      telefone: "(81) 987905127",
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipMh3_8WHZhyOQ0507qnjHKx1X_UinHFH5z9X54=s1360-w1360-h1020-rw",
      nome: "VetMais",
      endereco: "Rua Lima Campos nº 10 - Boa viagem",
      telefone: "(81) 987905127",
    },
      {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNdPPAGFYDrV5Hm4x6Eh8FqxyMJUFR1Q-4BA&s",
      nome: "6",
      endereco: "Rua Lima Campos nº 10",
      telefone: "(81) 987905127",
    },
  
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const clinicsPerPage = 3;

  const handleSearchChange = (term) => {
    setSearchTerm(term.toLowerCase());
    setStartIndex(0); // Reset index for new searches
  };

  const filteredClinics = clinicasData.filter(
    (clinica) =>
      clinica.nome.toLowerCase().includes(searchTerm) ||
      clinica.endereco.toLowerCase().includes(searchTerm) ||
      clinica.telefone.includes(searchTerm)
  );

  const clinicsToShow = filteredClinics.slice(
    startIndex,
    startIndex + clinicsPerPage
  );

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - clinicsPerPage, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + clinicsPerPage, filteredClinics.length - clinicsPerPage)
    );
  };

  return (
    <div>
      <Header />
      <Barra_pesquisa onSearchChange={handleSearchChange} />
      <div className="carrossel-container">
        <button onClick={handlePrev} disabled={startIndex === 0}>
          ◀
        </button>

        <div className="Lojas_clinicas">
          <div
            className="Lojas_clinicas-inner"
            style={{
              transform: `translateX(-${(startIndex / filteredClinics.length) * 100}%)`,
              transition: 'transform 0.5s ease-in-out', // Transição suave
            }}
          >
            {clinicsToShow.map((clinica, index) => (
              <div key={index} className="Lojas_clinicas-item">
                <Clinica clinica={clinica} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={startIndex + clinicsPerPage >= filteredClinics.length}
        >
          ▶
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Clinicas;
