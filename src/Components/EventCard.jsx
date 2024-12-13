import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const formattedDate = new Date(event.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  });

  return (
    <Link
      to={`event/${event.id}`}
      className="flex justify-center items-center m-14"
    >
      <div className="card bg-neutral w-96 shadow-xl rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 m-2 p-4">
        <div className="card-body">
          <h2 className="card-title text-primary font-bold text-lg mb-2">
            {event.title}
            <div className="badge badge-secondary text-sm ml-2 p-2">
              {formattedDate}
            </div>
          </h2>
          <div className="flex gap-2 items-center my-3">
            <svg
              className="h-5 w-5 fill-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              aria-hidden="true"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <span className="text-sm text-gray-600">{event.location}</span>
          </div>
        </div>
        <div className="flex justify-around items-center bg-stone-200 py-3">
          <button className="btn btn-primary text-sm px-4 py-2 rounded-full border border-slate-600 bg-red-300 focus:ring-2 focus:ring-stone-400">
            Buy Now
          </button>
          <button className="btn btn-secondary text-sm px-4 py-2 rounded-full border border-slate-600 bg-red-300 focus:ring-2 focus:ring-stone-400">
            Favourite
          </button>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
