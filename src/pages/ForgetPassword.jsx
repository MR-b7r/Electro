import React, { useState } from "react";
import logo from "../assets/icons/logo-base.svg";
import forgotPassword from "../assets/images/forgot_password.svg";

import { Spinner } from "@chakra-ui/react";
import useforgetPassword from "../features/authentication/useForgetPassword";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const { forgetPassword, isPending } = useforgetPassword();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;

    forgetPassword(email);
  }
  return (
    <div className="flex min-h-screen items-center justify-center lg:flex-row flex-col px-8 lg:px-10 py-8 bg-gray-100 dark:bg-black-03">
      {" "}
      <div className="flex-1 flex justify-center flex-col w-full">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700  dark:text-gray-200 ">
            Please enter your Email
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  disabled={isPending}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 font-semibold text-gray-900 dark:text-gray-100   shadow-sm ring-1 ring-inset dark:bg-black-01 dark:placeholder-gray-300 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-yellow-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                type="reset"
                disabled={isPending}
                onClick={() => navigate(-1)}
                className="flex w-full justify-center items-center rounded-md border-2 border-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-800 dark:text-white shadow-sm hover:bg-gray-200 dark:hover:bg-black-01 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition duration-200 "
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isPending}
                className="flex w-full justify-center items-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition duration-200 "
              >
                {!isPending ? "Reset Password" : <Spinner />}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1 mt-10 lg:mt-0">
        <img src={forgotPassword} alt="Signup" />
      </div>
    </div>
  );
};

export default ForgetPassword;
