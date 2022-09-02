import React from 'react';
import { useForm } from "react-hook-form";

const AddExpert = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url="http://localhost:5000/experts";
        fetch(url,{
            method: 'POST',
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    };
    return (
        <div className="container">
        <div className="row">
            <div className="col-10 col-md-8 col-lg-5 mx-auto my-5">
                <h2 className="text-center mb-5">Add a new expert</h2>
                <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                        <input required className="py-2  px-2" placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                        <br />
                        <input required className="py-2 px-2" placeholder="Photo url" type="text" {...register("Img")} />
                        <br />
                        <textarea required className="py-2 px-2" placeholder="Description" {...register("description")} />
                        <br />
                        <input required className="py-2 px-2" placeholder="Price" {...register("price")} />
                        <br />
                    <input value="Add expert" className="py-2 btn btn-dark" type="submit" />
                </form>
            </div>
        </div>
    </div>
    );
};

export default AddExpert;