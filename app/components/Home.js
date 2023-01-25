'use client';
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import cookieCutter from "cookie-cutter";


export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {

    const jwt = cookieCutter.get('jwt');

    const loggedIn = localStorage.getItem("isLoggedIn");
    if (jwt != 0) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }


  }, []);


  return (
    <div>
      <section className="relative  h-screen w-screen bg-[url(https://umanitoba.ca/extended-education/sites/extended-education/files/styles/21x9_1100w/public/2021-05/Courses-header_1.jpg?itok=DPBp7WmX)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <br/>
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let us connect you
              <strong className="block font-extrabold text-black-700">
                to the best courses
              </strong>
            </h1>
            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              In Classi, you can search for various courses in many categories to choose whichever course best suits your needs to develop and improve your skills and knowledge in a certain area of interest.
            </p>
            <br></br>
            <li>Choose the category of your interest</li>
            <li>Find the best class for you</li>
            <li>Add it to your subscription list and start learning</li>
            <li>Enjoy the journey</li>
            <br></br>
            {!isLoggedIn && <span className="ml-2 w-full rounded  px-20 py-3 text-sm font-medium text-black shadow sm:w-auto">
              {" "}
              To Become A Member
            </span>}

            {!isLoggedIn && <div className="mt-8 flex flex-wrap gap-4 text-center ">
              <a
                href="/signup"
                className="block w-full rounded bg-gray-800 px-12 py-3 text-sm font-medium text-white shadow hover:bg-gray-800 focus:outline-none focus:ring active:bg-gray-500 sm:w-auto"
              >
                Sign Up
              </a>
              <br></br>
              <a
                href="/loginform"
                className=" block w-full rounded bg-white px-12 py-3 text-sm font-medium text-gray-800 shadow hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500 sm:w-auto"
              >
                Log in
              </a>
            </div>}
            {isLoggedIn && <div className="mt-8 flex flex-wrap gap-4 text-center ">
              <br>
              </br>
              <div>
                <p className="sm:text-xl sm:leading-relaxed">Start learning now!</p>
                <p>you can browse through our collection of class categories to find what you want!</p>
                <br></br>
                <Link href='/categories'>
                <button
                  class="text-white py-2 px-4 uppercase rounded bg-[#7D9D9C] hover:bg-[#576F72] shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                >
                  Categories
                </button>
                </Link>
              </div>
              <div></div></div>}
          </div>
        </div>
      </section>
      <section>
        <div>
        </div>
      </section>
    </div>
  );
}
