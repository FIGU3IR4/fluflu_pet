import style from "./Clinica.module.css";

function Clinica({ clinica }) {
  return (
    <div className={style.clinicaContainer}>
      <img
        src={clinica.src}
        alt={clinica.alt || "Imagem da clínica"}
        className={style.clinicaImage}
      />
      <div className={style.clinicaInfo}>
        <h2>{clinica.nome}</h2>
        <p>{clinica.endereco}</p>
        <p>Telefone: {clinica.telefone}</p>
      </div>
    </div>
  );
}

export default Clinica;
