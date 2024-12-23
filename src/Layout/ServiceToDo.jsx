import { useState } from "react";


const ServiceToDo = () => {
    const [loading, setLoading] = useState(true)
    
    
    if(loading){
        return <div className="flex justify-center my-[300px]"><span className="loading loading-bars loading-lg"></span></div>
    }

    
    return (
        <div>
            
        </div>
    );
};

export default ServiceToDo;