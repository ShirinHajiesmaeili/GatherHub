import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

const Home = () => {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/events")
      .then((res) => res.json())
      .then((data) => setAllEvents(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="max-w-screen-2xl px-4 mx-auto my-4">
      <div className="auto-cols-max justify-items-center gap-12">
        {allEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
};

export default Home;
