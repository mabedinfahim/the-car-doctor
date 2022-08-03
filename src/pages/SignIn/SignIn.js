import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'


const SignIn = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 col-md-8 col-lg-5 mx-auto border px-5 py-3 shadow rounded my-5">
                <Form>
                    <h4 className="text-center mb-4">Sign In</h4>
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
                <div className="d-grid justify-content-center align-items-center">
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </div>
                <p className="text-center pt-3">New to the car doctor? <Link to="/sign-up">Sign-Up</Link> </p>
            </Form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;