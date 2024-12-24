import axios from 'axios';
import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { RxUpdate } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageServicesCard = ({service , services, setServices }) => {
    const {_id,serviceName, serviceImage, servicePrice, ServiceArea , description} = service

    const handleDeleteService = () =>{
        console.log('delete btn clicked')
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if(result.isConfirmed) {
                axios.delete(`http://localhost:5000/services/${_id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        })
                        const newServices = services.filter(service => service._id !== _id)
                        setServices(newServices)
                    }
                })
            }
        });
    }
    return (
        <div class="card bg-base-100 image-full shadow-xl">
            <figure>
                <img src={serviceImage} alt={serviceName} />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{serviceName}</h2>
                <p>{description}</p>
                <p>Price: {servicePrice} BDT</p>
                <p>Service Area: {ServiceArea}</p>
                <div class="card-actions justify-between">
                    <button onClick={handleDeleteService} class="btn btn-sm btn-error"><RiDeleteBinLine /></button>
                    <Link to={`/update-service/${_id}`} class="btn btn-sm btn-warning"><RxUpdate /></Link>
                </div>
            </div>
        </div>
    );
};

export default ManageServicesCard;