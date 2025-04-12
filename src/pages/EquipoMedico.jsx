
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import doctor1 from '../assets/img/doctor1.jpg';
import doctor2 from '../assets/img/doctor2.jpg';
import doctor3 from '../assets/img/doctor3.jpg';
import doctor4 from '../assets/img/doctor4.jpg';
import Citas from '../components/Citas';

const EquipoMedico = () => {
    const location = useLocation();
    const citasRef = useRef(null);

    useEffect(() => {
        if (location.state?.scrollTo === 'citas' && citasRef.current) {
            citasRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, [location]);

    return (
        <main>
            <section className="section">
                <div className="col-xl-12 col-lg-8 section__hero">
                    <h2 className="hero__title--size">El hospital está comprometido con la excelencia médica</h2>
                    <p className="hero__paragraph">
                        A través de la atención de alta calidad, innovación constante y una dedicación profunda al bienestar de cada paciente. Nuestro equipo de profesionales se enfoca en brindar servicios de salud avanzados, aplicando las mejores prácticas y tecnología de vanguardia para asegurar diagnósticos precisos, tratamientos eficaces y una recuperación integral. La satisfacción y el cuidado de nuestros pacientes son la prioridad, y trabajamos día a día para superar sus expectativas con un servicio humano y seguro.
                    </p>
                </div>
            </section>

            <section className="section container" id="doctores">
                <h2 className="box__title text-center">Lista de Doctores</h2>
                <div className="doctor-card-container">
                    <div className="doctor-card">
                        <img src={doctor1} alt="Fotografía de la Dra. Callie Torres" />
                        <div className="card-body">
                            <h3 className="card-title">Dra. Callie Torres</h3>
                            <h4 className="card-subtitle">Especialidad Ortopedia</h4>
                            <p className="card-text">La Dra. Callie Torres cuenta con una amplia experiencia en el área de ortopedia. Su enfoque está en mejorar la movilidad y la calidad de vida de sus pacientes a través de tratamientos personalizados y tecnología avanzada.</p>
                        </div>
                    </div>
                    {/* Repite doctor-card para los demás doctores */}
                    <div className="doctor-card">
                        <img src={doctor2} alt="Fotografía de la Dra. Arizona Robbins" />
                        <div className="card-body">
                            <h3 className="card-title">Dra. Arizona Robbins</h3>
                            <h4 className="card-subtitle">Especialidad Genetista</h4>
                            <p className="card-text">La Dra. Arizona Robbins es una genetista reconocida, especializada en brindar soluciones innovadoras para condiciones genéticas complejas. Su trabajo se basa en un compromiso con la investigación y la atención personalizada.</p>
                        </div>
                    </div>
                    {/* Repite doctor-card para los demás doctores */}
                    <div className="doctor-card">
                        <img src={doctor3} alt="Fotografía del Dr. Federico Garcia" />
                        <div className="card-body">
                            <h3 className="card-title">Dr. Federico Garcia</h3>
                            <h4 className="card-subtitle">Especialidad Dentista</h4>
                            <p className="card-text">El Dr. Federico Garcia, como dentista, se dedica a garantizar una salud bucal óptima para todos sus pacientes. Utiliza técnicas modernas para ofrecer tratamientos cómodos y efectivos, priorizando el bienestar del paciente.</p>
                        </div>
                    </div>
                    {/* Repite doctor-card para los demás doctores */}
                    <div className="doctor-card">
                        <img src={doctor4} alt="Fotografía de la Dra. Lexie Grahams" />
                        <div className="card-body">
                            <h3 className="card-title">Dra. Lexie Grahams</h3>
                            <h4 className="card-subtitle">Especialidad Oftalmologia</h4>
                            <p className="card-text">La Dra. Lexie Grahams es especialista en oftalmología y se enfoca en la detección temprana y tratamiento de enfermedades visuales. Su misión es mejorar la visión y la calidad de vida de sus pacientes con un enfoque empático y profesional.</p>
                        </div>
                    </div>
                    {/* Repite doctor-card para los demás doctores */}
                </div>
            </section>
            <section className="section container" id="citas" ref={citasRef}>
                <div className="services__box row p-5">
                    <div className="col-lg-12 col-md-10 col-sm-auto col-xs-3">
                        <h2 className="box__title text-center">Gestión de Citas</h2>
                        <p className="hero__paragraph text-center">Si deseas agendar una cita, por favor llena el formulario a continuación:</p>
                        <Citas />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default EquipoMedico;
