import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Upload from "../assets/upload.png";
import Spinner from "../components/components_staf/Spinner";
import converttoBase64 from "./schamas/Convert";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Addmedicine = () => {
  const [file, setFile] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [type, setType] = useState("");
  const [manufacture, setManufacture] = useState("");
  const [Milligrams, setMilligrams] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveMedicine = () => {
    const data = {
      name,
      price,
      expireDate,
      quantity,
      type,
      manufacture,
      Milligrams,
      itemImg: file || "",
    };
    setLoading(true);
    axios
      .post("http://localhost:8000/medicine", data)
      .then(() => {
        console.log(data)
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error check console");
        console.log(error);
      });


  };

  const onOpload = async (e) => {
    const base64 = await converttoBase64(e.target.files[0]);
    setFile(base64);
  };
  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center  m-3">
        {loading ? <Spinner /> : ""}
        <form className="w-full max-w-lg">
      
       
         
          <div className="flex flex-wrap -mx-3 mb-6">
            
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Medicine Name
              </label>
              <input
                name="name"
                className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Expire Date
              </label>
              <input
                name="expireDate"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="date"
                value={expireDate}
                onChange={(e) => setExpireDate(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                PRICE
              </label>
              <input
                name="price"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                quantity
              </label>
              <input
                name="quantity"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                manufactured by
              </label>
              <input
                name="manufacture"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                value={manufacture}
                onChange={(e) => setManufacture(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Medicine type
              </label>
              <div className="relative">
                <select
                  name="type"
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option  selected="selected" value={"Tablet"}>Tablet</option>
                  <option value={"Capsule"}>Capsule</option>
                  <option value={"Liquid"}>Liquid</option>
                  <option value={"Other"}>Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-3/4 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                Milligrams
              </label>
              <input
                name="Milligrams"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                value={Milligrams}
                onChange={(e) => setMilligrams(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                type
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>mg</option>
                  <option>ml</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
              </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="flex items-center">
              <label htmlFor="profile">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold m-2"
                for="grid-city"
              >
                Opload Medicine Image
              </label>
                <img
                  src={file || Upload}
                  className="w-[250px] "
                  alt="Profile"
                />
              </label>
              <input
                 onChange={onOpload}
                type="file"
                id="profile"
                name="profile"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              </div>
            <div className="w-full  px-3 mb-6 md:mb-0 m-5">
              <button
                className="py-2 px-4  bg-gray-800 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  "
                onClick={handleSaveMedicine}
              >
                Add medicine
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addmedicine;
