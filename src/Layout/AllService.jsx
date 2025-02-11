import { useEffect, useState } from "react";
import ServiceCard from "../Components/ServiceCard";
import axios from "axios";
import { Helmet } from "react-helmet";


const AllService = () => {
    const [loading, setLoading] = useState(true)
    const [services, setServices] = useState([])
    const [search, setSearch] = useState('')
    // console.log(services)

    useEffect(()=>{
        setServices([])
        setLoading(true)
        axios.get(`https://electro-savvy-server-side.vercel.app/services?search=${search}`)
        .then(res =>{
            setServices(res.data)
            setLoading(false)
        })

    },[search])

    
    const handleAscendingService = () => {
        setLoading(true)
        const ascendingService = [...services].sort((a,b) => a.servicePrice - b.servicePrice)
        setServices(ascendingService)
        setLoading(false)
    }
    
    const handleDescendingService = () => {
        setLoading(true)
        const descendingService = [...services].sort((a,b) => b.servicePrice - a.servicePrice)
        setServices(descendingService)
        setLoading(false)
    }

    const handleSearch = (e) =>{
        setSearch(e.target.value)
    }


    return (
        <div className="min-h-[700px] ">
            <Helmet>
                <title>All Service || ElectroSavvy</title>
            </Helmet>
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-5 max-w-screen-2xl mx-auto ">
                <label className="input input-bordered flex items-center gap-2 mt-4 w-full max-w-xs md:max-w-lg mx-auto lg:mx-0">
                    <input onChange={handleSearch} type="text" className="grow" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                        <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                    </svg>
                </label>
                <div>
                    <button onClick={handleAscendingService} className="btn btn-primary">Price: Low-High</button>
                    <button onClick={handleDescendingService} className="btn btn-primary ml-3">Price: High-Low</button>
                </div>
            
            </div>
            <p className="text-center text-4xl font-bold my-7"  data-aos="zoom-in" data-aos-duration="1000">All Services</p>
            {
                loading && <div className="flex justify-center my-[300px]"><span className="loading loading-bars loading-lg"></span></div>
            }
            {
                !loading & services.length === 0 ?
                <div className="flex justify-center my-[300px] text-3xl font-bold">NO DATA FOUND</div>
                :
                <div className="max-w-screen-2xl mx-auto mb-20 grid grid-cols-1 lg:grid-cols-2 gap-7 px-6 lg:p-0">
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            }
        </div>
    );
};

export default AllService;