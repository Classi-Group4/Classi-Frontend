'use client';

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";



export default function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checked, setChecked] = useState(false); 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleCheck = () => {
    setChecked(!checked);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
     
    try {
      if (checked){
        const res = await axios.post(
          "http://127.0.0.1:8000/teacher/login/",
          formData
          
        ); console.log(res.data.status);
        if (res.data.status == "success") {
          setIsLoggedIn(true);
          localStorage.setItem("role", "teacher");
          localStorage.setItem("email", formData.email);
  
          localStorage.setItem("isLoggedIn", true);
        }
      }else {
        const res = await axios.post(
          "http://127.0.0.1:8000/student/login/",
          formData
        );console.log(res.data.status);
        if (res.data.status == "success") {
          setIsLoggedIn(true);
               
          localStorage.setItem("role", "student");
          localStorage.setItem("email", formData.email);
          localStorage.setItem("isLoggedIn", true);
        }
      }
             

      }
    catch (err) {
      console.error(err);
    }
  };
  const handleLogout = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn) {
      setIsLoggedIn(loggedIn);

    } else {
      setIsLoggedIn(loggedIn);
    }
  }, []);
  return (
    <div className=" h-screen w-screen ">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0 ">
        <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 
		bg-white sm:mx-0 bg-opacity-70  drop-shadow-lg  rounded-md shadow-md"
          style={{ height: "500px" }}
        >
          <div className="flex flex-col w-full md:w-1/2 p-4 ">
            <div className="flex flex-col flex-1 justify-center mb-8">
              <h1 className="text-4xl text-center font-thin">Welcome Back</h1>
              <div className="w-full mt-4">
                {!isLoggedIn && <form
                  onSubmit={handleSubmit}
                  className="form-horizontal w-3/4 mx-auto bg-opacity-70  drop-shadow-lg  rounded-md shadow-md"
                  method="POST"
                  action="#"
                >
                  <div className="flex flex-col mt-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      className="mr-2"
                    />{" "}
                    <label htmlFor="remember" className="text-sm text-grey-dark">
                      Remember Me
                    </label>
                  </div>
                  <div className="flex flex-col mt-8">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                    >
                      Login
                    </button>
                    <button
                      onClick={handleLogout}
                      className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                    >
                      Logout
                    </button>
                    
                  </div>
                </form>}
                {isLoggedIn && <a href="/">Go to home</a>}
                <br></br>
                <br></br>
                {!isLoggedIn && <div>
                  <input
                      type="checkbox"
                      value="student"
                      name="remember"
                      id="remember"
                      checked={checked}
                      onChange={handleCheck}
                      className="mr-2"
                  />Log in as a Teacher 
                </div>}
                <div className="text-center mt-4">
                  <a
                    className="no-underline hover:underline text-blue-dark text-xs"
                    href="{{ route('password.request') }}"
                  >
                    Forgot Your Password?
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hidden md:block md:w-1/2 rounded-r-lg
				bg-[url(https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80)] 

			"
            style={{ backgroundSize: "cover", backgroundPosition: "center" }}
          ></div>
        </div>
        {isLoggedIn && <div>Still Logged in</div>}
      </div>
    </div>
  );
}
