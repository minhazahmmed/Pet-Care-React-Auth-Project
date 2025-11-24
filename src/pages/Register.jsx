import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="hero min-h-screen px-4 my-12">
            <div className="p-6 md:p-10 bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 w-full max-w-md">

                <h1 className="text-4xl font-extrabold mb-6 
                    bg-linear-to-r from-pink-500 to-purple-600 
                    text-transparent bg-clip-text text-center">
                    Register Now
                </h1>

                <div className="card bg-white/60 backdrop-blur-2xl w-full shadow-xl rounded-2xl border border-white/40">
                    <div className="card-body space-y-3">

                        <fieldset className="fieldset">

                            <label className="label text-[15px] font-semibold text-gray-700">Name</label>
                            <input 
                                type="text"
                                className="input input-bordered bg-white/70 border-purple-200 
                                focus:border-purple-500 focus:ring focus:ring-purple-200 w-full"
                                placeholder="Your Name"
                            />

                            <label className="label text-[15px] font-semibold text-gray-700 mt-3">Email</label>
                            <input 
                                type="email"
                                className="input input-bordered bg-white/70 border-purple-200 
                                focus:border-purple-500 focus:ring focus:ring-purple-200 w-full"
                                placeholder="Your Email"
                            />

                            <label className="label text-[15px] font-semibold text-gray-700 mt-3">Photo URL</label>
                            <input 
                                type="text"
                                className="input input-bordered bg-white/70 border-purple-200 
                                focus:border-purple-500 focus:ring focus:ring-purple-200 w-full"
                                placeholder="Your Photo URL"
                            />

                            <label className="label text-[15px] font-semibold text-gray-700 mt-3">Password</label>
                            <input 
                                type="password"
                                className="input input-bordered bg-white/70 border-purple-200 
                                focus:border-purple-500 focus:ring focus:ring-purple-200 w-full"
                                placeholder="Create Password"
                            />

                            <button className="btn w-full mt-5 
                                bg-linear-to-r from-pink-500 to-purple-600 text-white 
                                rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] 
                                transition-all duration-300">
                                Register
                            </button>

                            {/* Login link */}
                            <p className="text-center text-sm mt-4">
                                Already have an account?
                                <Link to="/login" className="text-purple-600 font-semibold hover:underline ml-1">
                                    Login
                                </Link>
                            </p>

                        </fieldset>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;
