import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png'; 

export const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header__image">
                <img src={logo} alt="Logo Hospital" />
            </Link>
            <input type="checkbox" id="side-menu" className="side-menu" />
            <label htmlFor="side-menu" className="hamburger"><span className="hamburger-line" /></label>
            <nav className="header__nav">
                <ul className="nav__menu">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/equipo-medico">Equipo Médico</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="/equipo-medico" state={{ scrollTo: 'citas' }} className="menu__btn">Reservar Citas</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header; 
