import React from "react";

const DestinationCard = ({ destination }) => {
  const { imageUrl, Price, destinationName, duration, country } = destination;
  return (
    <div>
      <h2>{destinationName}</h2>
    </div>
  );
};

export default DestinationCard;
