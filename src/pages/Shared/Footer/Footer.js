import React from 'react';
import logo from '../../../images/logo.png'

const Footer = () => {
    const today=new Date();
    const year=today.getFullYear();
    return (
        <div className="py-5 mt-5" style={{backgroundColor:"#212529",height:"60px"}}>
            <h6 className="text-white text-center">Copyright &copy; {year} <img style={{width:"80px",height:"30px"}} src={logo} alt="logo"/></h6>
        </div>
    );
};

export default Footer;