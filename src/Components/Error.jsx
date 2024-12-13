import React, { useState } from "react";

const FunnyErrorPopup = () => {
  const [showError, setShowError] = useState(true);

  const closeError = () => {
    setShowError(false);
  };

  return (
    <div className=" flex justify-center items-center">
      {showError && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-300 border-4 border-red-500 p-8 rounded-xl shadow-xl flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">
            Oops! Something went wrong...
          </h2>
          <p className="text-lg text-center text-gray-800 mb-4">
            <span role="img" aria-label="flushed face">
              😳
            </span>{" "}
            It looks like we broke the internet. Please try again later.
          </p>
          <button
            onClick={closeError}
            className="bg-red-500 text-white p-3 rounded-full font-semibold hover:bg-red-700 transition"
          >
            Close Error
          </button>
        </div>
      )}
    </div>
  );
};

export default FunnyErrorPopup;
