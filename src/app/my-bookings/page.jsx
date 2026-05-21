import Image from "next/image";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { CancelBooking } from "@/components/CancelBooking";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;
  const res = await fetch(`http://localhost:5000/bookings/${user?.id}`);
  const bookingsData = await res.json();

  return (
    <div>
      <div className="max-w-5xl mx-auto p-4 md:p-8 font-sans text-slate-800">
        {/* Header Section */}
        <div className="mb-8">
          <h1
            className="text-4xl whitespace-nowrap mb-2"
            style={{ fontWeight: 300 }}
          >
            My Bookings
          </h1>
          <p className="text-slate-500 text-sm md:text-base">
            Manage and view your upcoming travel plans
          </p>
        </div>

        {/* Cards Container */}
        <div className="space-y-6">
          {bookingsData.map((booking) => (
            <div
              key={booking._id}
              className="flex flex-col md:flex-row border border-slate-200 bg-white p-4 gap-6"
            >
              {/* Image Section */}
              <div className="w-full md:w-87.5 h-48 md:h-56 shrink-0 relative">
                <Image
                  src={booking.imageUrl}
                  alt={booking.destinationName}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col grow justify-between py-1">
                <div>
                  {/* Status Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600 mb-3 border border-green-100">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Confirmed
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-serif mb-4 text-black">
                    {booking.destinationName}
                  </h2>

                  {/* Details */}
                  <div className="space-y-2.5 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Departure: {booking.departureDate}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Booking ID: {booking._id}
                    </div>
                  </div>
                </div>

                {/* Bottom Row (Price & Actions) */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-4 sm:mt-0 gap-4">
                  <div className="text-3xl md:text-4xl font-semibold text-[#16a3b5]">
                    ${booking.price}
                  </div>

                  <div className="flex gap-3 w-full sm:w-auto">
                    <CancelBooking bookingId={booking._id} />
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2 bg-[#16a3b5] hover:bg-[#138d9c] text-white transition-colors text-sm font-medium border border-[#16a3b5]">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookingsPage;
