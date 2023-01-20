"use client";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


export default function signup() {
  // const handleLogout = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checked, setChecked] = useState(false); 

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn) {
      setIsLoggedIn(loggedIn);
    }
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleCheck = () => {
    setChecked(!checked);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (checked){
        const res = await axios.post(
          "http://127.0.0.1:8000/teacher/register/",
          formData
          
        ); console.log(res.data.status);

      }else {
        const res = await axios.post(
          "http://127.0.0.1:8000/student/register/",
          formData
        );console.log(res.data.status);
      }
             

      }
    catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-cover bg-center bg-no-repeat bg-[url(https://media.istockphoto.com/id/1290864946/photo/e-learning-education-concept-learning-online.jpg?s=170667a&w=is&k=20&c=4O9YYitL-Y2d3YiGGO4YSOBvO4EMrP4KuLxiJjnZjU0=)]">
        <div className="content text-5xl text-center md:text-left">
          <h1 className="text-4xl text-blue-500 font-bold">Create New Account</h1>
          <p className="text-white ">Welcome to our Site ,Let's learn Together</p>
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
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4 text-lg">
                  <input
                    className="rounded-3xl border-none  bg-blue-100  bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4 text-lg">
                  <input
                    className="rounded-3xl border-none  bg-blue-100  bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                      type="checkbox"
                      value="Teacher"
                      name="remember"
                      id="remember"
                      checked={checked}
                      onChange={handleCheck}
                      className="mr-2"
                  />Sign Up as a Teacher 
                </div>
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
