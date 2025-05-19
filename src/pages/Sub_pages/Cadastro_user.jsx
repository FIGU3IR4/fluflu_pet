import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../../componentes_reutilizaveis/header";
import Footer from "../../componentes_reutilizaveis/Footer";
import style from "./Cadastro_User.module.css";

function CadastroUsuario() {
  const navigate = useNavigate();
  const [opcao, setOpcao] = useState("usuario");

  const handleOpcaoChange = (event) => {
    const selecionado = event.target.value;
    setOpcao(selecionado);

    if (selecionado === "clinica") {
      navigate("/cadastro/clinica"); // Altere para o caminho real
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

        <h1 className={style["cadastro-title"]}>Cadastro de Usuário</h1>

        <form className={style["cadastro-form"]}>
          <div className={style["form-row"]}>
            <input type="text" placeholder="Nome completo" className={style["form-input"]} />
            <input type="email" placeholder="Email" className={style["form-input"]} />
          </div>

          <div className={style["form-row"]}>
            <input type="password" placeholder="Senha" className={style["form-input"]} />
            <input type="password" placeholder="Confirmar senha" className={style["form-input"]} />
          </div>

          <div className={style["form-row"]}>
            <div className={style["form-group"]}>
              <label className={style["form-label"]}>Data de nascimento</label>
              <input type="date" className={style["form-input"]} />
            </div>
            <div className={style["form-group"]}>
              <label className={style["form-label"]}>Telefone</label>
              <input type="tel" placeholder="(99) 99999-9999" className={style["form-input"]} />
            </div>
          </div>

          <div className={style["form-row"]}>
            <input type="text" placeholder="Endereço" className={style["form-input"]} />
            <input type="text" placeholder="CPF" className={style["form-input"]} />
          </div>

          <button type="submit" className={style["botao-cadastrar"]}>Cadastrar Usuário</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default CadastroUsuario;
