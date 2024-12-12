const EventCard = ({ event }) => {
  const formattedDate = new Date(event.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  });

  return (
    <div className="flex flex-wrap">
      <div className="card bg-base-100 w-96 shadow-xl bg-stone-300 rounded-xl m-10 ">
        <div className="card-body items-center text-center">
          <figure>
            <img
              src={event.imageUrl || "festival.jpg"}
              alt={"Event image"}
              className="w-full h-48 object-cover rounded-t-xl"
            />
          </figure>

          <h2 className="text-bold- font-Abril italic card-title text-primary m-5">
            {event.title}
            <div className="badge badge-secondary m-5 text-bold">
              {formattedDate}
            </div>
          </h2>

          <div className=" italic flex gap-2 my-2">
            <svg
              className="h-6 fill-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <span>{event.location}</span>
          </div>
        </div>
        <div className="flex justify-center items-center card-actions bg-stone-300">
          <button className="btn btn-primary border border-slate-600   hover:bg-stone-400 focus:ring-2 focus:bg-stone-400 rounded-md m-4 p-1">
            Buy Now
          </button>
          <button className="btn btn-primary border border-slate-600   hover:bg-stone-400 focus:ring-2 focus:bg-stone-400 rounded-md p-1">
            Favourite
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
