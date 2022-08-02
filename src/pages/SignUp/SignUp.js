import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignUp = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 col-md-8 col-lg-4 mx-auto border px-5 py-3 shadow rounded my-5">
                <Form>
                    <h4 className="text-center mb-4">Sign Up</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-grid justify-content-center align-items-center">
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
                </div>
            </Form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;