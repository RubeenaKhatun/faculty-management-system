import React from "react";
import { demoResume } from "../../lib/data";

const index = () => {
  const resume = demoResume();

  return (
    <div>
      <div className="flex p-5 items-center bg-slate-200 shadow-2xl">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-600 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 py-10 text-5xl text-indigo-600 font-medium">
            Faculty Management System
          </span>
        </a>
      </div>
      <div className="grid grid-cols-5">
        <div className="bg-indigo-600 px-10 text-white font-semibold py-20 mt-3 ml-3">
          <ul>
            <li className="p-5 text-2xl">
              <a href="/home">DASHBOARD</a>
            </li>
            <li className="p-5 text-2xl">
              <a href="/home/profile">PROFILE</a>
            </li>
            <li className="p-5 text-2xl">
              <a href="/home/subjects">SUBJECTS</a>
            </li>
            <li className="p-5 text-2xl">
              <a href="/home/workshops">WORKSHOPS</a>
            </li>
            <li className="p-5 text-2xl">
              <a href="/home/publications">PUBLICATIONS</a>
            </li>
            <li className="p-5 text-2xl">
              <a href="/home/books">BOOKS</a>
            </li>
            <li className="p-5 text-2xl">
              <a href="/home/awards">AWARDS</a>
            </li>
            <li className="p-5 text-2xl">
              <a href="/home/reports">REPORTS</a>
            </li>
            <li className="p-5 text-2xl">
              <button className="p-3 text-2xl border-2 border-white rounded-lg">
                <a href="/">LOGOUT</a>
              </button>
            </li>
          </ul>
        </div>
        <div className="col-span-4">
          <div className="text-black text-2xl font-semibold p-5 mx-3 mt-3">
            <h1>Publications</h1>
          </div>
          <div className="bg-slate-200 m-3">
            <div className="grid grid-cols-2 gap-8 p-14">
              {resume.publications.map((item) => (
                <div className="p-20 bg-red-300 h-60">
                  <h1 className="text-2xl font-bold relative m-0.5">
                    {item.name}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
