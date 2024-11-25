import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { registertrue } from "../App";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const { value, toggleValue } = useContext(registertrue);

  return (
    <div>
      <nav className="w-full   top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex   items-center justify-between py-3 md:py-5 md:block">
              <div className=" flex grid-cols">
                <div className=" flex ">
                  <img
                    src={logo}
                    width={40}
                    height={40}
                    alt="logo"
                    className=" active:border-none rounded-full"
                  />
                </div>
                <div className="pt-1 pl-4 text-xl    ">MEDWAY</div>
              </div>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block h-auto" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                {value ? (
                  <>
                    <button to="/profile">
                      <li className=" flex text-xl  bg-clip-text py-2 md:px-6 text-center border-b-2 md:border-b-0   border-black  md:hover:text-black md:hover:bg-transparent ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6  bg-lime-400 rounded-full m-2 "
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      </li>
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <li className="pb-6 text-xl   bg-clip-text  py-2 md:px-6 text-center border-b-2 md:border-b-0   border-black  md:hover:text-black md:hover:bg-transparent">
                        Log In
                      </li>
                    </Link>
                    <Link to="/register">
                      <li className="pb-6 text-xl text-[rgb(58,184,38)] bg-clip-text  py-2 md:px-6 text-center border-b-2 md:border-b-0   border-black  md:hover:text-lime-400 md:hover:bg-transparent">
                        Register
                      </li>
                    </Link>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
