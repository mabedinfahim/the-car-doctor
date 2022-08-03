import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const refEmail=useRef("");
    const refPassword=useRef("");
    const refConfirmPassword=useRef("");

    const [passError,setpassError]=useState("")

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const handelWithSubmit=(event)=>{
        event.preventDefault();
        const email=refEmail.current.value;
        const password=refPassword.current.value;
        const confirmPassword=refConfirmPassword.current.value;

        if(password !== confirmPassword){
            setpassError("Your password dose not match")
            return;
        }
        setpassError(" ")
        createUserWithEmailAndPassword(email,password);

        
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 col-md-8 col-lg-5 mx-auto border px-5 py-3 shadow rounded my-5">
                <Form onSubmit={handelWithSubmit}>
                    <h4 className="text-center mb-4">Sign Up</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={refEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={refPassword} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control ref={refConfirmPassword} type="password" placeholder="Password" />
                    <p className="text-danger">{passError}</p>
                </Form.Group>
                <div className="d-grid justify-content-center align-items-center">
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </div>
                <p className="text-center pt-3">Already have an account? <Link to="/sign-in">Sign-In</Link> </p>
            </Form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;