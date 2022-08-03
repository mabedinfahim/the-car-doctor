import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom'

const Service = ({service}) => {
  const {id,name,price,description,img} = service;
  const navigate=useNavigate()
  const serviceDetails=()=>{
    navigate(`service/${id}`)
  }
    return (
      <div className="col-sm-12 col-md-6 col-lg-4">
          <Card >
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              <Card.Text>Taka: {price}</Card.Text>
              <Button onClick={(id)=>serviceDetails(id)} variant='secondary'>Learn More</Button>
            </Card.Body>
          </Card>
      </div>
    );
};

export default Service;