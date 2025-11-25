import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Register = () => {
  const { registerWithEmailPassword, user, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photourl = e.target.photoURL.value;

    registerWithEmailPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photourl,
        })
          .then(() => {
            setUser(user);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(user);
  
  return (
    <div className="hero min-h-screen px-4 my-12">
      <div className="p-6 md:p-10 bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 w-full max-w-md">
        <h1
          className="text-4xl font-extrabold mb-6 
                    bg-linear-to-r from-pink-500 to-purple-600 
                    text-transparent bg-clip-text text-center"
        >
          Register Now
        </h1>

        <div className="card bg-white/60 backdrop-blur-2xl w-full shadow-xl rounded-2xl border border-white/40">
          <div className="card-body space-y-3">
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="label text-[15px] font-semibold text-gray-700">
                Name
              </label>
              <input
                name="name"
                type="text"
                className="input input-bordered bg-white/70 border-purple-200 
                                focus:border-purple-500 focus:ring focus:ring-purple-200 w-full"
                placeholder="Your Name"
              />

              <label className="label text-[15px] font-semibold text-gray-700 mt-3">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="input input-bordered bg-white/70 border-purple-200 
                                focus:border-purple-500 focus:ring focus:ring-purple-200 w-full"
                placeholder="Your Email"
              />

              <label className="label text-[15px] font-semibold text-gray-700 mt-3">
                Photo URL
              </label>
              <input
                name="photoURL"
                type="text"
                className="input input-bordered bg-white/70 border-purple-200 
                                focus:border-purple-500 focus:ring focus:ring-purple-200 w-full"
                placeholder="Your Photo URL"
              />

              <label className="label text-[15px] font-semibold text-gray-700 mt-3">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="input input-bordered bg-white/70 border-purple-200 
                                focus:border-purple-500 focus:ring focus:ring-purple-200 w-full"
                placeholder="Create Password"
              />

              <button
                className="btn w-full mt-5 
                                bg-linear-to-r from-pink-500 to-purple-600 text-white 
                                rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] 
                                transition-all duration-300"
              >
                Register
              </button>

              {/* Login link */}
              <p className="text-center text-sm mt-4">
                Already have an account?
                <Link
                  to="/login"
                  className="text-purple-600 font-semibold hover:underline ml-1"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
