import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Extract value from input field
    const formdata = new FormData(event.target);
    const email = formdata.get("email");
    const password = formdata.get("password");
    const confirmPassword = formdata.get("confirmPassword");

    // Validation
    if (!email || !password || !confirmPassword) {
      return alert("Pls enter all fields");
    }

    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    const userCredentials = {
      email,
      password,
    };

    // Post the data
    fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          return alert(data.error);
        }
        navigate("/signin");
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="flex items-center justify-center m-14">
      <form
        className="max-w-sm w-full p-6 bg-gray shadow-md rounded-lg flex flex-col items-center gap-6 bg-stone-200"
        onSubmit={handleSubmit}
      >
        <label className="w-full" htmlFor="name">
          <div className="label mb-2">
            <span className="label-text text-xl font-Abril">
              Name <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full h-12 px-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>

        <label className="w-full" htmlFor="familyName">
          <div className="label mb-2">
            <span className="label-text text-xl font-Abril">
              Family Name <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            name="familyName"
            id="familyName"
            type="text"
            placeholder="Enter your family name"
            className="input input-bordered w-full h-12 px-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>

        <label className="w-full" htmlFor="email">
          <div className="label mb-2">
            <span className="label-text text-xl font-Abril">
              Email <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full h-12 px-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>

        <label className="w-full" htmlFor="password">
          <div className="label mb-2">
            <span className="label-text text-xl font-Abril">
              Password <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full h-12 px-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>

        <label className="w-full" htmlFor="confirmPassword">
          <div className="label mb-2">
            <span className="label-text text-xl font-Abril">
              Confirm Password <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            className="input input-bordered w-full h-12 px-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>

        <button
          type="submit"
          className="btn btn-primary w-full h-12 text-lg font-semibold text-black rounded-lg border-2 hover:bg-stone-400 focus:ring-2 focus:bg-stone-400 font-Abril"
        >
          Sign Up
        </button>

        <Link to="/signin" className="hover:underline">
          Already registered? Sign In
        </Link>
      </form>
    </main>
  );
};

export default SignUp;
