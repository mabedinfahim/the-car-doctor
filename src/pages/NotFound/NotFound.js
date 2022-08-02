import React from 'react';

const NotFound = () => {
    return (
       <div style={{height: '80vh'}} className="d-grid justify-content-center align-content-center">
         <div className="bg-dark px-5 py-3 text-white text-center rounded">
            <h2>404</h2>
            <h5>Oops!!</h5>
            <h6>Page Does Not Exist</h6>
        </div>
       </div>
    );
};

export default NotFound;