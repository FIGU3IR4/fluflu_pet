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
            <p><strong>Endereço:</strong> {clinicData.address}</p>
            <p><strong>Horários:</strong> {clinicData.hours}</p>

            {/* Mapa integrado */}
            <div className="clinic-map">
              <iframe
                title="Mapa da Clínica"
                src={`https://www.google.com/maps?q=${encodeURIComponent(clinicData.address)}&output=embed`}
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "12px", marginTop: "15px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="clinic-contact">
            <a href={`tel:${clinicData.contact.phone}`} className="contact-link">
              <i className="fa-solid fa-phone"></i> {clinicData.contact.phone}
            </a>
            <a href="#" className="contact-link">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href={`mailto:${clinicData.contact.email}`} className="contact-link">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Serviços oferecidos */}
        <div className="clinic-services">
          <h2 className="services-title">Serviços oferecidos</h2>
          <div className="services-list">
            <ul>
              {clinicData.services.map((service, index) => (
                <li key={index}><strong>{service}</strong> — cuidado especializado com atendimento dedicado.</li>
              ))}
              <li><strong>Odontologia:</strong> Limpeza, extração e tratamento dentário completo.</li>
              <li><strong>Dermatologia:</strong> Diagnóstico e tratamento de alergias e doenças de pele.</li>
              <li><strong>Nutrição:</strong> Avaliação nutricional com planos alimentares personalizados.</li>
              <li><strong>Banho e Tosa:</strong> Higiene e estética com segurança e carinho.</li>
              <li><strong>Atendimento 24h:</strong> Emergências a qualquer hora do dia ou da noite.</li>
            </ul>
          </div>
          <div className="services-buttons">
           <a href="/agd"><button className="button-primary">Agendar Consulta</button></a> 
            <a href="/clinica/avaliacao">
              <button className="button-secondary">Fazer Avaliação</button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
