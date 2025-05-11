import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import PrimeirosSocorros from "./pages/primeiros_socorros";
import Clinicas from "./pages/Clinicas";
import Home from "./pages/Home";
import Petfit from "./pages/Petfit";
import Avaliacao_clinica from "./pages/Sub_pages/Avaliacao_clinica";
import Clinica_especifica from "./pages/Sub_pages/Clinica_especifica";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/primeiros-socorros" element={<PrimeirosSocorros />} />
          <Route path="/clinicas" element={<Clinicas/>} />
          <Route path="/clinica/pro-animal/avaliacao" element={<Avaliacao_clinica/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/petfit" element={<Petfit/>} />
          <Route path="/clinica/pro-animal" element={<Clinica_especifica/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
