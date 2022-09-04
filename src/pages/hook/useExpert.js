import React, { useEffect, useState } from 'react';

const useExpert = () => {
    const [experts,setExperts] =useState([])
    useEffect(()=>{
        const url =`http://localhost:5000/experts`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setExperts(data))
    },[])
    return [experts,setExperts]
};

export default useExpert;