import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Expert = ({expert}) => {
    const {name,Img}=expert;
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
                    <Button variant="secondary">Learn more</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Expert;