import { useContext } from "react";
import { Link, NavLink, } from "react-router-dom";
import { AuthContest } from "../../Provider/AuthProvider";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContest);
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }


    const navbar = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/features">Features</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/contact">Contact us</NavLink></li>

    </>
    return (
        <div className="navbar bg-[#4D4844B3] text-white shadow-md font-medium text-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Sound Safari</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbar}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="flex items-center gap-2">
                            <div>
                                {
                                    user.photoURL ? <img className="rounded-full" src={user.photoURL} alt="" /> : <CgProfile className="text-2xl"></CgProfile>
                                }
                            </div>
                            <span>{user.email}</span>
                        </div>
                        <button className="btn" onClick={handleLogOut}><Link to="/login">Sign Out</Link> </button>
                    </> :
                        <p className="btn"><NavLink to="/login">Login</NavLink></p>
                }

            </div>
        </div>
    );
};

export default Navbar;