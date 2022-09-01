import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import  Card  from 'react-bootstrap/Card';

const ExpertDetail = () => {
    const {id}=useParams();
    const [expert,setExpert]=useState({})
   

    useEffect(()=>{
        const url=`http://localhost:5000/expert/${id}`;
        console.log(url)
        fetch(url)
        .then(res=>res.json())
        .then(data=>setExpert(data))
    })

    return (
        <div className="d-grid col-5 mx-auto">
            <h4 className='py-5 text-center text-uppercase'>This is a service page</h4>
            <Card>
                <Card.Img variant="top" src={expert?.Img} />
                <Card.Body>
                <Card.Title className="text-center">{expert?.name}</Card.Title>
                <Card.Text>
                {expert?.description}
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ExpertDetail;