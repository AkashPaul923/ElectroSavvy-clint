
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import TodoServicesCard from "../Components/TodoServicesCard";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";


const ServiceToDo = () => {
    const [loading, setLoading] = useState(true)
    const [toDoServices, setToDoServices] = useState([])
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()


    useEffect(()=>{
        setLoading(true)
        axiosSecure.get(`/to-do-services?email=${user.email}`)
        .then(res => {
            // console.log(res.data)
            setToDoServices(res.data)
            setLoading(false)
        })
        .catch(()=>{
            setToDoServices([])
            setLoading(false)
        })
    },[])
    

    
    return (
        <div className="p-6  min-h-[600px]">
            <Helmet>
                <title>Service To Do || ElectroSavvy</title>
            </Helmet>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-6">Services To Do</h1>
                {
                loading ? <div className="flex justify-center my-[300px]"><span className="loading loading-bars loading-lg"></span></div>
                :
                toDoServices.length === 0 ?
                <div className="flex justify-center my-[100px] text-2xl font-bold">No one has booked any services yet.</div>
                :
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        toDoServices.map(toDoService => <TodoServicesCard key={toDoService._id} toDoService={toDoService}></TodoServicesCard>)
                    }
                </div>
                }
            </div>
        </div>
    );
};

export default ServiceToDo;