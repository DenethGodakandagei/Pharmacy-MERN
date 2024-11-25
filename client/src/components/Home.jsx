import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./components_staf/Spinner";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Home = () => {
  const [medicine, setMedicine] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/medicine")
      .then((response) => {
        setMedicine(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <NavBar />

      <div className="p-4 ">
        {loading ? (
          <Spinner />
        ) : (
          <div className=" sm:m-[90px] md:m-[30px] grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5 gap-5">
            {medicine.map((medicine, index) => (
              <div className=" top-1 right-2 w-full max-w-sm bg-white border border-[rgb(58,184,38)] rounded-lg shadow  ">
                <div className="">
                 
                <div className="rounded-t-lg  w-full max-w-m h-[200px]">

                <div className="flex items-center justify-center ">
            <div className="flex items-center">
    <img
      src={medicine.itemImg}
      className=" bg-white  max-w-m h-[210px]  "
    />
    </div>
    </div>

</div>
               
                  <div className="px-5 pb-5 ">
                 
                      <h5 className="text-xl font-semibold tracking-tight m-2">
                        {medicine.name} , {medicine.type} -{" "}
                        {medicine.Milligrams}mg
                      </h5>
                 

                    <div className="flex items-center justify-between">
                      <span className="text-3xl  ">LKR.{medicine.price}</span>
                      <Link
                        to={`/bymedicine/${medicine._id}`}
                        className="border border-[rgb(58,184,38)]  focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
