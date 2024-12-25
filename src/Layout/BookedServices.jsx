import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";


const BookedServices = () => {
    const {user} = useAuth()
    const [loading, setLoading] = useState(true)
    const [bookedServices , setBookedServices] = useState([])
    const axiosSecure = useAxiosSecure()

    useEffect(()=>{
        setLoading(true)
        axiosSecure.get(`/booked-services?email=${user.email}`)
        .then(res =>{
            // console.log(res.data)
            setBookedServices(res.data)
            setLoading(false)
        })
        .catch(()=>{
            setBookedServices([])
            setLoading(false)
        })
    },[])

    const handleBookedDelete = (id) => {
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
                axiosSecure.delete(`/booked-services/${id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your booked service has been deleted.",
                            icon: "success"
                        })
                        const newBookedServices = bookedServices.filter(bookedService => bookedService._id !== id)
                        setBookedServices(newBookedServices)
                    }
                })
            }
        });
    }
    
    
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
                            <th className="py-2 px-4">Service Taking Date</th>
                            <th className="py-2 px-4">Status</th>
                            <th className="py-2 px-4">Action</th>
                        </tr>
                        {bookedServices.map((bookedService, index) => (
                            <tr key={bookedService._id} className="hover:bg-base-200">
                                <td className="py-2 px-4 ">{index + 1}</td>
                                <td className="py-2 px-4">{bookedService.serviceName}</td>
                                <td className="py-2 px-4 ">{bookedService.servicePrice} BDT</td>
                                <td className="py-2 px-4 ">{bookedService.serviceProviderName}</td>
                                <td className="py-2 px-4 ">{bookedService.serviceTakingDate}</td>
                                <td
                                    className={`py-2 px-4 font-semibold ${
                                    bookedService.status === "Pending"
                                    ? "text-red-500"
                                    : bookedService.status === "Completed"
                                    ? "text-green-500"
                                    : "text-yellow-500"
                                    }`}
                                >
                                {bookedService.status}
                                </td>
                                <td className="py-2 px-4 text-center">
                                    <button onClick={()=> handleBookedDelete(bookedService._id)} className="btn btn-error btn-sm flex items-center space-x-1"><FaTrash /></button>
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