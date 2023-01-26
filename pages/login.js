import React from "react";
import { demoResume } from "../lib/data";
import Link from "next/link";

const login = () => {
  const resume = demoResume();

  return (
    <div>
      <img
        className="w-[100%]"
        src="https://cvr.ac.in/home4/images/college-overview.jpg"
        alt="no image"
      />
      <div className="absolute top-10 left-56 mt-16 ml-96 border-b-4 border-black h-40">
        <h1 className="font-semibold text-5xl border-b-4 border-black py-4 px-20 from-neutral-600">
          Faculty Management System
        </h1>
        <div className="bg-gray-200 opacity-80 p-4 mt-4 h-96">
          <form action="">
            <div className="my-16 ml-0">
              <label className="relative text-3xl font-semibold p-24">
                Email Address
              </label>
              <input
                className="border-2 border-black absolute right-60 p-2 rounded-md"
                type="email"
                name="email"
                id="email"
                placeholder="Type your email"
                required
              ></input>
            </div>
            <div className="my-6 ml-0">
              <label className="relative text-3xl p-24 font-semibold">
                Password
              </label>
              <input
                className="border-2 border-black absolute right-60 p-2 rounded-md"
                type="password"
                name="password"
                id="password"
                placeholder="Type your password"
                required
              ></input>
            </div>
            <button
              // onClick={authenticate()}
              className="border-2 border-black px-7 hover:bg-green-600 py-2 mt-6  rounded-xl bg-green-500 ml-80"
            >
              <Link href="/home">LOGIN</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
