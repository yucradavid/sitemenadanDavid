import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MainLayout from '../layouts/MainLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../App.css'; // Asegúrate de importar los estilos personalizados

const Curso = () => {
    const [cursos, setCursos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCursos = async () => {
            try {
                const response = await axios.get('http://localhost:82/asignatura');
                console.log('Datos de cursos:', response.data); // Verifica los datos en la consola
                setCursos(response.data);
            } catch (error) {
                console.error('Error fetching cursos:', error);
            }
        };
        fetchCursos();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:82/asignatura/${id}`);
            setCursos(cursos.filter(curso => curso.id !== id));
            console.log(`Curso eliminado con éxito: ${id}`);
        } catch (error) {
            console.error('Error al eliminar curso:', error);
        }
    };

    const handleNew = () => {
        navigate('/curso/form');
    };

    return (
        <MainLayout>
            <div className="container-fluid mt-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="text-success">Cursos</h2>
                    <button className="btn btn-primary btn-custom" onClick={handleNew}>Nuevo</button>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Curso</th>
                                <th scope="col">Horas</th>
                                <th scope="col">Docente</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cursos.map(curso => (
                                <tr key={curso.id}>
                                    <td>{curso.id}</td>
                                    <td>{curso.nombreCurso}</td>
                                    <td>{curso.horasAcademicas}</td>
                                    <td>{curso.detallesDocente.nombreCompleto}</td>
                                    <td>
                                        <button
                                            className="action-btn ms-2"
                                            onClick={() => handleDelete(curso.id)}
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

export default Curso;