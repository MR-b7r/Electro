import React from "react";
import logo from "../assets/icons/logo-base.svg";
import { NavLink, useNavigate } from "react-router-dom";
import useLogin from "../features/authentication/useLogin";
import { useForm } from "react-hook-form";
import { Spinner } from "@chakra-ui/react";

const Login = () => {
  const { login, isPending } = useLogin();
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  function onSubmit({ email, password }) {
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSuccess: () => {
          reset();
          navigate("/home");
        },
      }
    );
  }
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100 dark:bg-black-05 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700  dark:text-gray-200 ">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                defaultValue="haithamb74@gmail.com"
                disabled={isPending}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 font-semibold text-gray-900 dark:text-gray-100   shadow-sm ring-1 ring-inset dark:bg-black-01 dark:placeholder-gray-300 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-yellow-600 sm:text-sm sm:leading-6 px-2"
                {...register("email", {
                  required: "Please Enter your Email",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please provide a valid email address",
                  },
                })}
              />
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
              <div className="text-sm">
                <NavLink
                  to={"/forget-password"}
                  className="font-semibold text-yellow-500 hover:text-yellow-600"
                >
                  Forgot password?
                </NavLink>
              </div>
            </div>
            <div className="mt-2">
              <input
                defaultValue="12345678"
                disabled={isPending}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6 px-2 dark:bg-black-01 dark:placeholder-gray-300"
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
          </div>

          <div>
            <button
              type="submit"
              disabled={isPending}
              className="flex w-full justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition duration-200 "
            >
              {!isPending ? "Log in" : <Spinner />}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-300">
          Don&apos;t have an account?{" "}
          <NavLink
            to={"/signup"}
            className="font-semibold leading-6 text-yellow-500 hover:text-yellow-600"
          >
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
