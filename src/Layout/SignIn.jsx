import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const SignIn = () => {
    const { handleSignIn, handleGoogleSignIn } = useAuth()
    const location = useLocation()
    // console.log(location.state);
    const navigate = useNavigate()


    const handleSigninSubmit = (e) =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        // console.log({email, password})

        handleSignIn( email, password )
        .then(res => {
            navigate( location?.state ? location.state : "/")
            // toast.success("Successfully Login")
        })
        .catch(() =>{
            // toast.error("Email Or Password incorrect")
        })
    }

  return (
    <div className="min-h-screen flex items-center justify-center ">
        <div className="w-full max-w-md  rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Log in to your Account</h2>
            <p className="text-sm  text-center mb-6">Welcome back! Select method to log in:</p>
            <div className="flex justify-center gap-4 mb-4">
                <button className="btn btn-outline flex items-center gap-2 font-bold py-3 px-10 rounded shadow "><FcGoogle size={20} />Sign in With Google
                </button>
            </div>
            <div className="divider">or continue with email</div>
            <form onSubmit={handleSigninSubmit}>
                <div className="mb-4">
                    <label  className="block font-bold mb-2">Email</label>
                    <input type="email" name="email" className="input input-bordered w-full" placeholder="Enter your email"/>
                </div>
                <div className="mb-4">
                    <label  className="block font-bold mb-2">Password</label>
                    <input type="password" name="password" className="input input-bordered w-full" placeholder="Enter your password"/>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <a className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
                </div>
                <button type="submit" className="btn btn-primary w-full font-bold py-2 rounded">Sign in</button>
            </form>
            <p className="text-sm text-center mt-4">Don’t have an account? <Link to='/register' className="text-blue-500 hover:underline">Create an account</Link></p>
        </div>
    </div>
  );
};

export default SignIn;
