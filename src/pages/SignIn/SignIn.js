import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import auth from '../../firebase.init';


const SignIn = () => {
    const refEmail=useRef("");
    const refPassword=useRef("");

    const [
        signInWithEmailAndPassword,user
      ] = useSignInWithEmailAndPassword(auth);

      let navigate = useNavigate();
      let location = useLocation();
      let from = location.state?.from?.pathname || "/home";

      if(user){
        navigate(from, { replace: true })
      }

    const handelWithSubmit=event=>{
        event.preventDefault();
        const email=refEmail.current.value;
        const password=refPassword.current.value;
        signInWithEmailAndPassword(email, password);   
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 col-md-8 col-lg-5 mx-auto border px-5 py-3 shadow rounded my-5">
                <Form onSubmit={handelWithSubmit}>
                    <h4 className="text-center mb-4">Sign In</h4>
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