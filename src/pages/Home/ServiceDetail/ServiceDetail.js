import React, { useEffect, useState } from 'react';
import  Card  from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {id}=useParams()
    const [service,setService]=useState({})
    useEffect(()=>{
        const url =`http://localhost:5000/service/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setService(data)
        })
    },[])

  
    return (
        <div className="d-grid col-md-6 col-lg-6 col-11 mx-auto">
            <h4 className='py-5 text-center text-uppercase'>This is a Service Details page</h4>
            <Card>
                <Card.Img variant="top" src={service?.img} />
                <Card.Body>
                <Card.Title className="text-center">{service?.name}</Card.Title>
                <Card.Text>
                {service?.description}
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceDetail;