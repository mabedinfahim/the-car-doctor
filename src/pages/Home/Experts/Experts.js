import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert'



const Experts = () => {
    const [experts,setExperts]=useState([])
    useEffect(()=>{
        fetch("/experts.json")
        .then(res=>res.json())
        .then(data=>setExperts(data))
    },[])
    return (
        <div className="container">
            <div className="my-5">
                <h2 className="text-center">Our Experts</h2>
                <div className="" style={{width:"170px",height:'2px',backgroundColor:'#212529',margin:"auto"}}></div>
            </div>
            <div className="row">
                {
                experts.map(expert=><Expert key={expert.id} expert={expert}/>) 
                }
            </div>
            
        </div>
    );
};

export default Experts;