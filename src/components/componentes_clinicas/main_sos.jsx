import "./main_sos.css";

const Main_sos = () => {
  return (
    <div className="main-container">
      <div className="top-content">
        <div className="instruct">
          <h1>Primeiros Socorros para Pets</h1>
          <br />
          <h2>Cuide do Seu Amigo em Momentos de Emergência</h2>
          <br />
          <br />
          <h3>
            Os primeiros socorros são fundamentais para garantir <br />
            que seu pet receba os cuidados iniciais necessários <br />
            enquanto você busca ajuda profissional. Saber o que <br />
            fazer em situações de emergência pode salvar a vida <br />
            do seu animal de estimação. Abaixo, apresentamos <br />
            algumas dicas básicas para diferentes tipos de <br />
            emergências.
          </h3>
        </div>

        <div className="circle">
        </div>
      </div>
      
      <div className="primeiros_socorros_container">
        <div className="primeiros_socorros">
          <h2>Primeiros socorros para cachorros:</h2>
          <h3>1 - Engasgo</h3>
          <p>Acalme o cão. <br />
            Tente abrir a boca com cuidado e remover o objeto visível. <br />
            Se não conseguir, aplique a manobra de Heimlich (pressão no abdômen).</p>
          <br />
          <h3>2 - Corte ou sangramento</h3>
          <p>Faça pressão sobre o ferimento com um pano limpo. <br />
            Se for profundo, enfaixe e leve ao veterinário imediatamente.</p>
          <br />
          <h3>3 - Queimaduras</h3>
          <p>Lave a área queimada com água fria corrente (não use gelo!). <br />
            Cubra com um pano limpo e leve ao veterinário.</p>
          <br />
          <h3>4 - Convulsões</h3>
          <p>Afaste objetos ao redor para evitar que ele se machuque. <br />
            NÃO tente colocar a mão na boca dele. <br />
            Após a crise, mantenha o cão aquecido e leve ao veterinário.</p>
          <br />
          <h3>5 - Ingestão de substâncias tóxicas</h3>
          <p>Não provoque vômito sem orientação veterinária. <br />
            Leve o cão (e a embalagem da substância, se possível) rapidamente ao veterinário.</p> <br />
          </div>
  
        <div className="primeiros_socorros2">
          <h2>Primeiros socorros para gatos:</h2>
          <h3>1 - Queda ou fratura</h3>
          <p>Imobilize o gato numa caixa ou superfície firme. <br />
            Não tente corrigir o osso. <br />
            Leve ao veterinário urgentemente.</p>
          <br />
          <h3>2 - Intoxicação</h3>
          <p>Se ingeriu planta ou produto químico, procure identificar o que foi. <br />
            Leve ao veterinário com o material ingerido (se possível).</p>
          <br />
          <h3>3 - Mordidas de outros animais</h3>
          <p>Limpe o local com soro fisiológico ou água filtrada. <br />
            Aplique um pano limpo e leve ao veterinário — mordidas quase sempre infeccionam.</p>
          <br />
          <h3>4 - Queimaduras</h3>
          <p>Enxague com água fria por alguns minutos. <br />
            Não use cremes ou pomadas sem orientação veterinária.</p>
          <br />
          <h3>5 - Obstrução respiratória (engasgo)</h3>
          <p>Se for visível, tente remover o objeto com cuidado. <br />
            Se o gato perder a consciência, faça respiração artificial até chegar no veterinário.</p>
        </div>
      </div>
  
      <div className="dica_geral">
        <h2>Dica geral:</h2>
        <p>Tenha sempre um kit de primeiros socorros para pets em casa: gaze, faixa, esparadrapo, <br />
          antisséptico veterinário, soro fisiológico, luvas descartáveis, termômetro etc.</p>
      </div>

      <div className="link_informações">
        <h2>Para mais informações de primeiros socorros acesse os links:</h2>
        <p>1. <a href="https://www.petz.com.br/blog/primeiros-socorros-em-caes-e-gatos/">Primeiros socorros em cães e gatos: o que fazer em emergências</a></p>
        <p>2. <a href="https://apaixonadosporquatropatas.com.br/montando-um-kit-de-primeiros-socorros-para-seu-pet-guia-completo/">Montando um Kit de Primeiros Socorros para Seu Pet: Guia Completo</a></p>
        <p>3. <a href="https://premierpet.com.br/tutor/primeiros-socorros-em-pets-o-que-e-importante-saber/">Primeiros socorros pet: o que é importante saber?</a></p>

      </div>
      
    </div>
  );
};

export default Main_sos;