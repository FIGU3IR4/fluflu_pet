import "./petfit.css";

const Petfit_sos = () => {
  return (
    <div className="geral_petfit">
      <div className="topo">
          <div className="titulo"> <h2>Tipos de exercicios e alimentos ideais para seu animal</h2></div>
          <h3>
            Para garantir a saúde e bem-estar dos seus pets, é essencial<br />
            combinarem atividade física com uma alimentação saudável.<br />
            A atividade física, como caminhadas, brincadeiras e jogos e<br /> 
            busca, ajuda a manter a forma, fortalecer ossos e <br />
            articulações, além de estimular o cérebro e reduzir o<br />
            estresse. A alimentação, por sua vez, deve ser completa,<br />
            equilibrada e adaptada às necessidades de cada animal,<br />
            com rações de boa qualidade, petiscos controlados e, em<br />
            alguns casos, alimentos complementares, como frutas e<br />
            legumes.
          </h3>
      </div>
      
      <div className="atividades_fisicas">
        <div className="tipo_atividade">
          <h2>Dicas para cachorros:</h2>
          <h3>1 - Caminhada</h3>
          <p>As caminhadas são excelentes - normalmente funcionam<b />
             para praticamente todos os cães. Fazer de 2 a 3 caminhadas<b />
             diárias de 15 a 30 minutos cada ajudando seu cão a se manter<b />
             saudável. Passeios outdoor durante o dia também são bons<b />
             para que seu cão receba um pouco de sol diariamente e tenha<b />
             contato com estímulos diferenciados e até mesmo, contato<b />
             social com outros cães.</p>
          <br />
          <h3>2 - Corte ou sangramento</h3>
          <p>As corridas são ótimas para cães com muita energia e ainda<b />
             vão ajudar você a manter a forma! Sempre procure fazer exercícios<b />
             em horários mais frescos e respeite os limites de seu cão.<b />
             Cães idosos, com doenças cardíacas, raças braquicefálicas<b />
             não devem praticar corrida como exercício.
          </p>
          <br />
          <h3>3 - Saltar obstáculos</h3>
          <p>Pular pode ser um excelente exercício físico! Fazer passeios<b />
             que incluam um obstáculo para saltar, como um tronco, um pneu<b />
             ou até mesmo um obstáculo de agility (muitas vezes disponível<b />
             em parques de cães) pode ser uma forma de agregar variedade ao<b />
             dia a dia, tornando a rotina de exercícios mais interessante.
          </p>
          <br />
          <h3>4 - Agility</h3>
          <p>Atividade perfeita para raças de cães cheios de energia.<b />
             O agility canino é ideal para estimular os cães a correrem,<b />
             se concentrarem em um objetivo e treinarem a atenção. Por<b />
             ser bastante completo, o agility ajuda a fortalecer os<b />
             músculos e também as articulações, além de melhorar a <b />
             coordenação do seu cachorro.

          </p>
          <br />
          <h3>5 - Fetch: jogo de buscar frisbee ou bolinha Ingestão de substâncias tóxicas</h3>
          <p>Todo cachorro adora brincar de bolinha! Esta brincadeira<b />
             pode ser um excelente exercício e é sempre um jogo<b />
             divertido para praticar com seu amigão de quatro patas!<b />
          </p> 
          <br />
          </div>
  
        <div className="alimentos_ideais">
          <h2>Dicas para gatos:</h2>
          <h3>1 - Carne</h3>
          <p>A carne é uma fonte essencial de proteína para cães, que<b />
             é importante para o crescimento, reparação tecidual e <b />
             para a produção de enzimas. Opções como frango, peru e <b /> 
             carne bovina são boas escolhas.
          </p> 
          <br />
          <h3>2 - Legumes cozidos</h3>
          <p>Legumes como batata-doce, abóbora e cenoura oferecem<b />
             vitaminas, minerais e fibras, que são importantes para<b />
             a digestão e a saúde geral do cão.
          </p>
          <br />
          <h3>3 - Frutas</h3>
          <p>Frutas como maçã, banana e melão podem ser oferecidas<b />
             com moderação como um petisco saudável, fornecendo<b />
             vitaminas e fibras. É importante remover sementes e<b />
             caroços, e certificar-se de que as frutas sejam frescas<b />
             e maduras. 
          </p>
          <br />
          <h3>4 - Ovos</h3>
          <p>Ovos fornecem proteína de alta qualidade e são uma<b />
             excelente fonte de nutrientes essenciais para cães.
          </p>
          <br />
          <h3>5 - Peixe (Salmão)</h3>
          <p>Salmão é uma boa fonte de proteína e ácidos gordos<b />
             ômega-3, que são importantes para a saúde da pele<b />
             e do pelo do cão. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Petfit_sos;    