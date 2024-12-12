const Error = () => {
  return (
    <>
      <div role="alert" className="alert flex justify-center items-center mt-4">
        <div className="card-actions items-center text-center bg-red-500 border border-red-500 rounded-md p-4 shadow-md">
          <p className="text-white text-lg mb-2">Something went wrong! :(</p>
          <div className="flex gap-2 justify-center">
            <button className="text-white bg-transparent border hover:text-white transition rounded-md px-4 py-1">
              Deny
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
