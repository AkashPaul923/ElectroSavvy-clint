import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { FaTrash } from "react-icons/fa";


const BookedServices = () => {
    const {user} = useAuth()
    const [loading, setLoading] = useState(true)
    const [bookedServices , setBookedServices] = useState([])
    const { serviceImage, serviceName, servicePrice, serviceProviderName, status} = bookedServices

    useEffect(()=>{
        setLoading(true)
        axios.get(`http://localhost:5000/booked-services?email=${user.email}`)
        .then(res =>{
            console.log(res.data)
            setBookedServices(res.data)
            setLoading(false)
        })
    },[])
    
    
    if(loading){
        return <div className="flex justify-center my-[300px]"><span className="loading loading-bars loading-lg"></span></div>
    }

    return (
        <div className="p-6  min-h-[600px]">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-6">Booked Services</h1>
                {
                bookedServices.length === 0 ?
                <div className="flex justify-center my-[100px] text-2xl font-bold">You have not booked any services yet.</div>
                :
                <div className="overflow-x-auto">
                    <table className="table w-full border-2 shadow-lg rounded-lg">
                        <tr className="bg-base-300">
                            <th className="py-2 px-4">Sl no.</th>
                            <th className="py-2 px-4">Service Name</th>
                            <th className="py-2 px-4">Price</th>
                            <th className="py-2 px-4">Provider</th>
                            <th className="py-2 px-4">Status</th>
                            <th className="py-2 px-4">Action</th>
                        </tr>
                        {bookedServices.map((bookedService, index) => (
                            <tr key={bookedService._id} className="hover:bg-base-200">
                                <td className="py-2 px-4 ">{index + 1}</td>
                                <td className="py-2 px-4">{bookedService.serviceName}</td>
                                <td className="py-2 px-4 ">{bookedService.servicePrice} BDT</td>
                                <td className="py-2 px-4 ">{bookedService.serviceProviderName}</td>
                                <td
                                    className={`py-2 px-4 font-semibold ${
                                    status === "Pending"
                                    ? "text-yellow-500"
                                    : status === "Completed"
                                    ? "text-green-500"
                                    : "text-red-500"
                                    }`}
                                >
                                {bookedService.status}
                                </td>
                                <td className="py-2 px-4 text-center">
                                    <button  className="btn btn-error btn-sm flex items-center space-x-1">
                                    <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
                }
            </div>
        </div>
    );
};

export default BookedServices;