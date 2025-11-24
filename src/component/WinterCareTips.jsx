import React, { useEffect, useState } from "react";


const WinterCareTips = () => {
  const [tips, setTip] = useState([]);
  useEffect(() => {
    fetch("/winter_pet_care_tips.json")
      .then((res) => res.json())
      .then((data) => setTip(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="py-10">
      <h2 className="text-[26px] md:text-3xl font-bold text-center mb-6">
        Winter Care Tips for Pets
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white shadow-md rounded-xl p-5 text-center hover:shadow-lg transition  cursor-pointer w-[350px] md:w-full mx-auto"
          >
            <div className="text-5xl mb-3">{tip.icon}</div>
            <h3 className="text-xl font-semibold">{tip.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{tip.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterCareTips;
