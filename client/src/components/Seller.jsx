import React from 'react'
import { registertrue } from "../App";
import { useContext } from "react";
import profileimg from "../assets/profile.jpg";
import { Link, useNavigate } from "react-router-dom";

const Seller = () => {
    const navigate = useNavigate();
    const { uservalue, toggleValue } = useContext(registertrue);
    const logout = () => {
      toggleValue();
      navigate('/');
    };
    console.log(uservalue);
  return (
    <>
  
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src={profileimg}
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                ></img>
                <h1 className="text-xl font-bold">
                  {uservalue.fname} {uservalue.lname}{" "}
                </h1>
                <p className="text-gray-700">{uservalue.acounttype} </p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  Email-address : {uservalue.email}
                </div>
              </div>
              <hr className="my-6 border-t border-gray-300" />
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              {uservalue.acounttype === "buyer" ? (
                <>
                  {" "}
                  <h2 className="text-xl font-bold mb-4">buyer details</h2>
                </>
              ) : (
                <>
                  {" "}
                  <h2 className="text-xl font-bold mb-4">seller details</h2>
                  <div className="flex">
                    <h2 className="text-xl mb-4">Add Your Medicines</h2>

                    <Link to={'/addmedicine'}>
                    <div><svg xmlns="http://www.w3.org/2000/svg"  	fill='none'	 viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-5 mt-1">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</div> </Link>
                  </div>
                </>
              )}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              {" "}
              <div
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              >
                Log out
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Seller