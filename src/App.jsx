import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import PrimeirosSocorros from "./pages/primeiros_socorros";
import Clinicas from "./pages/Clinicas";
import Home from "./pages/Home";
import Petfit from "./pages/Petfit";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/primeiros-socorros" element={<PrimeirosSocorros />} />
          <Route path="/clinicas" element={<Clinicas/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/petfit" element={<Petfit/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
