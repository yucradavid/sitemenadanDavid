import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/'); // Cambia '/' por la ruta de tu página de inicio de sesión si es diferente
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black flex-column vh-100">
            <div className="container-fluid">
                {/* Navbar Toggler */}
                <div className="text-center mb-2 d-flex align-items-center">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <a className="navbar-brand text-success ms-2">Dashboard</a>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                {/* Navbar Collapse */}
                <div className="collapse navbar-collapse mt-4" id="navbarNav">
                    <ul className="navbar-nav flex-column align-items-center w-100">
                        <NavItem label="Matricula" to="/matricula" />
                        <NavItem label="Horario" to="/horario" />
                        <NavItem label="Docente" to="/docente" />
                        <NavItem label="Curso" to="/curso" />
                        <NavItem label="Estudiante" to="/estudiante" />
                        <NavItem label="Historial" to="/historial" />
                        <NavItem label="Asistencia" to="/asistencia" />
                        <NavItem label="Reporte" to="/reporte" />
                    </ul>
                </div>
            </div>

            {/* Botón "Back" al pie de la página */}
            <div className="mt-auto">
                <button
                    className="btn button-equal-size-back mb-3"
                    aria-current="page"
                    type="button"
                    onClick={handleBackClick}
                >
                    Back
                </button>
            </div>
        </nav>
    );
};

// Componente funcional para los items del navbar
const NavItem = ({ label, to, disabled }) => {
    return (
        <li className="nav-item w-100" style={{ margin: '5px 0' }}>
            <Link to={to} className="btn button-equal-size" aria-current="page">
                {label}
            </Link>
        </li>
    );
};

export default Navbar;
