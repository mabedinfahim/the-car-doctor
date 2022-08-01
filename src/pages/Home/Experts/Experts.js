import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert'

const experts=[
    {   
        "id":1,
        "name":"Will Smith",
        "Img":expert1
    },
    {   
        "id":2,
        "name":"Rocky Dewan",
        "Img":expert2
    },
    {   
        "id":3,
        "name":"Ramzan Ali",
        "Img":expert3
    },
    {   
        "id":4,
        "name":"Rakib Hassan",
        "Img":expert4
    },
    {   
        "id":5,
        "name":"Sumel Hassan",
        "Img":expert5
    },
    {   
        "id":6,
        "name":"Fahima Abedin",
        "Img":expert6
    },
]

const Experts = () => {
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