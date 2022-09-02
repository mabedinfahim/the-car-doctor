import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url='http://localhost:5000/services'
        fetch(url,{
            method:'POST',
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>
            data.restore())
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 col-md-8 col-lg-5 mx-auto my-5">
                    <h2 className="text-center mb-5">Add a new service</h2>
                    <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                        <input required className="py-2  px-2" placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                        <br />
                        <textarea required className="py-2 px-2" placeholder="Description" {...register("description")} />
                        <br />
                        <input required className="py-2 px-2" placeholder="Price" {...register("price")} />
                        <br />
                        <input required className="py-2 px-2" placeholder="Photo url" type="text" {...register("img")} />
                        <br />
                        <input value="Add service" className="py-2 btn btn-dark" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;