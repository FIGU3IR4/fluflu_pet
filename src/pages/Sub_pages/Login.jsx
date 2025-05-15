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

       <Butao_login/>

        
          <p>
            Não tem uma conta?{" "}
            <a href="#" className="register-link">
              Registre-se
            </a>
          </p>
       
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Login;
