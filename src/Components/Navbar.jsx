import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { useContext } from "react";

const NavBar = () => {
  const { user, signOut } = useContext(UserContext);

  return (
    <div className="Navbar flex flex-col justify-center items-center m-4  bg-red-300">
      <div className="bg-stone-500 shadow-md w-full flex justify-between items-center p-4">
        <Link to="/">
          <button className="text-4xl font-Abril text-white">GatherHub</button>
        </Link>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="input rounded-3xl p-2 focus:outline-white focus:outline-offset-2"
          />

          <Link
            to="/cart"
            className="flex items-center space-x-1 text-white hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </Link>

          {user ? (
            <>
              <button
                className="btn btn-primary text-white hover:underline"
                onClick={signOut}
              >
                Sign Out
              </button>
              <button
                className="flex items-center space-x-1 text-white hover:underline"
                onClick={signOut}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className="flex items-center space-x-1 text-white hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </Link>
            </>
          )}

          <Link to="/create">
            <button className="text-white hover:underline">Create Event</button>
          </Link>
        </div>
      </div>

      <div className="bg-stone-500 shadow-md w-full mt-4 flex justify-center items-center p-4">
        <nav>
          <ul className="flex space-x-6 text-white">
            <Link to="/">
              <li className="hover:underline cursor-pointer">Home</li>
            </Link>
            <Link to="/shows">
              <li className="hover:underline cursor-pointer">Shows</li>
            </Link>
            <Link to="/events">
              <li className="hover:underline cursor-pointer">Events</li>
            </Link>
            <Link to="/concerts">
              <li className="hover:underline cursor-pointer">Concerts</li>
            </Link>
            <Link to="/culture">
              <li className="hover:underline cursor-pointer">Culture</li>
            </Link>
            <Link to="/venues">
              <li className="hover:underline cursor-pointer">Venues</li>
            </Link>
            <Link to="/venues">
              <li className="hover:underline cursor-pointer">Favourite</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
