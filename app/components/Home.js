import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <section className="relative  h-screen w-screen bg-[url(https://umanitoba.ca/extended-education/sites/extended-education/files/styles/21x9_1100w/public/2021-05/Courses-header_1.jpg?itok=DPBp7WmX)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let us find you
              <strong className="block font-extrabold text-black-700">
                The best Courses
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              In Classi you will be able to search for many courses in many
              categories so you can find whatever course that fits your needs to
              develop and improve your skills and knowledge at a specific
              interest of yours
            </p>
            <li>Choose the category of your interest</li>
            <li>Find the best class for you</li>
            <li>Add it to your subscription list and start learning</li>
            <li>Enjoy the journey</li>
            <br></br>
            <br></br>
            <br></br>
            <span className="ml-2 w-full rounded  px-20 py-3 text-sm font-medium text-black shadow sm:w-auto">
              {" "}
              To Become A Member
            </span>

            <div className="mt-8 flex flex-wrap gap-4 text-center ">
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
            </div>
            <br>
            </br>
            <div>

            </div>
          </div>
        </div>
      </section>
      <section>
        <div></div>
      </section>
    </div>
  );
}
