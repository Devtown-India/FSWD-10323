import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = ({ changeView }) => {
  const auth = useSelector((state) => state.auth);
  return (
    <nav
      style={{
        background: "#0E131F",
      }}
      className="bg-white-800 shadow-md w-full"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="inset-y-0 left-0 flex items-center">
            <img
              className="block lg:hidden h-10 w-auto"
              src="https://www.svgrepo.com/show/384978/donut-doughnut-sweet-dessert-food-fastfood.svg"
              alt="Logo"
            />
            <img
              className="hidden lg:block h-10 w-auto"
              src="https://www.svgrepo.com/show/384978/donut-doughnut-sweet-dessert-food-fastfood.svg"
              alt="Logo"
            />
          </div>
          <div className="flex w-2/3 items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                style={{
                  borderBottom: "1px solid #ffbf00",
                }}
                type="text"
                id="simple-search"
                className="
                rounded-md
                focus:outline-none
                bg-white-50  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                placeholder="Search post by name..."
                required=""
              />
              {/*
              loader
               <div
                style={{
                  borderBottom: "1px solid dodgerblue",
                  height: "2px",
                }}
                className="absolute left-0 flex items-center pl-3 pointer-events-none"
              ></div> */}
            </div>
          </div>

          <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative">
              {auth.loaded && (
                <div>
                  <button
                    className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:shadow-solid"
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <span className="bg-yellow-500 rounded-full h-8 w-8 flex items-center justify-center">
                      <span className="text-white font-medium">
                        {auth.user.initials}
                      </span>
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
