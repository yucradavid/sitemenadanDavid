import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MainLayout from '../layouts/MainLayout';

const FormMatricula = () => {
    const [estudiante, setEstudiante] = useState('');
    const [estado, setEstado] = useState('');
    const [fechaMatricula, setFechaMatricula] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const nuevaMatricula = {
            estudianteId: estudiante,
            estado: estado,
            fechaMatricula: fechaMatricula
        };

        try {
            const response = await axios.post('http://localhost:82/matriculas', nuevaMatricula);
            console.log('Matrícula creada:', response.data);
            navigate('/matricula');
        } catch (error) {
            console.error('Error al crear matrícula:', error);
            // Aquí puedes manejar el error de acuerdo a tus necesidades
        }
    };

    const handleCancel = () => {
        navigate('/matricula');
    };

    return (
        <MainLayout>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="card border-success">
                            <div className="card-body bg-dark text-light">
                                <h2 className="card-title text-success mb-4">Nueva Matrícula</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="estudiante" className="form-label text-light">Estudiante</label>
                                        <input
                                            type="text"
                                            className="form-control border-success"
                                            id="estudiante"
                                            value={estudiante}
                                            onChange={(e) => setEstudiante(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="estado" className="form-label text-light">Estado</label>
                                        <input
                                            type="text"
                                            className="form-control border-success"
                                            id="estado"
                                            value={estado}
                                            onChange={(e) => setEstado(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="fechaMatricula" className="form-label text-light">Fecha de Matrícula</label>
                                        <input
                                            type="date"
                                            className="form-control border-success"
                                            id="fechaMatricula"
                                            value={fechaMatricula}
                                            onChange={(e) => setFechaMatricula(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                        <button type="button" className="btn btn-danger" onClick={handleCancel}>Cancelar</button>
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

export default FormMatricula;
