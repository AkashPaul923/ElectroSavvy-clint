import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import ManageServicesCard from "../Components/manageServicesCard";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";


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



    return (
        <div className="p-6  min-h-[600px]">
            <Helmet>
                <title>Manage Service || ElectroSavvy</title>
            </Helmet>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-6"  data-aos="zoom-in" data-aos-duration="1000">Manage Services</h1>
                {
                loading ? <div className="flex justify-center my-[300px]"><span className="loading loading-bars loading-lg"></span></div>
                :
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