"use client";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function signup() {
  // const handleLogout = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };
  const { push } = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [is_teacher, setTeacher] = useState(false);
  const [is_student, setStudent] = useState(true);
  // let is_teacher = false
  // let is_student = true
  let role = ""
  // const [isTeacher,setTeacher] = useState(false);
  //   const handleCheck = () => {
  //     is_teacher = !is_teacher;
  //     is_student = !is_student;
  //     if (is_teacher) {
  //       role = "teacher";
  //       is_teacher = true;
  //       is_student = false;
  //     } else {
  //       role = "student";
  //       is_teacher = false;
  //       is_student = true;
  //     }
  //     console.log(is_teacher);
  //     console.log(is_student);
  //     console.log(role);
  // };
  const handleCheck = () => {
    setTeacher(!is_teacher);
    setStudent(!is_student);
    
    // console.log(is_teacher);
    // console.log(is_student);
    // console.log(role);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const is_teacher = isTeacher
    // const is_student = !isTeacher
    if (is_teacher) {
      role = "teacher";
    } else {
      role = "student";
    }
    try {
      const res = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          is_teacher,
          is_student,
          role,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data) {
        push("/loginform");
      }
      console.log(body);
    } catch (err) {
      console.error(err);
    }
  };
  // const handleCheck = () => {
  //   setTeacher(!isTeacher);
  // };
  return (
    <>
      <div className="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-cover bg-center bg-no-repeat bg-[url(https://media.istockphoto.com/id/1290864946/photo/e-learning-education-concept-learning-online.jpg?s=170667a&w=is&k=20&c=4O9YYitL-Y2d3YiGGO4YSOBvO4EMrP4KuLxiJjnZjU0=)]">
        <div className="content text-5xl text-center md:text-left">
          <h1 className="text-4xl text-blue-500 font-bold">
            Create New Account
          </h1>
          <p className="text-white mt-6 ">
            Welcome to our Site, Let's learn Together !
          </p>
        </div>
        <div className="container mx-auto flex flex-col items-center">
          <div className="rounded-xl bg-gray-300  bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
            <div className="text-black">
              <div className="mb-8 flex flex-col items-center">
                <img
                  src="https://cdn.discordapp.com/attachments/1062676267507384395/1064961503456931950/classi-high-resolution-logo-color-on-transparent-background.png"
                  width="150"
                  alt=""
                  srcSet=""
                />
              </div>
              <form onSubmit={handleSubmit}>
                <p></p>
                <div className="mb-4 text-lg">
                  <input
                    className="rounded-3xl border-none  bg-blue-100  bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 text-lg">
                  <input
                    className="rounded-3xl border-none  bg-blue-100  bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4 text-lg">
                  <input
                    className="rounded-3xl border-none  bg-blue-100  bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <input
                    type="checkbox"
                    value="student"
                    name="remember"
                    id="remember"
                    // checked={checked}
                    onChange={handleCheck}
                    class="mr-2"
                  />
                  Sign up as a Teacher
                </div>
                {/* <div>
                  <input
                      type="checkbox"
                      value="Teacher"
                      name="remember"
                      id="remember"
                      class="mr-2"
                      onChange={handleCheck}
                      checked={isTeacher}
                  />Sign Up as a Teacher 
                </div> */}
                <div className="mt-8 flex justify-center text-lg text-black">
                  <button
                    type="submit"
                    className="rounded-3xl  bg-blue-500  bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-gray-600"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
