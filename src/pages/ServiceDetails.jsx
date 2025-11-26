import React, { useState } from "react";
import useServices from "../hooks/useservices";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const ServiceDetails = () => {
  const { services, loading, user } = useServices();
  const { id } = useParams();
  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");

  if (loading)
    return (
      <div className="min-h-[300px] flex justify-center items-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );

  const findResult = services?.find((service) => service.serviceId == id);
//   console.log(findResult);

  const handleBook = (e) => {
    e.preventDefault();
    toast.success("Service booked successfully!", {
      position: "bottom-right",
    });

    setName("");
    setEmail("");
  };

  return (
    <div className="min-h-screen py-7 md:py-12 px-4 ">

      <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-xl shadow-xl rounded-3xl p-6 md:p-7 border border-white/40">
        {/* IMAGE */}
        <div className="w-full">
          <img
            src={findResult.image}
            alt={findResult.serviceName}
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* TITLE */}
        <h1
          className="text-2xl md:text-4xl font-extrabold mt-6 
          bg-linear-to-r from-purple-600 to-pink-500 
          text-transparent bg-clip-text"
        >
          {findResult.serviceName}
        </h1>

        {/* CATEGORY */}
        <p className="mt-2 inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
          {findResult.category}
        </p>

        {/* PRICE and RATING */}
        <div className="flex justify-between">
          <p className="text-[16px] md:text-[18px] font-semibold mt-4 text-purple-600 border-2 border-dotted border-purple-700 px-3 rounded-xl">
            Price: ${findResult.price}
          </p>

          <p className="text-[16px] md:text-[18px] font-semibold mt-4 text-purple-600 border-2 border-dotted border-purple-700 px-3 rounded-xl">
            Rating: {findResult.rating}
          </p>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-700 mt-5 leading-relaxed text-[15px]">
          {findResult.description}
        </p>

        {/* BOOKING FORM */}
        <div className="mt-12 p-6 bg-white/70 rounded-2xl shadow-md border border-purple-100">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Book This Service
          </h2>

          <form onSubmit={handleBook} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full bg-white/70 border-purple-300 focus:border-purple-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full bg-white/70 border-purple-300 focus:border-purple-500"
                placeholder="Enter your email"
              />
            </div>

            <button
              type="submit"
              className="btn w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-md"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
