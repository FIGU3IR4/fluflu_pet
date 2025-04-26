import React from "react";
import Header from "../componentes_reutilizaveis/header";
import Footer from "../componentes_reutilizaveis/Footer";
import Main_sos from "../components/componentes_clinicas/main_sos";

const PrimeirosSocorros = () => {
  return (
    <div >
      <Header />
      <div>
        <Main_sos />
      </div>

      <div className="squadros-primeiros-socorros">
        <Footer />
      </div>
    </div>
  );
};
export default PrimeirosSocorros;
