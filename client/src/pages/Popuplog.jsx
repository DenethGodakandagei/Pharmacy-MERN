import React from "react";
import { Link } from "react-router-dom";
import Close from "../components/components_staf/Close";

const Popuplog = () => {
  return (
    <div>
      {" "}
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-[rgb(58,184,38)] sm:px-6 md:px-8 lg:px-10 justify-items-center m-3">
          <Close />
          <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-3xl dark:text-white">
            Login To Your Account
          </div>
          <div className="mt-8">
            <Link to="/login">
              <button
                type="submit"
                className="py-2 px-4  bg-gray-800 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  "
              >
                Login
              </button>
            </Link>
          </div>

          <div className="flex items-center justify-center mt-6">
            <div
              href="#"
              target="_blank"
              className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white pb-5"
            >
              <span className="ml-2">You don&#x27;t have an account?</span>
            </div>
          </div>
          <Link to="/register">
            <button
              type="submit"
              className="py-2 px-4  bg-gray-800 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  "
            >
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Popuplog;
