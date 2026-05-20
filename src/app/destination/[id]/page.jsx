import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";

const DestinationDetailsCard = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const destination = await res.json();

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Top Navigation Bar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-200 max-w-7xl mx-auto">
        <Link href={"/"}>
          <button className="flex items-center cursor-pointer text-gray-500 hover:text-gray-700 transition">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Destinations
          </button>
        </Link>
        <div className="flex space-x-3">
          <EditModal destination={destination} />

          <DeleteAlert destination={destination} />
        </div>
      </nav>

      {/* Hero Image Section */}
      <div className="max-w-7xl mx-auto mt-6 px-8">
        <div className="w-full h-100 overflow-hidden rounded-sm relative">
          {/* Using a placeholder that resembles a tropical aerial view */}

          <Image
            src={destination.imageUrl}
            alt={destination.destinationName}
            width={800}
            height={800}
            className="w-full h-180 object-cover"
          />
        </div>
      </div>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Details & Overview */}
        <div className="lg:col-span-2">
          {/* Location Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {destination.country}
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light tracking-tight text-gray-900 mb-4">
            {destination.destinationName}
          </h1>

          {/* Ratings & Duration */}
          <div className="flex items-center text-sm mb-8 space-x-6 text-gray-600 border-b pb-6">
            <div className="flex items-center font-semibold">
              <svg
                className="w-5 h-5 text-green-500 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              4.9{" "}
              <span className="font-normal text-gray-500 ml-1">
                (234 reviews)
              </span>
            </div>
            <div className="flex items-center font-semibold">
              <svg
                className="w-5 h-5 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              7 Days / 6 Nights
            </div>
          </div>

          {/* Overview Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-normal mb-4">Overview</h2>
            <p className="text-gray-500 leading-relaxed">
              {destination.overview}
            </p>
          </section>

          {/* Highlights Section */}
          <section>
            <h2 className="text-2xl font-normal mb-4">Highlights</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Discover the magic of Bali with pristine beaches, ancient temples,
              and vibrant culture. Experience luxury resorts, tropical
              landscapes, and unforgettable sunsets.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm text-gray-600">
              {[
                "Luxury beachfront accommodation",
                "Traditional Balinese spa treatment",
                "Sunrise trek to Mount Batur",
                "Visit Uluwatu Temple at sunset",
                "Private beach dinner experience",
              ].map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 shrink-0"
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
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-1 relative">
          <div className="bg-white border border-gray-200 shadow-sm p-6 rounded-sm sticky top-6">
            <div className="text-sm text-gray-500 mb-1">Starting from</div>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-[#239fb8]">
                ${destination.price}
              </span>
              <span className="text-sm text-gray-500 ml-2">per person</span>
            </div>

            <div className="mb-4">
              <input
                type="text"
                defaultValue="05/15/2026"
                className="w-full border-none bg-gray-50 p-4 text-gray-700 text-sm focus:ring-0 focus:outline-none"
              />
            </div>

            <button className="w-full bg-[#239fb8] hover:bg-[#1d879c] text-white py-4 px-4 font-medium flex justify-center items-center transition mb-6 rounded-sm">
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
        </div>
      </main>
    </div>
  );
};

export default DestinationDetailsCard;
