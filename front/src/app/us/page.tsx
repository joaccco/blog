
const Us = () => {
  return (
    <div className="h-86 w-full bg-blue-400 rounded-3xl shadow-md">
      <div className="h-1/2 w-full flex justify-between items-baseline px-3 py-5">
        <h1 className="text-white">Profile</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>

      <div className="bg-white h-1/2 w-full rounded-3xl flex flex-col justify-around items-center">
        <div className="w-full h-1/2 flex justify-between items-center px-3 pt-2">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-gray-500 text-xs">Orders</h1>
            <h1 className="text-gray-600 text-sm">340</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-gray-500 text-xs">Spent</h1>
            <h1 className="text-gray-600 text-sm">$2,004</h1>
          </div>
        </div>
        <div className="w-full h-1/2 flex flex-col justify-center items-center">
          <h1 className="text-gray-700 font-bold">Maria R.</h1>
          <h1 className="text-gray-500 text-sm">New York, USA</h1>
        </div>
      </div>
    </div>
  );
};

export default Us;