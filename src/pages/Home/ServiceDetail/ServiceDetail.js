import React, { useEffect, useState } from 'react';
import  Card  from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {id}=useParams()
    const [service,setService]=useState([])
    useEffect(()=>{
        fetch("/services.json")
        .then(res=>res.json())
        .then(data=>{
            setService(data)
        })
    },[])

    const serviceDetails=service?.find(data=>data.id ==id)
    console.log(serviceDetails)
    
    
   
    return (
        <div className="d-grid col-md-6 col-lg-6 col-11 mx-auto">
            <h4 className='py-5 text-center text-uppercase'>This is a Service Details page</h4>
            <Card>
                <Card.Img variant="top" src={serviceDetails?.img} />
                <Card.Body>
                <Card.Title className="text-center">{serviceDetails?.name}</Card.Title>
                <Card.Text>
                {serviceDetails?.description}
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceDetail;