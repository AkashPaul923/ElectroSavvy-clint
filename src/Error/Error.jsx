
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-28 my-44">
            <p className="text-3xl font-bold text-red-500 text-center">NOT FOUND</p>
            <Link className="btn btn-outline" to="/">Go to Home</Link>
        </div>
    );
};

export default Error;