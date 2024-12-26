import { Link } from "react-router-dom";


const TrendingServiceCard = ({tService}) => {
    const {_id,serviceImage, serviceName, servicePrice , serviceProviderImage , serviceProviderName, ServiceArea , description} = tService
    return (
        <div className=" bg-base-200 p-5 rounded-xl border">
            <figure className="">
                <img src={serviceImage} alt={serviceName} className="rounded-xl w-full h-[200px] object-cover " />
            </figure>
            <div className="space-y-3 mt-3">
                <h2 className="card-title">{serviceName}</h2>
                <p>{description.slice(0, 70)}...</p>
                <p className=""> <span className="font-semibold ">Price:</span> {servicePrice} BDT</p>
                <p className=""><span className="font-semibold ">Service Area: </span>{ServiceArea}</p>
                <div className="flex items-center space-x-4">
                    <img src={serviceProviderImage} alt={serviceProviderName} className="w-10 h-10 object-cover rounded-full border-2"/>
                    <p className="font-medium ">{serviceProviderName}</p>
                </div>  
                <Link to={`/services/${_id}`} className="w-full py-2 bg-blue-500 text-white text-sm  hover:bg-blue-600  btn btn-md">View Details</Link>
            </div>
        </div>
    );
};

export default TrendingServiceCard;