import "./App.css";
import PrimeirosSocorros from "./primeiros_socorros";
import Clinicas from "./Clinicas";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/primeiros-socorros" element={<PrimeirosSocorros />} />
          <Route path="/clinicas" element={<Clinicas/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
