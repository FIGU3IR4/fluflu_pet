import React from "react";
import Header from "../componentes_reutilizaveis/header";
import Footer from "../componentes_reutilizaveis/Footer";
import Petfit_sos from "../components/componentes_petfit/petfit";
function Petfit(){
    return(
      

        <div>
              <Header/>
            <Petfit_sos/>
            <Footer/>
            </div>
            
    )
}

export default Petfit;