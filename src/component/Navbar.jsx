import React, { useContext } from "react";
import { FaPaw } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const { user } = useContext(AuthContext);


  const handleSignout = () => {
  signOut(auth)
    .then(() => {
      toast.success("Logout successful",{
        position: "bottom-right"
      });
    })
    .catch((error) => {
       
      toast.error("Logout failed");
       console.log(error)
    });
};




  return (
    <div className=" bg-base-100 shadow-sm z-50 sticky top-0">
      <div className="navbar max-w-[1300px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

         
               <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100  z-1 mt-3  w-52 p-2 shadow"
               onClick={() => document.activeElement.blur()} 
            >
              <li>
                {" "}
                <Link to={"/"} >Home</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/services"} >Services</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/profile"} >My Profile</Link>{" "}
              </li>
            </ul>
      
     

          </div>

          <Link
            to={"/"}
            className="font-semibold text-xl md:text-2xl text-purple-600 flex items-center gap-1"
          >
            <FaPaw className="text-xl md:text-2xl" />
            WarmPaws
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 font-semibold text-[16px]">
            <li>
              {" "}
              <Link className="cursor-pointer" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="cursor-pointer" to={"/services"}>
                Services
              </Link>
            </li>
            <li>
              <Link className="cursor-pointer" to={"/profile"}>
                My Profile
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {user && (
            <button
           onClick={handleSignout}
              className="btn bg-linear-to-r from-purple-600 to-pink-400 text-white font-bold hover:scale-105 transform transition duration-300 shadow-sm px-5 md:px-7 rounded-lg "
            >
              Logout
            </button>
          )}

          {!user && (
            <Link to={'/login'} className="btn bg-linear-to-r from-purple-600 to-pink-400 text-white font-bold hover:scale-105 transform transition duration-300 shadow-sm px-5 md:px-7 rounded-lg ">
              Login
            </Link>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
