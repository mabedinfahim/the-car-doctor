import React from 'react';
import img from '../images/verifyemail.png';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
    const [sendEmailVerification,user] = useSendEmailVerification(
        auth
      );
      let navigate = useNavigate();
      let location = useLocation();
      let from = location.state?.from?.pathname || "/home";
    return (
        <div className="container">
            <div className="row my-5">
            <div className="col-5 mx-auto my-5 border px-5">
            <h2 className="text-success text-center">Verify your email</h2>
                <h5 className="text-danger text-center">Otherwise you will not be able to access your query path</h5>
                <img className="img-fluid" src={img} style={{width: '100%', height: '60%'}} alt="" srcset="" />
                <div className="d-flex justify-content-center">
                    <button  onClick={async () => {
          await sendEmailVerification();
          alert('Sent email');
          if(user.emailVerified){
            navigate(from, { replace: true })
          }
        }} className="btn btn-outline-success mt-5">Send verify email again</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default VerifyEmail;