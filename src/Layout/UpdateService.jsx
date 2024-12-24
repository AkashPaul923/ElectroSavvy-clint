import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateService = () => {
    const service = useLoaderData()
    const navigate = useNavigate()
    const {_id, serviceName, serviceImage, servicePrice, ServiceArea , description} = service

    const handleUpdateSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const updateServiceData = Object.fromEntries(formData.entries())
        // console.log(updateServiceData)
        axios.patch(`http://localhost:5000/update-service/${_id}`, updateServiceData)
        .then(res => {
            // console.log(res.data)
            if(res.data.modifiedCount > 0 ){
                Swal.fire({
                    title: `SuccessFully Updated!`,
                    icon: "success"
                });
                navigate('/manage-services')
            }
        })
    }
    return (
    <div>
        <div className="w-full max-w-md mx-auto my-20  rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Update service</h2>
            <form onSubmit={handleUpdateSubmit}>
                <div className="mb-4">
                    <label  className="block font-bold mb-2">Service Name</label>
                    <input type="text" defaultValue={serviceName} name="serviceName" className="input input-bordered w-full" placeholder="Enter service name" required/>
                </div>
                <div className="mb-4">
                    <label  className="block font-bold mb-2">Service Photo URL</label>
                    <input type="URL" defaultValue={serviceImage} name="serviceImage" className="input input-bordered w-full" placeholder="Enter service image URL" required/>
                </div>
                <div className="mb-4">
                    <label  className="block font-bold mb-2">Service Price</label>
                    <input type="number" defaultValue={servicePrice} name="servicePrice" className="input input-bordered w-full" placeholder="Enter service price" required/>
                </div>
                <div className="mb-4">
                    <label  className="block font-bold mb-2">Service Area</label>
                    <input type="text" defaultValue={ServiceArea} name="ServiceArea" className="input input-bordered w-full" placeholder="Enter service area" required/>
                </div>
                <div className="mb-4">
                    <label  className="block font-bold mb-2">Description</label>
                    <textarea defaultValue={description} name="description" className="input input-bordered w-full" required/>
                </div>
                <button type="submit" className="btn btn-primary w-full font-bold py-2 rounded">Update Service</button>
            </form>
        </div>    
    </div>
    );
};

export default UpdateService;