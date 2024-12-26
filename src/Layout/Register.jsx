import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";


const Register = () => {
    const { handleRegister, manageProfile , handleGoogleSignIn, setUser } = useAuth()
    const navigate = useNavigate()

    // Check for an uppercase letter
    const hasUppercase = /(?=.*[A-Z])/;

    // Check for a lowercase letter
    const hasLowercase = /(?=.*[a-z])/;

    
    const handleRegisterSubmit = (e) =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        // console.log({name, photo, email, password})

        if(!hasUppercase.test(password)){
            return toast.error("Must have an Uppercase letter in the password")
        }
        if(!hasLowercase.test(password)){
            return toast.error("Must have a Lowercase letter in the password ")
        }
        if(password.length < 6){
            return toast.error("Length must be at least 6 character ")
        }


        handleRegister( email, password )
        .then((res) =>{
            manageProfile( name, photo )
            .then(() =>{
                setUser({...res.user, displayName: name, photoURL : photo})
                navigate('/')
            })
            toast.success("Successfully register")
        })
        .catch(() =>{
            toast.error("User already exist")
        })
    }


    const handleGoogle = () => {
        handleGoogleSignIn()
        .then(res=>{
            navigate('/')
            toast.success("Successfully Sign in")
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center ">
        <Helmet>
            <title>Register || ElectroSavvy</title>
        </Helmet>
        <div className="w-full max-w-md  rounded-lg bg-base-200 border p-6"  data-aos="zoom-in" data-aos-duration="1000">
            <h2 className="text-2xl font-bold text-center mb-4">Register an Account</h2>
            <div className="flex justify-center gap-4 mb-4">
                <button onClick={handleGoogle} className="btn btn-outline flex items-center gap-2 font-bold py-3 px-10 rounded shadow "><FcGoogle size={20} />Sign in With Google
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
                <button type="submit" className="btn btn-primary w-full font-bold py-2 rounded">Register</button>
            </form>
            <p className="text-sm text-center mt-4">Already have an account? <Link to='/signin' className="text-blue-500 hover:underline">Sign in</Link></p>
        </div>
    </div>
    );
};

export default Register;