import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MainLayout from '../layouts/MainLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../App.css'; // Asegúrate de importar los estilos personalizados

const Docente = () => {
    const navigate = useNavigate();
    const [docentes, setDocentes] = useState([]);

    useEffect(() => {
        const fetchDocentes = async () => {
            try {
                const response = await axios.get('http://localhost:82/docente');
                console.log('Datos de docentes:', response.data); // Verifica los datos en la consola
                setDocentes(response.data);
            } catch (error) {
                console.error('Error fetching docentes:', error);
            }
        };

        fetchDocentes();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:82/docente/${id}`);
            setDocentes(docentes.filter(docente => docente.id !== id));
            console.log(`Docente eliminado con éxito: ${id}`);
        } catch (error) {
            console.error('Error al eliminar docente:', error);
        }
    };

    const handleNew = () => {
        navigate('/docente/form');
    };

    return (
        <MainLayout>
            <div className="container-fluid mt-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="text-success">Docentes</h2>
                    <button className="btn btn-primary btn-custom" onClick={handleNew}>Nuevo</button>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre y Apellidos</th>
                                <th scope="col">Fecha de Nacimiento</th>
                                <th scope="col">Email</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Dirección</th>
                                <th scope="col">Especialidad</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {docentes.map(docente => (
                                <tr key={docente.id}>
                                    <td>{docente.id}</td>
                                    <td>{docente.nombreCompleto}</td>
                                    <td>{docente.fechaNacimiento}</td>
                                    <td>{docente.email}</td>
                                    <td>{docente.telefono}</td>
                                    <td>{docente.direccion}</td>
                                    <td>{docente.especialidad}</td>
                                    <td>
                                        <button
                                            className="action-btn ms-2"
                                            onClick={() => handleDelete(docente.id)}
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

export default Docente;