import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../components/components_staf/Spinner";
import NavBar from "../components/NavBar";
import moment from "moment";
import { useContext } from "react";
import { registertrue } from "../App";
import { useNavigate } from "react-router-dom";

const Bymedicine = () => {
  const navigate = useNavigate();
  const [medicine, setMedicine] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectquantity, setSelectquantity] = useState(0);
  const [amount, setAmount] = useState();
  const { value, toggleValue } = useContext(registertrue);
  const { error, setError } = useState("");

  const checklogin = () => {
    if (!value) {
      navigate("/loginorregister");
    } else {
      if (amount === 0) {
        alert("select Items");
      } else if (selectquantity > medicine.quantity) {
        alert("item error");
      } else alert("item added");
    }
  };

  const decrement = () => {
    if (0 < selectquantity) {
      setSelectquantity(selectquantity - 1);
    }
    if (medicine.quantity < selectquantity) {
      setSelectquantity(medicine.quantity);
    }
  };
  const increment = () => {
    if (medicine.quantity > selectquantity) {
      setSelectquantity(selectquantity + 1);
    }
  };
  const calculateAmount = () => {
    setAmount(selectquantity * medicine.price);
  };

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/medicine/${id}`)
      .then((response) => {
        setMedicine(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    calculateAmount();
  }, [selectquantity, medicine.price]);
  return (
    <div>
      <NavBar />

      {loading ? (
        <Spinner />
      ) : (
        <div className=" py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4 flex ">
                <div className="  h-[460px] rounded-lg  mb-4 w-full h-full object-cover">
                  <div className="">
                    <div className="rounded-t-lg  w-full max-w-m h-[200px]">
                      <div className="flex items-center justify-center ">
                        <div className="flex items-center w-full ">
                          <img
                            src={medicine.itemImg}
                            className=" bg-white    "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold  mb-2">
                  {medicine.name} ,{medicine.type} , - {medicine.Milligrams}mg
                </h2>

                <div className="flex mb-4 py-4">
                  <div className="mr-4">
                    <span className="font-bold ">Price:</span>
                    <span className="">LKR{medicine.price}</span>
                  </div>
                  <div>
                    <span className="bg-lime-500 p-2 border rounded-lg text-white">
                      In Stock
                    </span>
                  </div>
                </div>
                <div className="py-5">
                  <span className="font-bold ">
                    Expire Date :{" "}
                    {moment(medicine.expireDate).format("Do MMMM YYYY")}{" "}
                  </span>
                </div>

                <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                  <button
                    onClick={decrement}
                    className="w-20 h-full text-gray-600  border-r rounded-l   border borer-gray-500"
                  >
                    <span className="m-auto text-2xl font-thin">-</span>
                  </button>

                  <input
                    type="number"
                    className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none"
                    value={selectquantity}
                    onChange={(e) => setSelectquantity(Number(e.target.value))}
                    min="1"
                    max={medicine.quantity}
                  />

                  <button
                    onClick={increment}
                    className="w-20 h-full text-gray-600  border-l rounded-r   border bored-gray-500"
                  >
                    <span className="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
                <div className="p-4"></div>
                {medicine.quantity < selectquantity ? (
                  <>
                    {" "}
                    <span className="text-red-500">
                      {medicine.quantity} stocks in available
                    </span>
                  </>
                ) : (
                  <>
                    {" "}
                    <span>{medicine.quantity} stocks in available</span>
                  </>
                )}

                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="flex -mx-2 mb-4 py-4 ">
                  <span className="p-4 text-2xl ">Amount : LKR.{amount}</span>
                  <div>{error}</div>
                  <div className="py-2">
                    {amount == 0 || selectquantity > medicine.quantity ? (
                      <>
                        <button
                          className="w-full bg-gray-500  py-2 px-4 rounded-full font-bold text-white  rounded-lg "
                          onClick={checklogin}
                        >
                          Checkout
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="w-full bg-lime-500  py-2 px-4 rounded-full font-bold text-white  rounded-lg "
                          onClick={checklogin}
                        >
                          Checkout
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bymedicine;
