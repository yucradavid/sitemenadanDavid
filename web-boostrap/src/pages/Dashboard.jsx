import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Widget from '../components/Widget';

const Dashboard = () => {
    return (
        <MainLayout>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <Widget title="Sales" value="$10,000" />
                    </div>
                    <div className="col-lg-6 mb-4">
                        <Widget title="Orders" value="200" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <Widget title="Customers" value="500" />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Dashboard;
