import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MainLayout from '../layouts/MainLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../App.css'; // Asegúrate de importar los estilos personalizados

const RegistroAsistencia = () => {
    const [registros, setRegistros] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRegistros = async () => {
            try {
                const response = await axios.get('http://localhost:82/registroasistencia');
                console.log('Datos de registros de asistencia:', response.data);
                setRegistros(response.data);
            } catch (error) {
                console.error('Error al obtener los registros de asistencia:', error);
            }
        };

        fetchRegistros();
    }, []);

    const handleEliminarRegistro = async (id) => {
        try {
            await axios.delete(`http://localhost:82/registroasistencia/${id}`);
            setRegistros(registros.filter(registro => registro.id !== id));
            console.log(`Registro de asistencia eliminado con éxito: ${id}`);
        } catch (error) {
            console.error('Error al eliminar registro de asistencia:', error);
        }
    };

    const handleNuevoRegistro = () => {
        navigate('/asistencia');
    };

    const handleChangeAsistencia = async (id, newValue) => {
        try {
            // Aquí podrías implementar la lógica para actualizar el estado de asistencia en el backend
            console.log(`Registro ${id} actualizado a ${newValue ? 'asistió' : 'no asistió'}`);

            // Actualizar localmente el estado de asistencia en la UI
            const updatedRegistros = registros.map(registro =>
                registro.id === id ? { ...registro, asistencia: newValue } : registro
            );
            setRegistros(updatedRegistros);
        } catch (error) {
            console.error('Error al actualizar estado de asistencia:', error);
        }
    };

    const handleEnviarRegistros = async () => {
        try {
            // Filtra los registros que están marcados como asistidos
            const registrosSeleccionados = registros.filter(registro => registro.asistencia);

            // Aquí podrías enviar registrosSeleccionados a tu backend como un arreglo JSON
            await axios.post('http://localhost:82/enviar-registros', registrosSeleccionados);

            console.log('Registros enviados con éxito:', registrosSeleccionados);
        } catch (error) {
            console.error('Error al enviar registros:', error);
        }
    };

    return (
        <MainLayout>
            <div className="container-fluid mt-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="text-success">Registros de Asistencia</h2>
                    <div>
                        <button className="btn btn-primary btn-custom me-2" onClick={handleNuevoRegistro}>Nuevo</button>
                        <button className="btn btn-success btn-custom" onClick={handleEnviarRegistros}>Enviar Registros</button>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Observaciones</th>
                            <th scope="col">Estudiante</th>
                            <th scope="col">Curso ID</th>
                            <th scope="col">Asistencia</th>
                            <th scope="col">Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {registros.map(registro => (
                            <tr key={registro.id}>
                                <td>{registro.id}</td>
                                <td>{registro.fecha}</td>
                                <td>{registro.estado}</td>
                                <td>{registro.observaciones}</td>
                                <td>{registro.estudianteDto ? registro.estudianteDto.nombre : 'Cargando...'}</td> {/* Mostrar el nombre del estudiante si está disponible */}
                                <td>{registro.detallesDocente ? registro.detallesDocente.nombreCurso : 'Cargando...'}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={registro.asistencia}
                                        onChange={(e) => handleChangeAsistencia(registro.id, e.target.checked)}
                                    />
                                </td>
                                <td>
                                    <button
                                        className="action-btn ms-2"
                                        onClick={() => handleEliminarRegistro(registro.id)}
                                    >
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </MainLayout>
    );
};

export default RegistroAsistencia;
