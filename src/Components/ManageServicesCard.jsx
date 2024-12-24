import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { RxUpdate } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const ManageServicesCard = ({service}) => {
    const {_id,serviceName, serviceImage, servicePrice, ServiceArea , description} = service
    return (
        <div class="card bg-base-100 image-full shadow-xl">
            <figure>
                <img src={serviceImage} alt={serviceName} />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{serviceName}</h2>
                <p>{description}</p>
                <p>Price: {servicePrice}</p>
                <p>Service Area: {ServiceArea}</p>
                <div class="card-actions justify-between">
                    <button class="btn btn-sm btn-accent"><RiDeleteBinLine /></button>
                    <Link to={`/update-service/${_id}`} class="btn btn-sm btn-accent"><RxUpdate /></Link>
                </div>
            </div>
        </div>
    );
};

export default ManageServicesCard;