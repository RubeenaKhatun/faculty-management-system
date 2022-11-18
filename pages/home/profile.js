import React from "react";
import { demoResume } from "../../lib/data";
import Link from "next/link";

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
          <span className="ml-3 py-10 text-5xl text-indigo-700 font-medium">
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
            <h1>PROFILE</h1>
          </div>
          <div className="flex align-middle justify-center bg-zinc-400">
            <div className="container bg-white m-10">
              <div className="grid grid-cols-3">
                <div className=" bg-indigo-600">
                  <div className="ml-8 bg-gray-200 p-4">
                    <div className="">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                        alt="ProfilePhoto"
                      />
                      <h1 className="text-indigo-700 text-2xl font-semibold mt-4 mb-1">
                        Personal Details
                      </h1>
                      <div>
                        <i className="bx bxs-user"></i>
                        <span class="text-4xl font-semibold ">
                          {resume.personal.firstName} {resume.personal.lastName}
                        </span>
                      </div>
                      <div>
                        <i className="bx bxs-mail"></i>
                        <span class="text-xl font-semibold m-0.5">
                          {resume.personal.email}
                        </span>
                      </div>
                      <div>
                        <i className="bx bxs-phone"></i>
                        <span class="text-xl font-semibold m-0.5">
                          {resume.personal.phone}
                        </span>
                      </div>
                      <div>
                        <i className="bx bxs-calendar"></i>
                        <span class="text-xl font-semibold m-0.5">
                          {resume.personal.dob}
                        </span>
                      </div>
                      <div>
                        <h1 className="text-indigo-700 text-2xl font-semibold mt-4 mb-1">
                          Social
                        </h1>
                        {resume.social.map((item) => (
                          <div className="text-xl font-semibold m-0.5">
                            <a href="{item.url}">{item.network}</a>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h1 className="text-indigo-700 text-3xl font-semibold mt-4 mb-1">
                        Subjects
                      </h1>
                      {resume.skills.map((item) => (
                        <div>
                          <h1 className="text-xl font-semibold m-0.5">
                            {item.name}
                          </h1>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h1 className="text-indigo-700 text-3xl font-semibold mt-4 mb-1">
                        Awards
                      </h1>
                      {resume.awards.map((item) => (
                        <div className="py-1">
                          <h1 className="text-xl font-bold relative m-0.5">
                            {item.name}
                          </h1>
                          <p className="text-xl font-semibold m-0.5">
                            {item.awarder}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h1 className="text-indigo-700 text-3xl font-semibold mt-3 mb-1">
                        Hobbies
                      </h1>
                      {resume.hobbies.map((item) => (
                        <div>
                          <h1 className="text-xl font-semibold m-0.5">
                            {item.name}
                          </h1>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h1 className="text-indigo-700 text-3xl font-semibold mt-3 mb-1">
                        Languages
                      </h1>
                      {resume.languages.map((item) => (
                        <div>
                          <h1 className="text-xl font-semibold m-0.5">
                            {item.name}
                          </h1>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-span-2 p-6">
                  <h1 className="text-indigo-700 text-4xl font-">
                    {resume.personal.firstName} {resume.personal.lastName}
                  </h1>
                  <div>
                    <h1 className="text-indigo-700 text-3xl font-semibold mt-4">
                      Profile
                    </h1>
                    <p className="text-xl">{resume.objective}</p>
                  </div>
                  <div>
                    <h1 className="text-indigo-700 text-3xl font-semibold mt-3 mb-1">
                      Work
                    </h1>
                    {resume.work.map((item) => (
                      <div className="py-1">
                        <h1 className="text-xl font-bold relative">
                          {item.company}
                          <span className="text-xl text-indigo-700 absolute right-0">
                            {item.from} - {item.to}
                          </span>
                        </h1>
                        <p className="text-xl font-semibold">
                          {item.designation}
                        </p>
                        <p class="text-xl">{item.summary.data}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h1 className="text-indigo-700 text-3xl font-semibold mt-3 mb-1">
                      Education
                    </h1>
                    {resume.education.map((item) => (
                      <div className="py-1">
                        <h1 className="text-xl font-bold relative">
                          {item.institution}
                          <span className="text-xl text-indigo-700 absolute right-0">
                            {item.startDate} - {item.endDate}
                          </span>
                        </h1>
                        <p className="text-xl font-semibold">
                          {item.fieldOfStudy}
                        </p>
                        <p class="text-xl">{item.summary.data}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h1 className="text-indigo-700 text-3xl font-semibold mt-3 mb-1">
                      Workshops
                    </h1>
                    {resume.projects.map((item) => (
                      <div className="py-1">
                        <h1 className="text-xl font-bold relative">
                          {item.name}
                          <span className="text-xl text-indigo-700 absolute right-0">
                            {item.from} - {item.to}
                          </span>
                        </h1>
                        <p className="text-xl font-semibold">{item.website}</p>
                        <p class="text-xl">{item.summary.data}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h1 className="text-indigo-700 text-3xl font-semibold mt-3 mb-1">
                      Certifications
                    </h1>
                    {resume.certifications.map((item) => (
                      <div className="py-1">
                        <h1 className="text-xl font-bold relative">
                          {item.title}
                          <span className="text-xl text-indigo-700 absolute right-0">
                            {item.date}
                          </span>
                        </h1>
                        <p className="text-xl font-semibold">{item.issuer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
