import { useState } from "react";
import React from "react";
import Profile from "../assets/profile.jpg";
import { useFormik } from "formik";
import { basicSchema } from "./schamas/schama";
import converttoBase64 from "./schamas/Convert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
 
  const [error, setError] =useState("")

  const handleRegister = async (values) => {
   
    try {
      const { data} = await axios.post("http://localhost:8083/auth/register", values);
      if (data.error) {
        setError(data.error);
      } else {
        toast.success("Register successful");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [file, setFile] = useState();

  const onSubmit = async (values) => {
    values = await Object.assign(values, { profile: file || "" });
    handleRegister(values);
   
    console.log(values);
  };

  const {
    values,

    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      accounttype: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  const onOpload = async (e) => {
    const base64 = await converttoBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div className="flex justify-center items-center h-screen">

    <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-[rgb(58,184,38)] sm:px-6 md:px-8 lg:px-10 justify-items-center m-3">
      <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-3xl dark:text-white">
        Create New Account
      </div>
      <div className="mt-8">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center ">
            <div className="flex items-center">
              <label htmlFor="profile">
                {" "}
                <img
                  src={file || Profile}
                  className="rounded-full w-[120px] max-h-[140px]"
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
          <div className="flex items-center justify-center pb-5">
            <div className="flex items-center">
              {" "}
              <p className="text-xs text-gray-200">Upload Profile</p>
            </div>
          </div>

          <div className="flex flex-col mb-2">
            <div className="flex relative ">
              <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                </svg>
              </span>
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                value={values.fname}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.fname && touched.fname ? "input-error" : ""}
              />
            </div>
            {errors.fname && touched.fname && (
              <p className="text-xs text-red-500">{errors.fname}</p>
            )}
          </div>

          <div className="flex flex-col mb-2">
            <div className="flex relative ">
              <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                </svg>
              </span>
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                value={values.lname}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.lname && touched.lname ? "input-error" : ""}
              />
            </div>
            {errors.lname && touched.lname && (
              <p className="text-xs text-red-500">{errors.lname}</p>
            )}
          </div>

          <div className="flex flex-col mb-2">
            <div className="flex relative ">
              <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <select
                className={
                  errors.accounttype && touched.accounttype
                    ? "input-error"
                    : ""
                }
                name="accounttype"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option className="text-gray-500" value="">
                  Choose a salutation ...
                </option>

                <option value="buyer">buyer</option>
                <option value="seller">seller</option>
              </select>
            </div>
            {errors.accounttype && touched.accounttype && (
              <p className="text-xs text-red-500">{errors.accounttype}</p>
            )}
          </div>

          <div className="flex flex-col mb-2">
            <div className="flex relative ">
              <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                </svg>
              </span>
              <input
                type="text"
                className={errors.email && touched.email ? "input-error" : ""}
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your email"
              />
            </div>
            {errors.email && touched.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col mb-2">
            <div className="flex relative ">
              <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                </svg>
              </span>
              <input
                type="password"
                className={
                  errors.password && touched.password ? "input-error" : ""
                }
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your password"
              />
            </div>
            {errors.password && touched.password && (
              <p className="text-xs text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="flex flex-col mb-6">
            <div className="flex relative ">
              <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                </svg>
              </span>
              <input
                type="password"
                className={
                  errors.confirmPassword && touched.confirmPassword
                    ? "input-error"
                    : ""
                }
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="comform password"
              />
            </div>
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="text-xs text-red-500">{errors.confirmPassword}</p>
            )}
          </div>
          {error && (
            <div className="flex justify-center items-center m-1 text-red-500  text-sm">
              {error}
            </div>
          )}

          <div className="flex w-full">
            <button
              type="submit"
              className="py-2 px-4 bg-gray-800 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center mt-6">
        <Link
          to="/login"
          className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
        >
          <span className="ml-2">Already have an account ?</span>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default Register;
