import { FaEnvelope } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const ServiceDetail = () => {
    const service = useLoaderData()
    const {user} = useAuth()
    console.log(service);
    const {_id,serviceImage, serviceName, servicePrice , serviceProviderImage , serviceProviderName, ServiceArea , description , serviceProviderEmail} = service

    const handleModalSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries())
        // console.log(initialData);
        const {servicePrice, ...bookedData} = initialData
        bookedData.servicePrice = parseInt(servicePrice)
        console.log(bookedData)
        document.getElementById(`modal-close-${_id}`).click()
    }

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
                    <div className="flex items-center gap-4 mb-4">
                        <img
                            src={serviceProviderImage}
                            alt={serviceProviderName}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <span className=" font-medium">{serviceProviderName}</span>
                    </div>
                    <button onClick={()=>document.getElementById(`book-modal-${_id}`).showModal()} className="btn btn-primary w-full">Book Now</button>
                </div>
            </div>


            {/* Modal */}
            <dialog id={`book-modal-${_id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="">
                        <form onSubmit={handleModalSubmit} className="space-y-2">
                            <div className="grid grid-cols-3">
                                <span className="label-text">Service id</span>
                                <input type="text" name="serviceId" value={_id} className="input input-bordered input-sm w-full col-span-2" />
                            </div>
                            <div className="grid grid-cols-3">
                                <span className="label-text">Service Name</span>
                                <input type="text" name="serviceName" value={serviceName} className="input input-bordered input-sm w-full col-span-2" />
                            </div>
                            <div className="grid grid-cols-3">
                                <span className="label-text">Service Image</span>
                                <input type="URL" name="serviceImage" value={serviceImage} className="input input-bordered input-sm w-full col-span-2" />
                            </div>
                            <div className="grid grid-cols-3">
                                <span className="label-text">Price</span>
                                <input type="text" name="servicePrice" value={servicePrice} className="input input-bordered input-sm w-full col-span-2" />
                            </div>
                            <div className="grid grid-cols-3">
                                <span className="label-text">Service Provider Email</span>
                                <input type="text" name="serviceProviderEmail" value={serviceProviderEmail} className="input input-bordered input-sm w-full col-span-2" />
                            </div>
                            <div className="grid grid-cols-3">
                                <span className="label-text">Service Provider Name</span>
                                <input type="text" name="serviceProviderName" value={serviceProviderName} className="input input-bordered input-sm w-full col-span-2" />
                            </div>
                            <div className="grid grid-cols-3">
                                <span className="label-text">Current User Name</span>
                                <input type="text" name="currentUserName" value={user.displayName} className="input input-bordered input-sm w-full col-span-2" />
                            </div>
                            <div className="grid grid-cols-3">
                                <span className="label-text">Current User Email</span>
                                <input type="text" name="currentUserEmail" value={user.email} className="input input-bordered input-sm w-full col-span-2" />
                            </div>
                            <div className="grid grid-cols-3">
                                <span className="label-text">Service Taking Date</span>
                                <input type="date" name="serviceTakingDate" className="input input-bordered input-sm w-full col-span-2" required/>
                            </div>
                            <div className="grid grid-cols-3">
                                <span className="label-text">Special Instruction</span>
                                <input type="text" name="specialInstruction" placeholder="Write some instruction" className="input input-bordered input-sm w-full col-span-2" required/>
                            </div>
                            {/* if there is a button in form, it will close the modal */}
                            <button type="submit" className="btn btn-accent inline-block w-full mt-4">Purchase</button>
                        </form>
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button id={`modal-close-${_id}`} className="btn btn-outline inline-block w-full mt-5">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ServiceDetail;