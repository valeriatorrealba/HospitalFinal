import React from 'react';
import Servicios from '../components/Servicios';
import Testimonios from '../components/Testimonios';


const Home = () => {

    return (
        <div>
            <section className="hero bg-light py-5 text-center">
                <div className="container">
                    <h1 className="display-4 fw-bold text-primary mb-4">Bienvenido al Hospital</h1>
                    <p className="lead mb-4">Tu salud es nuestra prioridad</p>

                    <div className="row">
                        {/* Misión */}
                        <div className="col-md-6 mb-4">
                            <div className="bg-white p-4 rounded shadow">
                                <h3 className="h4 text-primary mb-3">Nuestra Misión</h3>
                                <p>Contribuir a la salud y el bienestar de la comunidad a través de atención médica de calidad, calidez humana y tecnología de punta.</p>
                            </div>
                        </div>

                        {/* Visión */}
                        <div className="col-md-6 mb-4">
                            <div className="bg-white p-4 rounded shadow">
                                <h3 className="h4 text-primary mb-3">Nuestra Visión</h3>
                                <p>Ser el hospital que brinde la mejor experiencia en servicios de salud integrales, accesibles y confiables.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Servicios />
            <Testimonios />
        </div>
    );
};

export default Home;
