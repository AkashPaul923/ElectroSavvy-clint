import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";


const UpdateService = () => {
    const [service , setService] = useState('')
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const {_id, serviceName, serviceImage, servicePrice, ServiceArea , description} = service


    useEffect(()=>{
        setLoading(true)
        axiosSecure.get(`/service-detail/${id}`)
        .then(res =>{
            // console.log(res.data)
            setService(res.data)
            setLoading(false)
        })
    },[])

    const handleUpdateSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const updateServiceData = Object.fromEntries(formData.entries())
        // console.log(updateServiceData)
        axiosSecure.patch(`/update-service/${_id}`, updateServiceData)
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


    if(loading){
        return <div className="flex justify-center my-[300px]"><span className="loading loading-bars loading-lg"></span></div>
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