import React from 'react';
import MapEmbed from './MapEmbed';

const ContactSection = () => {
    return (
        <section className="container">
            <div className="col-xl-12 col-lg-8 contact">
                <h2 className="contact__title">Contacto</h2>
                <p className="contact__paragraph">
                En el Hospital, estamos comprometidos con tu salud y bienestar. Si tienes alguna consulta o necesitas más información sobre nuestros servicios, no dudes en ponerte en contacto con nosotros. Nuestro equipo está dispuesto a ayudarte en todo momento.
                </p>
            </div>
        
            <MapEmbed />

            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-auto col-sm-auto col-xs-3 mt-5 text-start">
                    <div>
                        <i className="fa-solid fa-map-location-dot contact__icon"></i>
                        <div>
                            <h3>Dirección</h3>
                            <p>Av. Hospital, 1234, Santiago, Chile.</p>
                        </div>
                    </div>
                
                    <div>
                        <i className="fa-solid fa-square-phone-flip contact__icon"></i>
                        <div>
                            <h3>Telefono</h3>
                            <p>+56 2 234 5678</p>
                        </div>
                    </div>

                    <div>
                        <i className="fa-solid fa-envelope contact__icon"></i>
                        <div>
                            <h3>Correo</h3>
                            <p>contacto@hospitalpaloma.cl</p>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-auto col-sm-auto col-xs-3 mt-5 mb-4">
                    <h2>Escríbenos</h2>
                    <form action="" method="post" id="formulario-contacto">
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mensaje" className="form-label">Mensaje</label>
                            <textarea className="form-control" id="mensaje" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
