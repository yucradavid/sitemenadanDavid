import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Estado de carga
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Activar estado de carga al enviar el formulario
        setAlertMessage('Autenticando...');

        try {
            // Simulación de tiempo de espera para mostrar "Autenticando..."
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Lógica de inicio de sesión
            const response = await fetch('http://localhost:82/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName, password }),
            });

            if (response.ok) {
                const data = await response.json();
                const token = data.token;

                // Guardar el token en localStorage para uso posterior
                localStorage.setItem('token', token);

                // Mostrar la alerta de bienvenida por unos segundos
                setAlertMessage('¡Bienvenido!');
                setTimeout(() => {
                    setAlertMessage('');
                    // Redirigir al dashboard
                    navigate('/dashboard');
                }, 1000); // 1000 milisegundos = 1 segundo
            } else {
                setAlertMessage('Error de inicio de sesión');
            }
        } catch (error) {
            console.error('Error:', error);
            setAlertMessage('Ocurrió un error durante el inicio de sesión');
        } finally {
            setIsLoading(false); // Desactivar estado de carga al finalizar
        }
    };

    document.body.style.backgroundColor = 'black';

    return (
        <div className="container mt-5 d-flex justify-content-center align-items-center shadow-lg" style={{ height: '93vh', borderRadius: '15px' }}>
            <div className="card border-success" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '15px', overflow: 'hidden', width: '100%', maxWidth: '400px' }}>
                <div className="card-body" style={{ padding: '30px' }}>
                    <h2 className="card-title text-white text-center mb-4">Login</h2>
                    {alertMessage && (
                        <div className="alert alert-success" role="alert">
                            {alertMessage}
                        </div>
                    )}
                    {isLoading && (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-light" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label text-white">Username</label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control border-success shadow-sm"
                                    id="username"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white' }}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label text-white">Password</label>
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
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-success">Login</button>
                        </div>
                    </form>
                    <p className="mt-3 text-center text-white">¿No tienes una cuenta? <Link to="/register" className="register-link">Regístrate aquí</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
