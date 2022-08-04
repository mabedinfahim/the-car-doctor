import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import  Card  from 'react-bootstrap/Card';

const ExpertDetail = () => {
    const {id}=useParams();
    const [expert,setExpert]=useState([])
   

    useEffect(()=>{
        fetch("/experts.json")
        .then(res=>res.json())
        .then(data=>setExpert(data))
    })

    const expertDetails=expert?.find(data=>data?.id==id)
    console.log(expertDetails)
    return (
        <div className="d-grid col-5 mx-auto">
            <h4 className='py-5 text-center text-uppercase'>This is a service page</h4>
            <Card>
                <Card.Img variant="top" src={expertDetails?.Img} />
                <Card.Body>
                <Card.Title className="text-center">{expertDetails?.name}</Card.Title>
                <Card.Text>
                {expertDetails?.description}
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ExpertDetail;