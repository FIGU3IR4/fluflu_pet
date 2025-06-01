import React, { useState } from 'react';
import styles from './AppointmentScheduler.module.css';

const AppointmentScheduler = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  // Data for January 2025 based on the image
  // 1st Jan 2025 was a Wednesday. The calendar starts with DOM (Sunday).
  // So, there will be 3 empty cells before Jan 1 (Sun, Mon, Tue).
  const calendarDays = [
    { date: null, type: 'empty' }, // Sun
    { date: null, type: 'empty' }, // Mon
    { date: null, type: 'empty' }, // Tue
    { date: 1, available: true }, // Wed
    { date: 2, available: true }, // Thu
    { date: 3, available: true }, // Fri
    { date: 4, available: true }, // Sat
    { date: 5, available: false }, // Sun
    { date: 6, available: false }, // Mon
    { date: 7, available: true }, // Tue
    { date: 8, available: true }, // Wed
    { date: 9, available: true }, // Thu
    { date: 10, available: true }, // Fri
    { date: 11, available: true }, // Sat
    { date: 12, available: false }, // Sun
    { date: 13, available: false }, // Mon
    { date: 14, available: false }, // Tue
    { date: 15, available: false }, // Wed
    { date: 16, available: false }, // Thu
    { date: 17, available: false }, // Fri
    { date: 18, available: false }, // Sat
    { date: 19, available: true }, // Sun
    { date: 20, available: true }, // Mon
    { date: 21, available: true }, // Tue
    { date: 22, available: true }, // Wed
    { date: 23, available: false }, // Thu
    { date: 24, available: false }, // Fri
    { date: 25, available: false }, // Sat
    { date: 26, available: false }, // Sun
    { date: 27, available: false }, // Mon
    { date: 28, available: true }, // Tue
    { date: 29, available: true }, // Wed
    { date: 30, available: true }, // Thu
    { date: 31, available: true }, // Fri
  ];

  const weekdays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];

  const morningTimes = ['8:00', '8:15', '8:30', '9:00', '10:00', '10:45', '11:15', '11:30', '11:45'];
  const afternoonTimes = ['14:15', '14:45', '15:00', '15:15', '15:30', '15:45', '16:15', '16:30', '17:45'];

  const paymentOptions = [
    { name: 'Cartão', icon: '/cartao.svg'}, // Replace with actual path or SVG
    { name: 'Boleto', icon: 'boleto.svg' }, // Replace with actual path or SVG
    { name: 'Pix', icon: '/pix.svg' }, // Replace with actual path or SVG
  ];

  const handleDateClick = (day) => {
    if (day.available) {
      setSelectedDate(day.date);
      setSelectedTime(null); // Reset time selection when date changes
    }
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handlePaymentClick = (payment) => {
    setSelectedPayment(payment);
  };

  const handleScheduleAppointment = () => {
    if (selectedDate && selectedTime && selectedPayment) {
      const selectedDateFormatted = selectedDate < 10 ? `0${selectedDate}` : selectedDate;
      alert(`Agendamento confirmado para:\nData: ${selectedDateFormatted}/01/2025\nHora: ${selectedTime}\nPagamento: ${selectedPayment.name}`);
      // In a real application, you'd send this data to a backend API
    } else {
      alert('Por favor, selecione uma data, um horário e uma forma de pagamento.');
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.calendarSection}>
        <div className={styles.calendarContainer}>
          <div className={styles.monthSidebar}>
            <span className={styles.monthText}>JANEIRO</span>
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
                  className={`${styles.dayCell} ${day.type === 'empty' ? styles.emptyDay : ''} ${
                    day.available ? styles.available : styles.unavailable
                  } ${selectedDate === day.date && day.available ? styles.selectedDay : ''}`}
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
          <span className={styles.clinicIcon}>&#x1F4BB;</span> {/* Placeholder for icon */}
          <span className={styles.clinicName}>Clínica Figueira Vet</span>
        </div>

        <div className={styles.timeSlots}>
          <h3 className={styles.slotHeading}>Manhã</h3>
          <div className={styles.timeButtons}>
            {morningTimes.map((time, index) => (
              <button
                key={index}
                className={`${styles.timeButton} ${selectedTime === time ? styles.selectedTime : ''}`}
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
                className={`${styles.timeButton} ${selectedTime === time ? styles.selectedTime : ''}`}
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
                className={`${styles.paymentButton} ${selectedPayment === option ? styles.selectedPayment : ''}`}
                onClick={() => handlePaymentClick(option)}
              >
                {/* For actual icons, you would use <img> tags or SVG components */}
                {option.icon ? (
                  <img src={option.icon} alt={option.name} className={styles.paymentIcon} />
                ) : (
                  <span>{option.name}</span> // Fallback if no icon
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
  );
};

export default AppointmentScheduler;