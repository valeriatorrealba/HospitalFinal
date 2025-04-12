import React from 'react';
import logo from '../assets/img/logo.png'; // Asegúrate de que la ruta sea correcta

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="footer">
                        <div className="footer__box col">
                            <a href="index.html" className="footer__image">
                            <img src={logo} alt="Logo Hospital" />
                            </a>
                            <p>Dirección: Av. Hospital, 1234, Santiago, Chile</p>
                            <p>Teléfono: +56 2 234 5678</p>
                            <p>Email: contacto@hospitalpaloma.cl</p>
                            <a href="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook footer__icon"></i></a>
                            <a href="https://www.instagram.com" target="_blank"><i className="fa-brands fa-square-instagram footer__icon"></i></a>
                            <a href="https://www.tiktok.com" target="_blank"><i className="fa-brands fa-tiktok footer__icon"></i></a>
                            <a href="https://x.com" target="_blank"><i className="fa-brands fa-square-x-twitter footer__icon"></i></a>
                            <a href="https://www.linkedin.com" target="_blank"><i className="fa-brands fa-linkedin footer__icon"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
