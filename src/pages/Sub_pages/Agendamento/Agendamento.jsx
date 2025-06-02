import React, { useState } from "react";
import styles from "./Agendamento.module.css";
import Footer from "../../../componentes_reutilizaveis/Footer";
import Header from "../../../componentes_reutilizaveis/header";

const Agendamento = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const calendarDays = [
    { date: 1, available: false },
    { date: 2, available: true },
    { date: 3, available: true },
    { date: 4, available: true },
    { date: 5, available: true },
    { date: 6, available: true },
    { date: 7, available: true },
    { date: 8, available: false },
    { date: 9, available: false },
    { date: 10, available: true },
    { date: 11, available: true },
    { date: 12, available: true },
    { date: 13, available: true },
    { date: 14, available: true },
    { date: 15, available: false },
    { date: 16, available: false },
    { date: 17, available: false },
    { date: 18, available: false },
    { date: 19, available: false },
    { date: 20, available: false },
    { date: 21, available: false },
    { date: 22, available: true },
    { date: 23, available: true },
    { date: 24, available: true },
    { date: 25, available: true },
    { date: 26, available: false },
    { date: 27, available: false },
    { date: 28, available: false },
    { date: 29, available: false },
    { date: 30, available: false },
  ];

  const weekdays = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];
  const morningTimes = ["8:00", "8:15", "8:30", "9:00", "10:00", "10:45", "11:15", "11:30", "11:45"];
  const afternoonTimes = ["14:15", "14:45", "15:00", "15:15", "15:30", "15:45", "16:15", "16:30", "17:45"];
  const paymentOptions = [
    { name: "Cartão", icon: "https://static.vecteezy.com/system/resources/previews/019/879/184/non_2x/credit-cards-payment-icon-on-transparent-background-free-png.png" },
    { name: "Boleto", icon: "https://img.icons8.com/?size=192&id=77599&format=png" },
    { name: "Pix", icon: "https://img.icons8.com/color/512/pix.png" },
  ];

  const handleDateClick = (day) => {
    if (day.available) {
      setSelectedDate(day.date);
      setSelectedTime(null);
    }
  };

  const handleTimeClick = (time) => setSelectedTime(time);
  const handlePaymentClick = (payment) => setSelectedPayment(payment);

  const handleScheduleAppointment = () => {
    if (selectedDate && selectedTime && selectedPayment) {
      const selectedDateFormatted = selectedDate < 10 ? `0${selectedDate}` : selectedDate;
      alert(
        `Agendamento confirmado para:\nData: ${selectedDateFormatted}/01/2025\nHora: ${selectedTime}\nPagamento: ${selectedPayment.name}`
      );
    } else {
      alert("Por favor, selecione uma data, um horário e uma forma de pagamento.");
    }
  };

  return (
   

<div>
  <Header/>
 <div className={styles.mainContainer}>
      <div>
      <a href="/clinicas"><button className={styles.backButton} onClick={() => console.log("Voltar clicado!")}>
          Voltar
        </button></a>  
      </div>

      <div className={styles.calendarSection}>
        <div className={styles.calendarContainer}>
          <div className={styles.monthSidebar}>
            <span className={styles.monthText}>JUNHO</span>
            <span className={styles.yearText}>25</span>
          </div>
          <div className={styles.calendarGrid}>
            <div className={styles.weekdaysHeader}>
              {weekdays.map((day, index) => (
                <div key={index} className={styles.weekday}>
                  {day}
                </div>
              ))}
            </div>
            <div className={styles.daysGrid}>
              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={`${styles.dayCell} ${
                    day.type === "empty" ? styles.emptyDay : ""
                  } ${day.available ? styles.available : styles.unavailable} ${
                    selectedDate === day.date && day.available ? styles.selectedDay : ""
                  }`}
                  onClick={() => handleDateClick(day)}
                >
                  {day.date && <span className={styles.dateNumber}>{day.date}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={`${styles.legendColor} ${styles.availableColor}`}></span>
            <span>Disponível</span>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.legendColor} ${styles.unavailableColor}`}></span>
            <span>Indisponível</span>
          </div>
        </div>
      </div>

      <div className={styles.appointmentDetailsSection}>
        <div className={styles.clinicHeader}>
          <span className={styles.clinicIcon}>&#x1F4BB;</span>
          <span className={styles.clinicName}>Petz</span>
        </div>

        <div className={styles.timeSlots}>
          <h3 className={styles.slotHeading}>Manhã</h3>
          <div className={styles.timeButtons}>
            {morningTimes.map((time, index) => (
              <button
                key={index}
                className={`${styles.timeButton} ${
                  selectedTime === time ? styles.selectedTime : ""
                }`}
                onClick={() => handleTimeClick(time)}
                disabled={!selectedDate}
              >
                {time}
              </button>
            ))}
          </div>

          <h3 className={styles.slotHeading}>Tarde</h3>
          <div className={styles.timeButtons}>
            {afternoonTimes.map((time, index) => (
              <button
                key={index}
                className={`${styles.timeButton} ${
                  selectedTime === time ? styles.selectedTime : ""
                }`}
                onClick={() => handleTimeClick(time)}
                disabled={!selectedDate}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.paymentOptions}>
          <h3 className={styles.paymentHeading}>Escolha sua forma de pagamento:</h3>
          <div className={styles.paymentButtons}>
            {paymentOptions.map((option, index) => (
              <button
                key={index}
                className={`${styles.paymentButton} ${
                  selectedPayment === option ? styles.selectedPayment : ""
                }`}
                onClick={() => handlePaymentClick(option)}
              >
                {option.icon ? (
                  <img
                    src={option.icon}
                    alt={option.name}
                    className={styles.paymentIcon}
                  />
                ) : (
                  <span>{option.name}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <button
          className={styles.scheduleButton}
          onClick={handleScheduleAppointment}
          disabled={!selectedDate || !selectedTime || !selectedPayment}
        >
          Agendar Consulta
        </button>
      </div>
      
    </div>
<Footer/>

</div>

  );
};

export default Agendamento;
