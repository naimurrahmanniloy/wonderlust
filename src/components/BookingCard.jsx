"use client";
import React, { useState } from "react";
import { DateField, Label } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";

const BookingCard = ({ destination }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [tourDate, setTourDate] = useState(null);
  const handleBooking = async () => {
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: destination._id,
      destinationName: destination.destinationName,
      price: destination.price,
      imageUrl: destination.imageUrl,
      country: destination.country,
      tourDate: new Date(tourDate),
    };

    const res = await fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();
    toast.success("Booking successful!");
  };

  return (
    <div className="bg-white border border-gray-200 shadow-sm p-6 rounded-sm sticky top-6">
      <div className="text-sm text-gray-500 mb-1">Starting from</div>
      <div className="flex items-baseline mb-6">
        <span className="text-4xl font-bold text-[#239fb8]">
          ${destination.price}
        </span>
        <span className="text-sm text-gray-500 ml-2">per person</span>
      </div>

      <div className="mb-4">
        <DateField onChange={setTourDate} className="w-[256px]" name="date">
          <Label>Tour Date</Label>
          <DateField.Group>
            <DateField.Input>
              {(segment) => <DateField.Segment segment={segment} />}
            </DateField.Input>
          </DateField.Group>
        </DateField>
      </div>

      <button
        onClick={handleBooking}
        className="w-full bg-[#239fb8] hover:bg-[#1d879c] text-white py-4 px-4 font-medium flex justify-center items-center transition mb-6 rounded-sm"
      >
        Book Now
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>

      {/* Value Propositions */}
      <div className="space-y-3 text-xs text-gray-500">
        {[
          "Free cancellation up to 7 days",
          "Travel insurance included",
          "24/7 customer support",
        ].map((perk, index) => (
          <div key={index} className="flex items-center">
            <svg
              className="w-4 h-4 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {perk}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingCard;
