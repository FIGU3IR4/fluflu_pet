import styles from "./Barra_pesquisa.module.css";

function Barra_pesquisa() {
  return (
    <div className={styles.barra}>
      <i class="fa-solid fa-magnifying-glass"></i>{" "}
      <input
        c
        type="text"
        name=""
        id=""
        placeholder="  Animal, Cidade, Procedimento"
      />
    </div>
  );
}
export default Barra_pesquisa;
