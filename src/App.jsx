import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import PrimeirosSocorros from "./pages/primeiros_socorros";
import Clinicas from "./pages/Clinicas";
import Home from "./pages/Home";
import Petfit from "./pages/Petfit";
import Avaliacao_clinica from "./pages/Sub_pages/Avaliacao_clinica";
import Clinica_especifica from "./pages/Sub_pages/Clinica_especifica";
import Login from "./pages/Sub_pages/login";
import CadastroClinica from "./pages/Sub_pages/Cadastro_clinica";
import CadastroUsuario from "./pages/Sub_pages/Cadastro_user";
import ClinicPage from "./pages/ClinicPage";
import Agendamento from "./pages/Sub_pages/Agendamento/Agendamento";
import Adm2 from "./pages/adm2";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/primeiros-socorros" element={<PrimeirosSocorros />} />
          <Route path="/clinicas" element={<Clinicas />} />
          <Route
            path="/clinica/pro-animal/avaliacao"
            element={<Avaliacao_clinica />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/petfit" element={<Petfit />} />
          <Route path="/clinica/pet-dream" element={<Clinica_especifica />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Cadastro/clinica" element={<CadastroClinica />} />
          <Route path="/Cadastro/usuario" element={<CadastroUsuario />} />
           <Route path="/clinica/:id" element={<ClinicPage />} />
          <Route path="/agd" element={<Agendamento/>} />
           <Route path="/adm" element={<Adm2/>} />
           
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
