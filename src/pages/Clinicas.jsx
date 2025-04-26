import React from "react";
import Header from "../componentes_reutilizaveis/header";
import Footer from "../componentes_reutilizaveis/Footer";
import main_sos from "../components/componentes_clinicas/main_sos";
import Barra_pesquisa from "../componentes_reutilizaveis/Barra_pesquisa";
import Clinica from "../components/componentes_primeiros socorros/Clinicacomponent";

const Clinicas = () => {
  return (
    <div>

      <Header />
      <Clinica clinica={{
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNdPPAGFYDrV5Hm4x6Eh8FqxyMJUFR1Q-4BA&s",
        nome: "Pro-Animal",
        endereco: "Rua Lima Campos nº 10",
        telefone: "(81) 987905127"
       }} />

      <Clinica clinica={{
        src: "https://cdn.folhape.com.br/upload/dn_arquivo/2020/11/whatsapp-image-2020-11-06-at-152544_1.jpeg",
        nome: "Petz",
        endereco: "Rua do Libano nº 598",
        telefone: "(81) 34587951"
       }} />

      <Clinica clinica={{
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_DdHZfC5PDLWzP_Nhh89rpZcTsbgIidk1Cw&s",
        nome: "Oh Pet",
        endereco: "Rua Alberto Paiva, 275-Graças, Recife",
        telefone: "(8196790050"
       }} />

      <Footer/>

    </div>
  );
};  

export default Clinicas;
