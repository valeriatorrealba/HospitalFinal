// src/components/Servicios.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardQuestion, faKitMedical, faStethoscope } from '@fortawesome/free-solid-svg-icons';

const servicios = [
    {
        icon: faClipboardQuestion,
        title: "Consultas",
        description: "Ofrecemos consultas con especialistas en diversas áreas médicas, brindando diagnósticos precisos y soluciones adaptadas a cada paciente."
    },
    {
        icon: faKitMedical,
        title: "Urgencias",
        description: "Nuestro servicio de urgencias está disponible las 24 horas, garantizando atención inmediata y eficiente en casos de emergencia."
    },
    {
        icon: faStethoscope,
        title: "Especialidades",
        description: "Contamos con un equipo multidisciplinario de especialistas en cardiología, pediatría, ginecología y más, para cuidar de tu salud integral."
    }
];

const Servicios = () => (
    <section className="section container">
        <div className="row">
        <div className="section__services col-12">
            <h2 className="services__title">Servicios</h2>
            <p className="services__paragraph">En el Hospital Paloma ofrecemos servicios de alta calidad para satisfacer tus necesidades de salud, con un equipo profesional comprometido con tu bienestar.</p>
        </div>
        </div>
        <div className="container">
        <div className="services__box row">
            {servicios.map((servicio, index) => (
            <div key={index} className="box__container col-lg-3 col-md-12 col-sm-auto col-xs-3">
                <div><FontAwesomeIcon icon={servicio.icon} className="box__icon" /></div>
                <h3 className="box__title">{servicio.title}</h3>
                <p className="box__paragraph">{servicio.description}</p>
            </div>
            ))}
        </div>
        </div>
    </section>
);

export default Servicios;
