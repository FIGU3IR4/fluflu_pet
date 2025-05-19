import Header from "../../componentes_reutilizaveis/header";
import Footer from "../../componentes_reutilizaveis/Footer";
import Butao_login from "../../componentes_reutilizaveis/Butao_login";
import "./Login.css";
function Login() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <div className="form-group">
          <input type="email" placeholder="Email" className="form-input" />
          <input type="password" placeholder="Senha" className="form-input" />
        </div>

        <div className="form-options">
          <div className="remember-me">
            <input type="checkbox" id="remember" className="checkbox-input" />
            <label htmlFor="remember" className="checkbox-label">
              Lembrar-me
            </label>
          </div>
          <a href="#" className="forgot-password">
            Esqueceu a senha?
          </a>
        </div>

        <Butao_login />

       <div className="noconta">

        <p>Não tem uma conta? <a href="/Cadastro/clinica"> <strong>Inscreva-se</strong></a></p>

       </div>

       <div id="logar">
        <h3>
          logar com 
        </h3>
       </div>
       <div class="icons_login">
        <i class="fa-brands fa-google"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-apple"></i>
       </div>
      
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Login;
