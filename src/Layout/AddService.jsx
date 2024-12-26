import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";



const AddService = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const handleAddSubmit = (e) =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const addServiceData = Object.fromEntries(formData.entries())
        addServiceData.serviceProviderImage = user.photoURL
        addServiceData.serviceProviderName = user.displayName
        addServiceData.serviceProviderEmail = user.email
        console.log(addServiceData)
        axiosSecure.post('/services', addServiceData)
        .then(res =>{
            if(res.data.insertedId){
                Swal.fire({
                    title: `SuccessFully Add!`,
                    icon: "success"
                });
                e.target.reset()            
                }
        })
    }
    return (
    <div className=" ">
        <Helmet>
            <title>Add Service || ElectroSavvy</title>
        </Helmet>
        <div className="w-full max-w-md mx-auto my-20  rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Add a service</h2>
            <form onSubmit={handleAddSubmit}>
                <div className="mb-4">
                    <label  className="block font-bold mb-2">Service Name</label>
                    <input type="text" name="serviceName" className="input input-bordered w-full" placeholder="Enter service name" required/>
                </div>
                <div className="mb-4">
                    <label  className="block font-bold mb-2">Service Photo URL</label>
                    <input type="URL" name="serviceImage" className="input input-bordered w-full" placeholder="Enter service image URL" required/>
                </div>
                <div className="mb-4">
                    <label  className="block font-bold mb-2">Service Price</label>
                    <input type="number" name="servicePrice" className="input input-bordered w-full" placeholder="Enter service price" required/>
                </div>
                <div className="mb-4">
                    <label  className="block font-bold mb-2">Service Area</label>
                    <input type="text" name="ServiceArea" className="input input-bordered w-full" placeholder="Enter service area" required/>
                </div>
                <div className="mb-4">
                    <label  className="block font-bold mb-2">Description</label>
                    <textarea name="description" className="input input-bordered w-full" required/>
                </div>
                <button type="submit" className="btn btn-primary w-full font-bold py-2 rounded">Add Service</button>
            </form>
        </div>
    </div>
    );
};

export default AddService;