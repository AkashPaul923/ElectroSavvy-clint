import { FaStar } from "react-icons/fa";


const CommentCard = ({coment}) => {

    const { userName, userImage, rating, commentDate, comment, serviceName, serviceImage } = coment


    return (
        <div className="rounded-lg p-4 flex flex-col h-[300px]  bg-base-200 hover:bg-base-300 border">
            <div className="flex items-center mb-4">
                <img src={userImage} alt={userName} className="w-12 h-12 rounded-full border"/>
                <div className="ml-3">
                    <h3 className="text-lg font-semibold">{userName}</h3>
                    <p className="text-sm">{commentDate}</p>
                </div>
            </div>
            <div className="flex items-center mb-2">
                {Array.from({ length: 5 }).map((_, idx) => ( <FaStar key={idx} className={`mr-1 ${idx < rating ? "text-yellow-500" : "text-gray-300"}`} />))}
            </div>
            <p className="flex-grow mb-4">{comment}</p>
            <div className="flex items-center">
                <img src={serviceImage} alt={serviceName} className="w-10 h-10 rounded-lg border"/>
            <p className="ml-3 text-sm font-medium">{serviceName}</p>
        </div>
    </div>
    );
};

export default CommentCard;