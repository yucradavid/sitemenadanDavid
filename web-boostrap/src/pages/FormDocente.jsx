import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MainLayout from '../layouts/MainLayout';

const FormDocente = () => {
    const [nombreCompleto, setNombreCompleto] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [especialidad, setEspecialidad] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Estado para controlar la carga
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevoDocente = {
            nombreCompleto: nombreCompleto,
            fechaNacimiento: fechaNacimiento,
            direccion: direccion,
            telefono: telefono,
            email: email,
            especialidad: especialidad
        };

        setIsLoading(true); // Activar el estado de carga

        try {
            // Mostrar mensaje de "Procesando" por 1 segundo
            setTimeout(async () => {
                const response = await axios.post('http://localhost:82/docente', nuevoDocente);
                console.log('Docente creado:', response.data);
                setSuccessMessage('Docente creado correctamente.');
                setErrorMessage('');
                // Mostrar mensaje de éxito por 1 segundo antes de redirigir
                setTimeout(() => {
                    navigate('/docente');
                }, 1000);
            }, 1000); // Esperar 1 segundo antes de enviar la solicitud
        } catch (error) {
            console.error('Error al crear docente:', error);
            setErrorMessage('Error al crear docente. Por favor, inténtalo de nuevo.');
            setSuccessMessage('');
        } finally {
            // Desactivar el estado de carga después de la operación
            setIsLoading(false);
        }
    };

    const handleCancel = () => {
        navigate('/docente');
    };

    const handleTelefonoChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Solo permite dígitos
        setTelefono(value);
    };

    return (
        <MainLayout>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card border-success">
                            <div className="card-body bg-dark text-light">
                                <h2 className="card-title text-success mb-4">Nuevo Docente</h2>
                                {isLoading && (
                                    <div className="alert alert-info" role="alert">
                                        Procesando... por favor espera.
                                    </div>
                                )}
                                {successMessage && (
                                    <div className="alert alert-success" role="alert">
                                        {successMessage}
                                    </div>
                                )}
                                {errorMessage && (
                                    <div className="alert alert-danger" role="alert">
                                        {errorMessage}
                                    </div>
                                )}
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="nombres" className="form-label text-light">Nombres y Apellidos</label>
                                            <input
                                                type="text"
                                                className="form-control border-success"
                                                id="nombres"
                                                value={nombreCompleto}
                                                onChange={(e) => setNombreCompleto(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="fechaNacimiento" className="form-label text-light">Fecha de Nacimiento</label>
                                            <input
                                                type="date"
                                                className="form-control border-success"
                                                id="fechaNacimiento"
                                                value={fechaNacimiento}
                                                onChange={(e) => setFechaNacimiento(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="direccion" className="form-label text-light">Dirección</label>
                                            <input
                                                type="text"
                                                className="form-control border-success"
                                                id="direccion"
                                                value={direccion}
                                                onChange={(e) => setDireccion(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="telefono" className="form-label text-light">Teléfono</label>
                                            <input
                                                type="text"
                                                className="form-control border-success"
                                                id="telefono"
                                                value={telefono}
                                                onChange={handleTelefonoChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="email" className="form-label text-light">E-mail</label>
                                            <input
                                                type="email"
                                                className="form-control border-success"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="especialidad" className="form-label text-light">Especialidad</label>
                                            <input
                                                type="text"
                                                className="form-control border-success"
                                                id="especialidad"
                                                value={especialidad}
                                                onChange={(e) => setEspecialidad(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mt-4">
                                        <button type="button" className="btn btn-danger me-2" onClick={handleCancel}>Cancelar</button>
                                        <button type="submit" className="btn btn-success">Guardar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default FormDocente;