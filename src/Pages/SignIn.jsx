import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const SignIn = () => {
  const navigate = useNavigate();
  const { signIn } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Extract value from input field
    const formdata = new FormData(event.target);
    const email = formdata.get("email").toLowerCase();
    const password = formdata.get("password");

    // Validation
    if (!email || !password) {
      return alert("Pls enter all fields");
    }

    const userCredentials = {
      email,
      password,
    };

    // Post the data
    signIn(userCredentials);
    navigate("/"); //Navigate to homepage once signed in
  };

  return (
    <main className="flex items-center justify-center m-14  ">
      <form
        className="max-w-sm w-full p-6 bg-gray shadow-md rounded-lg flex flex-col items-center gap-6 bg-stone-200"
        onSubmit={handleSubmit}
      >
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
        <button
          type="submit"
          className="btn btn-primary w-full h-12 text-lg font-semibold text-black rounded-lg border-2  hover:bg-stone-400 focus:ring-2 focus:bg-stone-400 font-Abril "
        >
          Sign In
        </button>
        <Link to="/signup" className="hover:underline">
          Sign Up ;)
        </Link>
      </form>
    </main>
  );
};

export default SignIn;
