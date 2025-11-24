// import React, { useEffect, useState } from "react";
import useServices from "../hooks/useservices";

const PopularSection = () => {

  const { services, loading } = useServices();

  if (loading)
    return (
      <div className="min-h-[300px] flex justify-center items-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );

  return (
    <div className=" my-10 max-w-[1200px] mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold my-4 text-center">
        Popular Winter Care Services
      </h1>

      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service) => (
            <div
              key={service?.serviceId}
              className="card bg-base-100 shadow-sm px-5 space-y-3 w-[350px] md:w-full mx-auto"
            >
              <figure>
                <img
                  className="w-full h-[250px] object-cover"
                  src={service.image}
                  alt={service?.serviceName}
                />
              </figure>

              <div className="space-y-3 px-1">
                <h2 className="card-title text-xl">{service?.serviceName}</h2>

                <div className="flex justify-between">
                  <p className="px-3 py-1 rounded-xl border border-violet-300 bg-violet-50 text-violet-700 font-medium shadow-sm">
                    Price: ${service?.price}
                  </p>

                  <p className="px-3 py-1 rounded-xl border border-violet-300 bg-purple-50 text-purple-700 font-medium shadow-sm">
                    Rating: {service?.rating}
                  </p>
                </div>

                <div className="flex mb-5 mt-5">
                  <button className="btn btn-outline w-full rounded-2xl btn-primary text-[15px]">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularSection;
