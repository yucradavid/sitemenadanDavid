import React from 'react';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
    return (
        <div className="d-flex">
            <Navbar />
            <div className="container-fluid p-0 bg-dark" style={{ margin: 0, minHeight: '100vh', overflowX: 'hidden' }}>
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4 mx-auto" style={{ margin: 0, width: '100%', minHeight: '100%' }}>
                    {children}
                </main>
            </div>
        </div>
    );
}

export default MainLayout;
