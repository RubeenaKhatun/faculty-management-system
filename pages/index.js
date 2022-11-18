import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import connectMongo from "../utils/connectMongo";
import Test from "../models/testModel";
import Link from "next/link";

export default function Home({ tests }) {
  return (
    <div>
      <Head>
        <title>Faculty Management System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          <span className="ml-3 text-4xl text-indigo-600 font-medium">
            Faculty Management System
          </span>
        </a>
        <nav className="md:ml-auto flex items-end justify-center mr-20">
          <a href="/" className=" hover:text-gray-900 text-2xl mr-20">
            HOME
          </a>
          <a href="/login" className=" hover:text-gray-900 text-2xl">
            LOGIN
          </a>
        </nav>
      </div>
      <img
        className="w-[100%]"
        src="https://cvr.ac.in/home4/images/college-overview.jpg"
        alt="no image"
      />

      <div>
        <button onClick={createTest}>CreateTest</button>
      </div>
    </div>
  );
}

// <main className="m-10 p-10">
//         <button onClick={createTest}>CreateTest</button>
//       </main>

//       <div className="">
//         {tests.map((test) => (
//           <a href="" key={test._id} className="border-2">
//             <h2>
//               {test.email} &rarr;<span>{test.password}</span>
//             </h2>
//           </a>
//         ))}
//       </div>

// crud operations

export const getServerSideProps = async () => {
  try {
    console.log("connecting to mongo");
    await connectMongo();
    console.log("connected to mongo");

    console.log("fetching a document");
    const tests = await Test.find();
    console.log("fetched document");
    return {
      props: {
        tests: JSON.parse(JSON.stringify(tests)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

export const createTest = async () => {
  const randomNum = Math.floor(Math.random() * 1000);
  const res = await fetch("/api/test/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: `Test ${randomNum}`,
      email: `test${randomNum}@test.com`,
    }),
  });
  const data = await res.json();
  console.log(data);
};
