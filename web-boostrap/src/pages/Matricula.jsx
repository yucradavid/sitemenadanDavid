import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../App.css'; // Asegúrate de importar los estilos personalizados

const Matricula = () => {
    const navigate = useNavigate();

    // Simulated data for the table
    const data = [
        { id: 1, first: 'Mark', last: 'Otto', handle: '@mdo' },
        { id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat' },
        { id: 3, first: 'Larry the Bird', last: 'Bird', handle: '@twitter' },
    ];

    const handleEdit = (id) => {
        // Handle edit action
        console.log(`Edit item with id: ${id}`);
    };

    const handleDelete = (id) => {
        // Handle delete action
        console.log(`Delete item with id: ${id}`);
    };

    const handleNew = () => {
        navigate('/matricula/form');
    };

    return (
        <MainLayout>
            <div className="container mt-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="text-success">Matrícula</h2>
                    <button className="btn btn-primary btn-custom" onClick={handleNew}>New</button>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped-columns ">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.first}</td>
                                    <td>{item.last}</td>
                                    <td>{item.handle}</td>
                                    <td>
                                        <button
                                            className="action-btn"
                                            onClick={() => handleEdit(item.id)}
                                        >
                                            <FontAwesomeIcon icon={faEdit} />
                                        </button>
                                        <button
                                            className="action-btn ms-2"
                                            onClick={() => handleDelete(item.id)}
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

export default Matricula;