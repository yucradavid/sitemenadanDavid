import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MainLayout from '../layouts/MainLayout';

const FormCurso = () => {
    const [nombreCurso, setNombreCurso] = useState('');
    const [horasAcademicas, setHorasAcademicas] = useState('');
    const [docentes, setDocentes] = useState([]);
    const [selectedDocente, setSelectedDocente] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDocentes = async () => {
            try {
                const response = await axios.get('http://localhost:82/docente');
                setDocentes(response.data);
            } catch (error) {
                console.error('Error al obtener los docentes:', error);
            }
        };

        fetchDocentes();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevoCurso = {
            nombreCurso: nombreCurso,
            horasAcademicas: horasAcademicas,
            docente_id: selectedDocente // Nombre correcto según lo esperado por el backend
        };

        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:82/asignatura', nuevoCurso);
            console.log('Curso creado:', response.data);
            setSuccessMessage('Curso creado correctamente.');
            setErrorMessage('');
            setTimeout(() => {
                navigate('/curso');
            }, 1000);
        } catch (error) {
            console.error('Error al crear curso:', error);
            setErrorMessage('Error al crear curso. Por favor, inténtalo de nuevo.');
            setSuccessMessage('');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCancel = () => {
        navigate('/curso');
    };

    return (
        <MainLayout>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card border-success">
                            <div className="card-body bg-dark text-light">
                                <h2 className="card-title text-success mb-4">Nuevo Curso</h2>
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
                                    <div className="mb-3">
                                        <label htmlFor="nombreCurso" className="form-label text-light">Nombre del Curso</label>
                                        <select
                                            className="form-select bg-dark text-light border-success"
                                            id="nombreCurso"
                                            value={nombreCurso}
                                            onChange={(e) => setNombreCurso(e.target.value)}
                                            required
                                        >
                                            <option value="">Selecciona un curso...</option>
                                            <option value="Matematicas">Matemáticas</option>
                                            <option value="Comunicacion">Comunicación</option>
                                            <option value="EdFisica">Ed. Física</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="horasAcademicas" className="form-label text-light">Horas Académicas</label>
                                        <select
                                            className="form-select bg-dark text-light border-success"
                                            id="horasAcademicas"
                                            value={horasAcademicas}
                                            onChange={(e) => setHorasAcademicas(e.target.value)}
                                            required
                                        >
                                            <option value="">Selecciona horas...</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="docente" className="form-label text-light">Docente</label>
                                        <select
                                            className="form-select bg-dark text-light border-success"
                                            id="docente"
                                            value={selectedDocente}
                                            onChange={(e) => setSelectedDocente(e.target.value)}
                                            required
                                        >
                                            <option value="">Selecciona un docente...</option>
                                            {docentes.map(docente => (
                                                <option key={docente.id} value={docente.id}>
                                                    {docente.nombreCompleto}
                                                </option>
                                            ))}
                                        </select>
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

export default FormCurso;