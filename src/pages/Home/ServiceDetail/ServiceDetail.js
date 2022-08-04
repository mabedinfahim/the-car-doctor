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
        <div className="d-grid col-5 mx-auto">
            <h1 className='py-5 text-center'>This is a service page</h1>
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