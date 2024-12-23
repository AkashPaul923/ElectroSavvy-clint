import { FaEnvelope } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";


const ServiceDetail = () => {
    const service = useLoaderData()
    console.log(service);
    const {_id,serviceImage, serviceName, servicePrice , serviceProviderImage , serviceProviderName, ServiceArea , description , serviceProviderEmail} = service

    return (
        <div className="max-w-5xl mx-auto p-4 my-10">
            {/* Service Provider Information */}
            <div className="p-3 md:p-10 flex gap-2 md:gap-7 items-center bg-base-300 rounded-xl mb-8">
                <figure>
                    <img
                        src={serviceProviderImage}
                        alt={serviceProviderName}
                        className="rounded-xl w-20 h-20 md:w-32 md:h-32 object-cover"
                    />
                </figure>
                <div className="">
                    <h2 className="card-title md:text-2xl font-bold">{serviceProviderName}</h2>
                    <p className="text-sm  flex items-center gap-2">
                        <FaEnvelope className="text-blue-500" /> {serviceProviderEmail}
                    </p>
                    <p className="font-bold">Service Area: {ServiceArea}</p>
                </div>
            </div>

            {/* Single Service Section */}
            <div className="p-3 md:p-10 bg-base-300 rounded-xl">
                <figure>
                    <img  src={serviceImage} alt={serviceName} className="rounded-xl max-h-[350px] w-full  object-cover"/>
                </figure>
                <div className="mt-7">
                    <h2 className="card-title text-2xl font-bold">{serviceName}</h2>
                    <p className=" mb-4">{description}</p>
                    <div className="text-xl font-semibold  mb-4">Price: {servicePrice} BDT</div>
                    <button className="btn btn-primary w-full">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;