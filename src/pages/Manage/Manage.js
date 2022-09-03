import React from 'react';
import useService from '../hook/useService';

const Manage = () => {
    const [services,setServices]=useService()
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h2>Manage your service items</h2>
                    {services.map(service=> <h2>{service.name}</h2>)}
                </div>
                <div className="col-6">
                    <h2>Manage your expert items</h2>
                </div>
            </div>
        </div>
    );
};

export default Manage;