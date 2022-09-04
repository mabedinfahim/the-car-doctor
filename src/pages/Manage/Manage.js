import React from 'react';
import useExpert from '../hook/useExpert';
import useService from '../hook/useService';

const Manage = () => {
    const [services,setServices]=useService();
    const [experts,setExperts]=useExpert()
    const manageService=(id)=>{
        const url=`http://localhost:5000/service/${id}`;
        fetch(url,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            const remaining=services.filter(service=>service._id!==id)
            setServices(remaining)
        })
    }
    const manageExpert=(id)=>{
        const url=`http://localhost:5000/expert/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            const remaining=experts.filter(expert=>expert._id!==id)
            setExperts(remaining)
        })
    }
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-6 py-5">
                    <h2 className="mb-5">Manage your service items</h2>
                    {services.map(service=> <h4 key={service._id}>{service.name} <button onClick={()=>manageService(service._id)}>X</button> </h4>)}
                </div>
                <div className="col-6 py-5">
                    <h2 className="pb-5">Manage your expert items</h2>
                    {experts.map(expert=> <h4 key={expert._id}>{expert.name} <button onClick={()=>manageExpert(expert._id)}>X</button> </h4>)}
                </div>
            </div>
        </div>
    );
};

export default Manage;