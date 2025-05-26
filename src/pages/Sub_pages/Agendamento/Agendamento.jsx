import style from "./Agendamento.module.css";

const Agendamento = ({ year, month }) => {
  // Função para obter o número de dias no mês
  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  // Função para obter o dia da semana do 1º dia do mês (0 = Domingo)
  const getFirstDayOfWeek = (year, month) => {
    return new Date(year, month - 1, 1).getDay();
  };

  const totalDays = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfWeek(year, month);

  // Exemplo: Gerar dias disponíveis/indisponíveis aleatórios
  const daysStatus = Array.from({ length: totalDays }, (_, i) => ({
    day: i + 1,
    status: Math.random() > 0.5 ? "disponivel" : "indisponivel",
  }));

  return (
    <div className={style.calendar}>
      <h2 className={style.title}>
        {`${new Date(year, month - 1).toLocaleString("default", {
          month: "long",
        })} ${year}`}
      </h2>

      <div className={style["calendar-grid"]}>
        {["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"].map((day) => (
          <div key={day} className={style["day-header"]}>
            {day}
          </div>
        ))}

        {/* Espaços vazios antes do primeiro dia */}
        {Array.from({ length: firstDay }).map((_, index) => (
          <div key={`empty-${index}`} className={style["empty-cell"]}></div>
        ))}

        {/* Dias do mês */}
        {daysStatus.map(({ day, status }) => (
          <div key={`day-${day}`} className={style["day-cell"]}>
            <div className={`${style.circle} ${style[status]}`}></div>
            <span>{day}</span>
          </div>
        ))}
      </div>

      <div className={style.legend}>
        <div>
          <span className={`${style.circle} ${style.disponivel}`}></span>
          Disponível
        </div>
        <div>
          <span className={`${style.circle} ${style.indisponivel}`}></span>
          Indisponível
        </div>
      </div>
    </div>
  );
};

export default Agendamento;
