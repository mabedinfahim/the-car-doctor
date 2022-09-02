import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container">
            <div className="row">
                <div className="col-5 mx-auto my-5">
                    <h2 className="text-center mb-5">Add a new service</h2>
                    <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("firstName", { required: true, maxLength: 20 })} />
                        <br />
                        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                        <br />
                        <input type="number" {...register("age", { min: 18, max: 99 })} />
                        <br />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;