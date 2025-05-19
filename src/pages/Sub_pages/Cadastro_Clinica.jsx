import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../../componentes_reutilizaveis/header";
import Footer from "../../componentes_reutilizaveis/Footer";
import style from "./CadastroClinica.module.css"; // CSS Modules

function CadastroClinica() {
  const navigate = useNavigate();
  const [opcao, setOpcao] = useState("clinica");

  const handleOpcaoChange = (event) => {
    const selecionado = event.target.value;
    setOpcao(selecionado);

    if (selecionado === "usuario") {
      navigate("/cadastro/usuario"); // Altere conforme sua rota
    }
  };

  return (
    <div>
      <Header />
      <div className={style["cadastro-container"]}>

        <div className={style["toggle-options"]}>
          <label>
            <input
              type="radio"
              name="tipoCadastro"
              value="clinica"
              checked={opcao === "clinica"}
              onChange={handleOpcaoChange}
            />
            Cadastro de Clínicas
          </label>
          <label>
            <input
              type="radio"
              name="tipoCadastro"
              value="usuario"
              checked={opcao === "usuario"}
              onChange={handleOpcaoChange}
            />
            Cadastro de Usuários
          </label>
        </div>

        <h1 className={style["cadastro-title"]}>Cadastro da Clínica</h1>

        <form className={style["cadastro-form"]}>
          <div className={style["form-row"]}>
            <input type="text" placeholder="Nome da clínica" className={style["form-input"]} />
            <input type="email" placeholder="Email" className={style["form-input"]} />
          </div>

          <div className={style["form-row"]}>
            <input type="password" placeholder="Senha" className={style["form-input"]} />
            <input type="password" placeholder="Confirmar senha" className={style["form-input"]} />
          </div>

          <div className={style["form-row"]}>
            <input type="text" placeholder="CNPJ" className={style["form-input"]} />
            <input type="text" placeholder="Endereço" className={style["form-input"]} />
          </div>

          <div className={style["form-row-column"]}>
            <label className={style["form-label"]}>Dias de funcionamento</label>
            <input type="date" className={style["form-input"]} />
          </div>

          <div className={style["form-row"]}>
            <div className={style["form-group"]}>
              <label className={style["form-label"]}>Horário de abertura</label>
              <input type="time" className={style["form-input"]} />
            </div>
            <div className={style["form-group"]}>
              <label className={style["form-label"]}>Horário de fechamento</label>
              <input type="time" className={style["form-input"]} />
            </div>
          </div>

          <textarea
            placeholder="Descreva os tipos de atendimentos e serviços oferecidos"
            className={style["form-textarea"]}
          ></textarea>

          <button type="submit" className={style["botao-cadastrar"]}>Cadastrar Clínica</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default CadastroClinica;
