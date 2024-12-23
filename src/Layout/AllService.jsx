import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../Components/ServiceCard";


const AllService = () => {
    const [loading, setLoading] = useState(true)
    const [services, setServices] = useState([])
    const [search, setSearch] = useState('')
    // console.log(services)

    useEffect(()=>{
        setServices([])
        setLoading(true)
        axios.get(`http://localhost:5000/services?search=${search}`)
        .then(res =>{
            setServices(res.data)
            setLoading(false)
        })

    },[search])

    const handleSearch = (e) =>{
        setSearch(e.target.value)
    }


    return (
        <div className="min-h-[700px]">
            <label className="input input-bordered flex items-center gap-2 max-w-lg mx-auto">
                <input onChange={handleSearch} type="text" className="grow" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                    <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                </svg>
            </label>
            <p className="text-center text-4xl font-bold my-7">All Services</p>
            {
                loading && <div className="flex justify-center my-[300px]"><span className="loading loading-bars loading-lg"></span></div>
            }
            {
                !loading & services.length === 0 ?
                <div className="flex justify-center my-[300px] text-3xl font-bold">NO DATA FOUND</div>
                :
                <div className="max-w-5xl mx-auto grid grid-cols-1 gap-7 px-6 lg:p-0">
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            }
        </div>
    );
};

export default AllService;