import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";


const TodoServicesCard = ({ toDoService }) => {

    const {_id, serviceName, currentUserName, currentUserEmail, servicePrice, serviceTakingDate, status, specialInstruction } = toDoService
    const [st, setSt] = useState(status)

    const handleStatusUpdate = (e) => {
        const updateStatus = { status : e.target.value }
        // console.log(updateStatus)
        Swal.fire({
            title: "Are you sure?",
            text: "The status will be updated!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.patch(`http://localhost:5000/booked-services/${_id}`, updateStatus)
                .then(res => {
                    if(res.data.modifiedCount > 0 ){
                        setSt(updateStatus.status)
                        Swal.fire({
                            title: "Updated!",
                            icon: "success"
                        })
                    }
                })
            }
        });
    }


    return (
        <div>
            <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{serviceName}</h2>
                    <p className="font-medium">Service Date: {serviceTakingDate}</p>
                    <p className="font-medium">Service Price: {servicePrice} BDT</p>
                    <p className="font-bold">Customer Name: {currentUserName}</p>
                    <p className="font-bold">Customer Email: {currentUserEmail}</p>
                    <div className="flex items-center">
                        <p className="font-semibold">Status: <span className={`${st === "Pending"? "text-red-500": st === "Completed"? "text-green-500": "text-yellow-500"}`}>{st}</span></p>
                    </div>
                    
                    <p className={`${st === 'Completed' ? 'hidden': ''}`}>Update Status:
                        <select onChange={handleStatusUpdate} name="status" defaultValue={status} className='' >
                            <option value="Pending">Pending</option>
                            <option value="Working">Working</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </p>
                        
                    
                    <p>Additional Notes: {specialInstruction}</p>
                </div>
            </div>

            {/* status update modal */}
            <dialog id={`status-update-modal-${_id}`} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg my-5">Update status of {serviceName}</h3>
                    
                </div>
            </dialog>
        </div>
    );
};

export default TodoServicesCard;

// {
//     "_id": "676c5924b30770e22be8354e",
//     "serviceId": "676aca03e3e754ef48e1b28a",
//     "serviceName": "Microwave Oven Repair",
//     "serviceImage": "https://img.freepik.com/free-photo/service-maintenance-worker-repairing_23-2149176716.jpg?ga=GA1.1.907693731.1729787521&semt=ais_hybrid",
//     "serviceProviderEmail": "sabujpaul05@gmail.com",
//     "serviceProviderName": "Sabuj Paul",
//     "currentUserName": "Akash Paul",
//     "currentUserEmail": "akashpaul923@gmail.com",
//     "serviceTakingDate": "2025-01-03",
//     "specialInstruction": "I need quick service",
//     "servicePrice": 1200,
//     "status": "Pending"
// }