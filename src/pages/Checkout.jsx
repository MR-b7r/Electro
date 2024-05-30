import React from "react";

import secureCheckout from "../assets/images/secure_checkout.svg";

const Checkout = () => {
  return (
    <div className="flex min-h-screen items-center justify-center lg:flex-row flex-col px-8 lg:px-10 py-8 bg-gray-100 dark:bg-black-03">
      <div className="flex-1 flex justify-center flex-col w-full">
        <div className="grid min-h-screen ">
          <div className="col-span-full my-auto  ">
            <div className="mx-auto w-full max-w-lg">
              <h1 className="relative text-2xl font-medium text-gray-700 dark:text-gray-200 sm:text-3xl">
                Secure Checkout
                <span className="mt-2 block h-1 w-10 bg-yellow-600 sm:w-20"></span>
              </h1>
              <form action="" className="mt-10 flex flex-col space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold text-gray-500 "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john.capler@fang.com"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 dark:bg-black-01 py-3 px-4 text-sm  dark:placeholder-gray-300  shadow-sm outline-none transition focus:ring-2 focus:ring-yellow-500 dark:text-gray-100"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="card-number"
                    className="text-xs font-semibold text-gray-500 "
                  >
                    Card number
                  </label>
                  <input
                    type="text"
                    id="card-number"
                    name="card-number"
                    placeholder="1234-5678-XXXX-XXXX"
                    className="block w-full rounded border-gray-300 bg-gray-50 dark:bg-black-01 py-3 px-4 pr-10 text-sm outline-none dark:placeholder-gray-300 transition focus:ring-2 focus:ring-yellow-500 dark:text-gray-100"
                  />
                  <img
                    src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                    alt=""
                    className="absolute bottom-3 right-3 max-h-4"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 ">
                    Expiration date
                  </p>
                  <div className="mr-6 flex flex-wrap">
                    <div className="my-1">
                      <label htmlFor="month" className="sr-only">
                        Select expiration month
                      </label>
                      <select
                        name="month"
                        id="month"
                        className="cursor-pointer rounded border-gray-300 bg-gray-50 dark:bg-black-01 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2  focus:ring-yellow-500 dark:text-gray-100"
                      >
                        <option value="">Month</option>
                      </select>
                    </div>
                    <div className="my-1 ml-3 mr-6">
                      <label htmlFor="year" className="sr-only">
                        Select expiration year
                      </label>
                      <select
                        name="year"
                        id="year"
                        className="cursor-pointer rounded border-gray-300 bg-gray-50 dark:bg-black-01 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2  focus:ring-yellow-500 dark:text-gray-100"
                      >
                        <option value="">Year</option>
                      </select>
                    </div>
                    <div className="relative my-1">
                      <label htmlFor="security-code" className="sr-only">
                        Security code
                      </label>
                      <input
                        type="text"
                        id="security-code"
                        name="security-code"
                        placeholder="Security code"
                        className="block w-36 rounded border-gray-300  bg-gray-50 dark:bg-black-01 py-3 px-4 text-sm  dark:placeholder-gray-300 outline-none transition focus:ring-2 focus:ring-yellow-500 dark:text-gray-100 "
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="card-name" className="sr-only">
                    Card name
                  </label>
                  <input
                    type="text"
                    id="card-name"
                    name="card-name"
                    placeholder="Name on the card"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 dark:bg-black-01 py-3 px-4 text-sm  outline-none focus:ring-2 focus:ring-yellow-500 dark:text-gray-100"
                  />
                </div>
              </form>
              <p className="mt-10 text-center text-sm font-semibold text-gray-500 ">
                By placing this order you agree to the{" "}
                <a
                  href="#polices"
                  className="whitespace-nowrap text-yellow-400 underline hover:text-yellow-600"
                >
                  Terms and Conditions
                </a>
              </p>
              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center rounded bg-yellow-500 hover:bg-yellow-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-yellow-500 dark:text-gray-100 sm:text-lg"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center flex-1 mt-10 lg:mt-0">
        <img src={secureCheckout} alt="Signup" />
      </div>
    </div>
  );
};

export default Checkout;
