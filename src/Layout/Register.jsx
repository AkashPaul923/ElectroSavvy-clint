import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Register = () => {

    const handleRegisterSubmit = (e) =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        console.log({name, photo, email, password})
    }

    return (
        <div className="min-h-screen flex items-center justify-center ">
        <div className="w-full max-w-md  rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Register an Account</h2>
            <div className="flex justify-center gap-4 mb-4">
                <button className="btn btn-outline flex items-center gap-2 font-bold py-3 px-10 rounded shadow "><FcGoogle size={20} />Sign in With Google
                </button>
            </div>
            <div className="divider">or continue with email</div>
            <form onSubmit={handleRegisterSubmit}>
                <div className="mb-4">
                    <label  className="block font-bold mb-2">Name</label>
                    <input type="text" name="name" className="input input-bordered w-full" placeholder="Enter your name" required/>
                </div>
                <div className="mb-4">
                    <label  className="block font-bold mb-2">Photo URL</label>
                    <input type="URL" name="photo" className="input input-bordered w-full" placeholder="Enter your photoURL" required/>
                </div>
                <div className="mb-4">
                    <label  className="block font-bold mb-2">Email</label>
                    <input type="email" name="email" className="input input-bordered w-full" placeholder="Enter your email" required/>
                </div>
                <div className="mb-4">
                    <label  className="block font-bold mb-2">Password</label>
                    <input type="password" name="password" className="input input-bordered w-full" placeholder="Enter your password" required/>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <a className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
                </div>
                <button type="submit" className="btn btn-primary w-full font-bold py-2 rounded">Register</button>
            </form>
            <p className="text-sm text-center mt-4">Already have an account? <Link to='/signin' className="text-blue-500 hover:underline">Sign in</Link></p>
        </div>
    </div>
    );
};

export default Register;