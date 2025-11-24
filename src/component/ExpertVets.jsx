import React, { useEffect, useState } from "react";


const ExpertVets = () => {

    const [vets, setVets] = useState([])
  
    useEffect(() => {
        fetch('/expert_vets.json')
        .then(res => res.json())
        .then(data => setVets(data))
        .catch(err => console.log(err))

    }, [])
    console.log(vets)




  return (
    <div className="py-10">
      <h2 className="text-[26px] md:text-3xl font-bold text-center mb-6">Meet Our Expert Vets</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {vets.map((vet) => (
          <div
            key={vet.id}
            className="bg-white shadow-md rounded-xl p-5  hover:shadow-xl transition text-center cursor-pointer  w-[350px] md:w-full mx-auto"
          >
            <img
              src={vet.image}
              alt={vet.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border"
            />

            <h3 className="text-xl font-semibold">{vet.name}</h3>
            <p className="text-gray-700">{vet.specialty}</p>
            <p className="text-sm text-gray-500 mt-1">{vet.experience}</p>

            <div className="flex mb-5 mt-5">
          <button className="btn w-full rounded-2xl btn-primary text-[15px]">Book Appointment</button>
        </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default ExpertVets;
