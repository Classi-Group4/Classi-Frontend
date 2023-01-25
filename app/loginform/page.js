'use client';

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import { useRouter } from "next/navigation";

import cookieCutter from 'cookie-cutter';


export default function LoginForm() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [checked,setChecked] = useState(false);
  let is_teacher = false
  let is_student = true
  let role = "student"

  const { push } = useRouter();
  const handleCheck = () => {
    // setChecked(!checked);
    is_teacher = !is_teacher
    is_student = !is_student
    if (is_teacher){
      role = "teacher"
    } else{
      role="student"
    }
    // console.log(role)
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({  email, password,is_teacher,is_student,role }),
        
      });
      
      const data = await res.json();
      
      console.log(data.jwt)
      
      if (data.jwt){
        cookieCutter.set('jwt', data.jwt)
        push('/');
      } else {
        console.log("incorrect user details")
        console.log(res)
      }
      

    } catch (err) {
      console.error(err);
    }
  }
  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
     
  //   try {
  //     if (checked){
  //       const res = await axios.post(
  //         "http://127.0.0.1:8000/teacher/login/",
  //         formData
          
  //       ); console.log(res.data.status);
  //       if (res.data.status == "success") {
  //         setIsLoggedIn(true);
               
  
  //         localStorage.setItem("isLoggedIn", true);
  //       }
  //     }else {
  //       const res = await axios.post(
  //         "http://127.0.0.1:8000/student/login/",
  //         formData
  //       );console.log(res.data.status);
  //       if (res.data.status == "success") {
  //         setIsLoggedIn(true);
               
  
  //         localStorage.setItem("isLoggedIn", true);
  //       }
  //     }
             

  //     }
  //   catch (err) {
  //     console.error(err);
  //   }
  // };
  //const handleLogout = (e) => {
    //e.preventDefault();
    //setIsLoggedIn(false);
    //localStorage.removeItem("isLoggedIn");
  //};

  
 
  return (
    <div className="flex justify-center bg-[#576F72] background-size: full;  ">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0 ">
      <div
          className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2
    bg-glass bg-white bg-opacity-70  drop-shadow-lg  rounded-md shadow-md p-10 w-1/3"
          style={{ height: "500px" }}
        >
          <div className="flex flex-col w-full md:w-1/2 p-4 ">
          <div className="flex flex-col flex-1 justify-center mb-8">
          <h1 className="text-4xl text-center font-normal">Welcome Back</h1>
          <div className="w-full mt-4">
                 
                 
                 
                 <form
                  onSubmit={handleSubmit}
                  className="form-horizontal w-3/4 mx-auto bg-opacity-70  drop-shadow-lg  "                  method="POST"
                  action="#"
                >
                    <div class="mb-6">
                    <input
                      type="email"
                      name="email"
                      class="form-control block w-full px-4 py-2
                        text-x2 font-normal text-gray-700
                        bg-white bg-clip-padding border
                        border-solid border-gray-300
                        rounded transition ease-in-out m-0
                        focus:text-gray-700 focus:bg-white
                        focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput2"

                      placeholder="Email"
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </div>


                   <div class="mb-6">
                    <input
                      type="password"
                      name="password"
                      class="form-control block w-full px-4 py-2
                        text-x2 font-normal text-gray-700
                        bg-white bg-clip-padding border
                        border-solid border-gray-300
                        rounded transition ease-in-out m-0
                        focus:text-gray-700 focus:bg-white
                        focus:border-blue-600 focus:outline-none"

                      placeholder="Password"
                      onChange={e => setPassword(e.target.value)}
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
                  />Log in as a Teacher 
                </div>
                  
                  <div className="no-underline hover:underline text-blue-dark text-xs">
                    
                    <button
                      type="submit"
                      className="bg-[#E4DCCF] hover:bg-blue-700 text-black text-sm  py-2 px-4 rounded float-center mr-4"                    >
                      Login
                    </button>
                    <br></br>
                    
                    
                    
                  </div>
                </form>
                <br></br>
                <br></br>
                
              </div>
            </div>
          </div>
          
          <div
             className="hidden md:block md:w-1/2 rounded-r-lg
             bg-[url(https://o.remove.bg/downloads/2531ddcb-97af-4683-8ae5-dec96d9dfc68/undraw_Completing_re_i7ap-removebg-preview.png)]"
          
          
          style={{ backgroundSize: "cover", backgroundPosition: "center" }}          ></div>
        </div>
      </div>
    </div>
  );
}