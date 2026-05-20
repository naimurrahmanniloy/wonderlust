import DestinationCard from "@/components/DestinationCard";
import React from "react";

const DestinationPage = async () => {
  const res = await fetch("http://localhost:5000/destination");
  const destinations = await res.json();
  console.log(destinations);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold">All Destination</h1>

      <div className="grid grid-cols-3 gap-5 mt-4">
        {destinations.map((item) => (
          <DestinationCard key={item._id} destination={item} />
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;
