import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Expert = ({expert}) => {
    const {id,name,Img}=expert;
    const navigate=useNavigate()

    const expertDetails=(id)=>{
        navigate(`/expert/${id}`)
    }
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mx-auto">
            <Card>
                <Card.Img variant="top" src={Img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button onClick={()=>expertDetails(id)} variant="secondary">Expert Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Expert;