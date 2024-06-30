import React, { useState } from 'react';

const Widget = ({ title, value, isPassword = false }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="card border-success h-100">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {isPassword && (
                    <>
                        {showPassword ? (
                            <p className="card-text">{value}</p>
                        ) : (
                            <p className="card-text">******</p>
                        )}
                        <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? 'Ocultar' : 'Mostrar'} contraseña
                        </button>
                    </>
                )}
                {!isPassword && (
                    <p className="card-text">{value}</p>
                )}
            </div>
        </div>
    );
};

export default Widget;
