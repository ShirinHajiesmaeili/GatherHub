import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EventDetails = () => {
  const { eventID } = useParams();
  const [eventDetails, setEventDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/api/events/${eventID}`)
      .then((res) => res.json())
      .then((data) => setEventDetails(data))
      .catch((err) => console.log(err));
  }, []);

  const formattedDate = new Date(eventDetails.date).toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    }
  );

  return (
    <main className="grid grid-cols-4 max-w-screen-2xl px-4 my-4">
      <h1 className="text-3xl mb-4">{eventDetails.title}</h1>
      <p className="font-semibold text-primary">{formattedDate}</p>
      <div className="flex gap-2 my-4">
        <svg
          className="h-6 fill-primary"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
        </svg>
        <span>{eventDetails.location}</span>
      </div>
      <p>{eventDetails.description}</p>
    </main>
  );
};

export default EventDetails;
