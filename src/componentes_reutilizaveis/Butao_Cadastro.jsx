import "./Butao_cadastro.css";

function Button_Cadastro() {
  return (
    <div className="butao">
      <button>
        <a href="#teste">
          {" "}
          <h2>Mais informações</h2>
        </a>
      </button>

      <div id="teste">
  <h1>Por que é importante se cadastrar no FluFlu Pet?</h1>
  <p>
    O FluFlu Pet conecta clínicas veterinárias e tutores de pets de forma 
    prática e segura, promovendo o bem-estar animal. Para clínicas, é uma 
    oportunidade de ganhar visibilidade, gerenciar atendimentos com 
    facilidade e reforçar a confiança no mercado. Já os tutores encontram 
    serviços de qualidade, organizam o histórico de saúde de seus pets e 
    têm acesso a uma experiência mais ágil e segura. Cadastre-se agora e 
    faça parte dessa comunidade que transforma o cuidado com os animais!
  </p>
  <button id="cta-button">Cadastre-se ou Faça Login</button>
</div>
    </div>
  );
}
export default Button_Cadastro;
