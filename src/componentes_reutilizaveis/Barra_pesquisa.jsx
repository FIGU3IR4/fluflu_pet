import styles from "./Barra_pesquisa.module.css";

function Barra_pesquisa({ onSearchChange }) {
  const handleInputChange = (event) => {
    if (onSearchChange) {
      onSearchChange(event.target.value);
    }
  };

  return (
    <div className={styles.barra}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="  Animal, Cidade, Procedimento"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Barra_pesquisa;
