import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    const {_id,serviceImage, serviceName, servicePrice , serviceProviderImage , serviceProviderName, ServiceArea , description} = service
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-4 bg-base-200 hover:bg-base-300 rounded-lg border">
        <div>
            <img src={serviceImage} alt={serviceName} className="w-full h-full object-cover rounded-lg"/>
        </div>
        <div className=" space-y-2 col-span-2">
            <h2 className="text-2xl font-semibold ">{serviceName}</h2>
            <p className=" text-sm"> {description.slice(0, 100)}...</p>
            <p className=""> <span className="font-semibold ">Price:</span> {servicePrice} BDT</p>
            <p className=""><span className="font-semibold ">Service Area: </span>{ServiceArea}</p>
            <div className="flex items-center space-x-4">
                <img src={serviceProviderImage} alt={serviceProviderName} className="w-10 h-10 object-cover rounded-full border-2"/>
                <p className="font-medium ">{serviceProviderName}</p>
            </div>
            <Link to={`/services/${_id}`} className="w-full py-2 btn-primary  btn btn-md">View Details</Link>
        </div>
    </div>
  );
};

export default ServiceCard;
