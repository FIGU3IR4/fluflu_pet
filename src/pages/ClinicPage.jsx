import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../componentes_reutilizaveis/header";
import Footer from "../componentes_reutilizaveis/Footer";

import "./ClinicPage.css";

export default function ClinicPage() {
  const { id } = useParams();
  const [clinicData, setClinicData] = useState(null);

  useEffect(() => {
    fetch("/clinics.json")
      .then((res) => res.json())
      .then((data) => {
        const clinic = data.find((item) => item.id === id);
        setClinicData(clinic);
      });
  }, [id]);

  if (!clinicData) return <p>Carregando...</p>;

  return (
    <div>
      <Header />
      <div className="clinic-container">
        {/* Card da clínica */}
        <div className="clinic-card">
          <img
            src={clinicData.image}
            alt={clinicData.name}
            className="clinic-image"
          />
          <h1 className="clinic-title">{clinicData.name}</h1>
          <p className="clinic-description">{clinicData.description}</p>
          <div className="clinic-info">
            <p>
              <strong>Endereço:</strong> {clinicData.address}
            </p>
            <p>
              <strong>Horários:</strong> {clinicData.hours}
            </p>
          </div>
          <div className="clinic-contact">
            <a href={`tel:${clinicData.contact.phone}`} className="contact-link"> <i class="fa-solid fa-phone"></i>
           {clinicData.contact.phone}
            </a>
            <a href="#" className="contact-link">
                 <i class="fa-brands fa-instagram"></i>
            </a>
            <a href={`mailto:${clinicData.contact.email}`} className="contact-link">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Serviços oferecidos */}
        <div className="clinic-services">
          <h2 className="services-title">Serviços oferecidos:</h2>
          <div className="services-list">
            <ul>
              {clinicData.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
            <ul>
              <li>Odontologia</li>
              <li>Dermatologia</li>
              <li>Nutrição</li>
              <li>Banho e Tosa</li>
              <li>Atendimento 24 horas</li>
            </ul>
          </div>
          <div className="services-buttons">
            <button className="button-primary">Agendar Consulta</button>
            <button className="button-secondary">Fazer Avaliação</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
