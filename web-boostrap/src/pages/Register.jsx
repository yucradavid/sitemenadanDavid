import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleBackClick = () => {
        navigate('/');
    };

    const showAlert = (message, type) => {
        const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
        const wrapper = document.createElement('div');
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible text-success border-success" role="alert" style="background-color: rgba(0, 0, 0, 0.7);">`,
            `   <h4 class="alert-heading">${type === 'success' ? '¡Bien hecho!' : '¡Error!'}</h4>`,
            `   <p>${message}</p>`,
            `   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style="filter: invert(53%) sepia(90%) saturate(517%) hue-rotate(81deg) brightness(92%) contrast(91%);"></button>`,
            '</div>'
        ].join('');
        alertPlaceholder.append(wrapper);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            showAlert("¡Las contraseñas no coinciden!", "danger");
            return;
        }
        try {
            const response = await fetch('http://localhost:82/auth/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName: username,
                    password: password,
                }),
            });
            if (response.ok) {
                showAlert("¡El usuario ha sido creado correctamente!", "success");
                setTimeout(() => {
                    navigate('/');
                }, 2000); // Redirect after 2 seconds
            } else {
                const errorData = await response.json();
                console.error("Error al crear el usuario:", errorData.message);
                showAlert("Error al crear el usuario: " + errorData.message, "danger");
            }
        } catch (error) {
            console.error("Error al crear el usuario:", error);
            showAlert("Ocurrió un error al crear el usuario.", "danger");
        }
    };

    document.body.style.backgroundColor = 'black';

    return (
        <div className="container mt-5 d-flex justify-content-center align-items-center shadow-lg" style={{ height: '93vh', borderRadius: '15px' }}>
            <div className="card border-success" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '15px', overflow: 'hidden', width: '100%', maxWidth: '400px' }}>
                <div className="card-body" style={{ padding: '30px' }}>
                    <h2 className="card-title text-white text-center mb-4">Registro</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label text-white">Nombre de usuario</label>
                            <input
                                type="text"
                                className="form-control border-success shadow-sm"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white' }}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label text-white">Contraseña</label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="form-control border-success shadow-sm"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white' }}
                                    required
                                />
                                <span className="input-group-text bg-transparent border-success">
                                    <FontAwesomeIcon
                                        icon={showPassword ? faEyeSlash : faEye}
                                        onClick={togglePasswordVisibility}
                                        style={{ cursor: 'pointer', color: 'white' }}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label text-white">Confirmar Contraseña</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="form-control border-success shadow-sm"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white' }}
                                required
                            />
                        </div>
                        <div className="d-flex justify-content-between">
                            <button type="button" className="btn btn-success" onClick={handleBackClick}>Atrás</button>
                            <button type="submit" className="btn btn-success">Crear</button>
                        </div>
                    </form>
                </div>
            </div>
            <div id="liveAlertPlaceholder" className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}></div>
        </div>
    );
}

export default Register;