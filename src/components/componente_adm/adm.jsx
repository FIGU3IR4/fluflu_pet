
import styles from "./adm.module.css";

const data = [130, 180, 210, 290, 290, 320, 270, 320];
const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

const Administrador = () => {
  return (
    <div className={styles.primeiro}>
      <aside className={styles.segundo}>
        <div className={styles.logo}>
          <img src="./imgs/logo.png" alt="logo" />
          <h2>FluFlu Pet</h2>
        </div>
        <nav>
          <ul>
            <li><span className={styles.icone}>📊</span>Administrador</li>
          </ul>
        </nav>
      </aside>

      <main className={styles.main}>
        <header className={styles["main-header"]}>
          <h1>Administrador</h1>
          <div className={styles["user-menu"]}>
            <span className={styles.icon}>👤</span>
            <span>Adm</span>
            <span className={styles["menu-icon"]}>☰</span>
          </div>
        </header>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles["card-icon"]}>🏥</div>
            <div>
              <p>Clínicas</p>
              <h2>1112</h2>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles["card-icon"]}>👤</div>
            <div>
              <p>Users</p>
              <h2>2003</h2>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles["card-icon"]}>📅</div>
            <div>
              <p>Agendamentos</p>
              <h2>859</h2>
            </div>
          </div>
        </div>

        <div className={styles.graphs}>
          <div className={styles["bar-graph"]}>
            <svg width="100%" height="250">
              {data.map((val, i) => (
                <rect
                  key={i}
                  x={i * 40 + 20}
                  y={250 - val}
                  width="20"
                  height={val}
                  fill="#f97316"
                />
              ))}
              <g className="x-axis">
                {meses.map((mes, i) => (
                  <text key={i} x={i * 40 + 20} y={245} fontSize="10" textAnchor="middle">
                    {mes}
                  </text>
                ))}
              </g>
            </svg>
          </div>

          <div className={styles["donut-graph"]}>
            <svg viewBox="0 0 36 36" className={styles["donut-svg"]}>
              <path
                className={styles["donut-ring"] + " " + styles.orange}
                strokeWidth="3"
                strokeDasharray="60, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
                fill="none"
              />
              <path
                className={styles["donut-ring"] + " " + styles.green}
                strokeWidth="3"
                strokeDasharray="40, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
                fill="none"
              />
            </svg>
            <div className={styles["donut-center"]}>
              <p>Visitas</p>
              <h2>1150</h2>
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          &copy;Developed by <span>Mad Dogs Tec</span>
        </footer>
      </main>
    </div>
  );
};

export default Administrador;
