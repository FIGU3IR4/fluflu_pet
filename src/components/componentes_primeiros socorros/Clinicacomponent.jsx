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
      <h2>
  <a
    href={`/clinica/${encodeURIComponent(clinica.nome.toLowerCase().replace(/\s+/g, '-'))}`}
    className={style.clinicaLink}
  >
    {clinica.nome}
  </a>
</h2>
        <p>{clinica.endereco}</p>
        <p>Telefone: {clinica.telefone}</p>
      </div>
    </div>
  );
}

export default Clinica;
