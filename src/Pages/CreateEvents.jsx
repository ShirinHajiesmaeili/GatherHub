const CreateEvent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const title = formData.get("title");
    const description = formData.get("description");
    const date = formData.get("date");
    const location = formData.get("location");

    if (!title || !description || !date || !location) {
      return alert("Pls fill in all fields");
    }

    const eventDetails = {
      title,
      description,
      date,
      location,
    };

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(eventDetails),
    };

    fetch("http://localhost:3001/api/events", fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return alert("Event created successfully!");
      })
      .catch((err) => console.log(err));
  };
  return (
    <main className="flex items-center justify-center m-14">
      <form
        className="max-w-sm w-full p-6 bg-gray shadow-md rounded-lg flex flex-col items-center gap-6 bg-stone-200"
        onSubmit={handleSubmit}
      >
        <label className="w-full" htmlFor="title">
          <div className="label mb-2">
            <span className="label-text text-xl font-Abril">
              Event Name <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            name="title"
            id="title"
            type="text"
            placeholder="Enter event name"
            className="input input-bordered w-full h-12 px-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>

        <label className="w-full" htmlFor="description">
          <div className="label mb-2">
            <span className="label-text text-xl font-Abril">
              Description <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <textarea
            name="description"
            id="description"
            placeholder="Enter event description"
            className="input input-bordered w-full resize-none min-h-[120px] px-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>

        <label className="w-full" htmlFor="date">
          <div className="label mb-2">
            <span className="label-text text-xl font-Abril">
              Date <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            name="date"
            id="date"
            type="date"
            className="input input-bordered w-full h-12 px-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>

        <label className="w-full" htmlFor="time">
          <div className="label mb-2">
            <span className="label-text text-xl font-Abril">
              Time <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            name="time"
            id="time"
            type="time"
            className="input input-bordered w-full h-12 px-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>

        <label className="w-full" htmlFor="location">
          <div className="label mb-2">
            <span className="label-text text-xl font-Abril">
              Location <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            name="location"
            id="location"
            type="text"
            placeholder="Enter event location"
            className="input input-bordered w-full h-12 px-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>

        <button
          type="submit"
          className="btn btn-primary w-full h-12 text-lg font-semibold text-black rounded-lg border-2 hover:bg-stone-400 focus:ring-2 focus:bg-stone-400 font-Abril"
        >
          Create New Event
        </button>
      </form>
    </main>
  );
};

export default CreateEvent;
