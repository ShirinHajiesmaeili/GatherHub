import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EventDetails = () => {
  const { eventID } = useParams();
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/events${eventID}`)
      .then((res) => res.json())
      .then((data) => setEventDetails(data))
      .catch((err) => console.log(err));
  }, []);

  // const formattedDate = new Date(eventDetails.date).toLocaleDateString(
  //   "en-GB",
  //   {
  //     day: "2-digit",
  //     month: "short",
  //     year: "2-digit",
  //   }
  // );

  console.log(eventDetails);

  return (
    <div className="p-10 flex justify-center items-center">
      {eventDetails ? (
        <main className="bg-white rounded-lg shadow-lg p-8 max-w-2xl">
          <h1 className="text-3xl font-bold mb-4 bg-stone-500 rounded-xl p-4 text-white text-center">
            {eventDetails.title}
          </h1>

          {/* <p className="font-semibold text-primary mb-4">{formattedDate}</p> */}

          <div className="flex gap-2 items-center mb-4">
            <svg
              className="h-6 fill-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              aria-hidden="true"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <span>{eventDetails.location}</span>
          </div>

          <p className="mb-4">{eventDetails.description}</p>

          <p className="text-lg font-bold mb-4">
            Ticket Price: ${eventDetails.price}
          </p>

          <div>
            <p className="text-black font-bold underline ">
              More Dates for this event:
            </p>
            <p className="font-semibold text-primary my-10 ">
              20 Jan 2024 | Time: 20:00
              <button className="btn btn-primary text-sm px-6 py-2 rounded-full border border-slate-600 focus:ring-2 focus:ring-stone-400 ml-96 bg-red-300">
                Buy Now
              </button>
            </p>
            <p className="font-semibold text-primary my-10">
              26 Jan 2024 | Time 22:00
              <button className="btn btn-primary text-sm px-6 py-2 rounded-full border border-slate-600  focus:ring-2 focus:ring-stone-400 ml-96  bg-red-300">
                Buy Now
              </button>
            </p>
            <p className="font-semibold text-primary my-10">
              27 Jan 2024 | Time: 19:00
              <button className="btn btn-primary text-sm px-6 py-2 rounded-full border border-slate-600  focus:ring-2 focus:ring-stone-400 ml-96  bg-red-300">
                Buy Now
              </button>
            </p>
          </div>
        </main>
      ) : (
        <p>loading .....</p>
      )}
    </div>
  );
};

export default EventDetails;
