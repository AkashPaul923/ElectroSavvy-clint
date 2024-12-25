import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import ManageServicesCard from "../Components/manageServicesCard";
import useAxiosSecure from "../Hooks/useAxiosSecure";


const ManageServices = () => {
    const { user } = useAuth()
    const [loading, setLoading] = useState(true)
    const [services , setServices] = useState([])
    const axiosSecure = useAxiosSecure()
    
    useEffect(()=>{
        setLoading(true)
        axiosSecure.get(`/manage-services?email=${user.email}`)
        .then(res =>{
            // console.log(res.data)
            setServices(res.data)
            setLoading(false)
        })
        .catch(()=>{
            setServices([])
            setLoading(false)
        })
    },[])
    
    if(loading){
        return <div className="flex justify-center my-[300px]"><span className="loading loading-bars loading-lg"></span></div>
    }


    return (
        <div className="p-6  min-h-[600px]">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-6">Manage Services</h1>
                {
                services.length === 0 ?
                <div className="flex justify-center my-[100px] text-2xl font-bold">You have not add any services yet.</div>
                :
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        services.map(service => <ManageServicesCard key={service._id} services={services} setServices={setServices}  service={service}></ManageServicesCard>)
                    }
                </div>
                }
            </div>
        </div>
    );
};

export default ManageServices;