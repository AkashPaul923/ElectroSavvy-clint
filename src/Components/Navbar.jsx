import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Theme from "./Theme";
import logo from '../assets/logo.png'
import { toast } from "react-toastify";

const Navbar = () => {
    const { user, loader , handleSignOut } = useAuth()
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/all-service'>All Service</NavLink></li>
        {
            user && 
            <li>
                <details>
                    <summary>Dashboard</summary>
                    <ul className="p-2 min-w-44 z-50">
                        <li><NavLink to='/add-service'>Add Service</NavLink></li>
                        <li><NavLink to='/manage-services'>Manage Services</NavLink></li>
                        <li><NavLink to='/booked-services'>Booked Services</NavLink></li>
                        <li><NavLink to='/service-to-do'>Service To Do</NavLink></li>
                    </ul>
                </details>
            </li>
        }
    </>

    const handleLogOut = () =>{
        handleSignOut()
        .then(() =>{
            toast.success("Successfully Sign out")
        })
    }
  return (
    <nav className="bg-base-300 fixed w-full z-10">  
        <div className="navbar px-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[5] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <NavLink to='/' className="flex items-center gap-2"><img className="h-7" src={logo} alt="logo" /><p className="text-xl font-bold">ElectroSavvy</p></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Theme></Theme>
                {
                    loader ? "":
                        user ? 
                        <>
                            <img className="h-10 w-10 rounded-full object-cover mx-3" src={user?.photoURL} alt="" />
                            <button onClick={handleLogOut} className="btn bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold">Sign out</button>
                        </> 
                        :
                        <Link to='/signin' className="btn bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold ml-3">Sign in</Link>
                }
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
