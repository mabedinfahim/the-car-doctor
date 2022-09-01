import React, { useEffect, useState } from 'react';
import Service from '../../Home/Service/Service';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="container">
            <div className="py-5">
                <h2 className="text-center">Our Services</h2>
                <div style={{backgroundColor:'#212529',width:"180px",height:"2px",margin:"auto"}}></div>
            </div>
            <div className="row g-5 pb-5 pt-1">
            {services.map(data=><Service key={data._id} service={data}/>)}
        </div>
        </div>
    );
};

export default Services;