import React from "react";
import Header from "../../componentes_reutilizaveis/header";
import Footer from "../../componentes_reutilizaveis/Footer";
import styles from "./ClinicaEspecifica.module.css"; // Crie este arquivo CSS Module

const ClinicaEspecifica = () => {
  return (
    <div>
      <Header />

      <main className={styles.container}>
        <h1 className={styles.title}>Página da Clínica</h1>
        <p className={styles.description}>
          Esta página está em desenvolvimento. Aqui serão exibidas as informações completas da clínica escolhida pelo usuário.
        </p>

        <div className={styles.linkBox}>
          <h2 className={styles.subtitle}>
            Já temos uma página de avaliação pronta! Clique abaixo para visualizá-la:
          </h2>
          <a href="/clinica/pro-animal/avaliacao" className={styles.link}>
            <button className={styles.button}>Ver Avaliações</button>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ClinicaEspecifica;
