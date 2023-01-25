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

 
  return (
    <div class=" h-screen w-screen ">
      <div class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0 ">
        <div
          class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 
		bg-white sm:mx-0 bg-opacity-70  drop-shadow-lg  rounded-md shadow-md"
          style={{ height: "500px" }}
        >
          <div class="flex flex-col w-full md:w-1/2 p-4 ">
            <div class="flex flex-col flex-1 justify-center mb-8">
              <h1 class="text-4xl text-center font-thin">Welcome Back</h1>
              <div class="w-full mt-4">
                 <form
                  onSubmit={handleSubmit}
                  class="form-horizontal w-3/4 mx-auto bg-opacity-70  drop-shadow-lg  rounded-md shadow-md"
                  method="POST"
                  action="#"
                >
                  <div class="flex flex-col my-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="  Email"
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div class="flex flex-col my-6">
                    <input
                      type="password"
                      name="password"
                      placeholder="  Password"
                      onChange={e => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mt-6 ml-1">
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
                  <div class="flex flex-col mt-6">
                    <button
                      type="submit"
                      class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                    >
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
            class="hidden md:block md:w-1/2 rounded-r-lg
				bg-[url(https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80)] 

			"
            style={{ backgroundSize: "cover", backgroundPosition: "center" }}
          ></div>
        </div>
      </div>
    </div>
  );
}