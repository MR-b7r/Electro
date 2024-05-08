import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/icons/logo-base.svg";
import { useForm } from "react-hook-form";
import useSignup from "../features/authentication/useSignup";
import { Spinner } from "@chakra-ui/react";

const Signup = () => {
  const { signup, isPending } = useSignup();
  const { register, handleSubmit, formState, reset, getValues } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSuccess: () => {
          reset();
          navigate("/login");
        },
      }
    );
  }
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100 dark:bg-black-05">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src={logo} alt="Electro" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-200">
          Create a new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-4"
          action="#"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
            >
              Full name
            </label>
            <div className="mt-2">
              <input
                disabled={isPending}
                id="fullName"
                name="fullName"
                type="fullName"
                autoComplete="fullName"
                className="block w-full rounded-md border-0 py-1.5 font-semibold text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-g dark:bg-black-01 dark:placeholder-gray-300 ray-700 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-yellow-600 sm:text-sm sm:leading-6 px-2 "
                {...register("fullName", {
                  required: "Please Enter your FullName",
                })}
              />
              <p className="error text-sm text-red-500">
                {errors?.fullName?.message}
              </p>
            </div>
          </div>

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
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 font-semibold text-gray-900 dark:text-gray-100   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 dark:bg-black-01 dark:placeholder-gray-300  focus:ring-2 focus:ring-inset focus:outline-none focus:ring-yellow-600 sm:text-sm sm:leading-6 px-2"
                {...register("email", {
                  required: "Please Enter your Email",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please provide a valid email address",
                  },
                })}
              />{" "}
              <p className="error text-sm text-red-500">
                {errors?.email?.message}
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                disabled={isPending}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-100  shadow-sm ring-1 
                ring-inset ring-gray-300  placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6 dark:bg-black-01 dark:placeholder-gray-300  px-2"
                {...register("password", {
                  required: "Please Enter a valid Password",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />{" "}
              <p className="error text-sm text-red-500">
                {errors?.password?.message}
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <label
                htmlFor="repeatPassword"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                disabled={isPending}
                id="repeatpassword"
                name="password"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-100  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700  dark:bg-black-01 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6 px-2"
                {...register("repeatpassword", {
                  required: "This field is required",
                  validate: (value) =>
                    value === getValues().password || "Passwords need to match",
                })}
              />
              <p className="error text-sm text-red-500">
                {errors?.repeatpassword?.message}
              </p>
            </div>
          </div>

          <div>
            <button
              disabled={isPending}
              type="submit"
              className="flex w-full justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition duration-200 "
            >
              {!isPending ? "Sign up" : <Spinner />}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-300">
          Already have an account?{" "}
          <NavLink
            to={"/login"}
            className="font-semibold leading-6 text-yellow-500 hover:text-yellow-600"
          >
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
