import React from "react";

const DestinationPage = async () => {
  const res = await fetch("http://localhost:5000/destination");
  const destinations = await res.json();

  return (
    <div>
      <h1>All Destination</h1>

      <div>
        {destinations.map((item) => (
          <div key={item._id}>
            <h2>{item.destinationName}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;
