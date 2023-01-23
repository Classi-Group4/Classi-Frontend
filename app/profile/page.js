'use client';

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
export default function Profile (){
    const [user, setUser] = useState(null);
    const email = localStorage.getItem("email");
    const role = localStorage.getItem("role");
  useEffect(() => {
    try {
      axios
        .post("http://127.0.0.1:8000/profile/", {
          email: email,
          role: role,
        })
        .then((res) => {
          setUser(res.data.user_info);
          
        });
    } catch (err) {
      console.error(err);
    }
  }, []);
  
  
    return (       
<>
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />


<section class=" ">
<div class=" container mx-auto px-4">
<div class="  bg-[#e5e5e5] hover:bg-[#bfbfbf] flex flex-col min-w-0 break-words  w-full mb-6 shadow-xl rounded-lg -mt-500">
<div class="px-6">
{user ? (<div>
    <div class="flex flex-wrap justify-center">
        <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
        <div class="relative">
            <img alt="..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8LnsAejtzN7cp0DLpTWCDnz8yeaCvPifY1Q&usqp=CAU" class="shadow-xl rounded-full h-auto align-middle border-none absolute  -ml-20 lg:-ml-16 max-w-150-px" />
         </div>

        </div>
        <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
            <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">

            </div>
        </div>
        <div class="w-full lg:w-4/12 px-4 lg:order-1">
            <div class=" flex justify-center py-4 lg:pt-4 pt-8">
                
            </div>
        </div>
    </div>
    <div class="text-center mt-20">
        <h3 class="text-4xl font-semibold leading-normal  mb-2 text-blueGray-700 mb-2">
            {user.name}
        </h3>
        <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
            <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
            {user.email}
        </div>
        <div class="mb-2 text-blueGray-600 mt-10">
            <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Solution Manager - Creative Tim Officer
        </div>
        <div class="mb-2 text-blueGray-600">
            <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>{user.user_type}
        </div>
    </div>
    </div>) :
        (
        <div>
            {/* ///////////////////////////////////image/////////////////////////// */}
            <div class="flex flex-wrap justify-center">
        <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
        <div class="relative">
            <img alt="..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8LnsAejtzN7cp0DLpTWCDnz8yeaCvPifY1Q&usqp=CAU" class="shadow-xl rounded-full h-auto align-middle border-none absolute  -ml-20 lg:-ml-16 max-w-150-px" />
         </div>
            
        </div>
        <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
            <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
            
            </div>
        </div>
        <div class="w-full lg:w-4/12 px-4 lg:order-1">
            <div class=" flex justify-center py-4 lg:pt-4 pt-10">

            </div>
        </div>
    </div>

            {/* /////////////////////////////////////////////////////////////////////// */}
        <div class="text-center mt-40">
            <h3 class="text-4xl font-semibold leading-normal  mb-2 text-blueGray-700 mb-2">
                Jenna Stone
            </h3>
            <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                jenna@gmail.com
            </div>
            <div class="mb-2 text-blueGray-600 mt-10">
                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i> Piano Teacher
            </div>
            <div class="mb-2 text-blueGray-600">
                <i class="fas fa-university mr-2 text-lg text-blueGray-400"> Adition feature</i>
            </div>
        </div>
        </div>
        
        )

    }
    <div class="mt-10 py-10 border-t border-blueGray-500 text-center">
    <h3 class="text-4xl font-semibold leading-normal  mb-2 text-blueGray-700 mb-2">
            Courses
        </h3>
        <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-9/12 px-4">
{/* ///////////////////////////card/////////////////////////////// */}
    <div class=" flex  flex-col  md:flex-row justify-center  flex-wrap gap-20 mt-10  ">
        <div class="">
        <div class="bg-white max-w-xs mx-auto rounded-2xl  border-b-4 border-[#576F72] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
                <div class="bg-[#576F72]  flex h-20  items-center">
                    <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">1</h1>
                    <p class="ml-4 text-white uppercase">Course1</p>
                </div>
                <p class="py-6 px-6 text-lg tracking-wide text-center">Description Goes here</p>
                <div class="flex justify-center px-5 mb-2 text-sm ">
                    <button type="button" class="border border-[#576F72] text-[#576F72] rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-[#b27f7f] focus:outline-none focus:shadow-outline">
                        Details
                    </button>
                </div>
            </div>
        </div>

        <div class="">
            <div class="bg-white max-w-xs mx-auto rounded-2xl  border-b-4 border-[#576F72] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
                <div class="h-20 bg-[#576F72] flex items-center ">
                    <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">2</h1>
                    <p class=" text-white text-base ml-4 uppercase">
                        Course2
                    </p>
                </div>
                <p class="py-6 px-6 text-lg tracking-wide text-center">Description Goes Here</p>
                <div class="flex justify-center px-5 mb-2 text-sm ">
                    <button type="button"
                        class="border border-[#576F72] text-[#576F72] rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline">
                        Details
                    </button>
                </div>
            </div>
        </div>

        <div class="">
            <div class="bg-white max-w-xs mx-auto rounded-2xl  border-b-4 border-[#576F72] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
                <div class="h-20 bg-[#576F72] flex items-center ">
                    <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">3</h1>
                    <p class=" text-white text-base ml-4 uppercase">
                        Course3
                    </p>
                </div>
                <p class="py-6  px-6 text-lg tracking-wide text-center">Description Goes Here</p>
                <div class="flex justify-center px-5 mb-2 text-sm ">
                    <button type="button" class="border border-[#576F72] text-[#576F72] rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline">
                        Details
                    </button>
                </div>
            </div>
        </div>
    </div>
{/* //////////////////////////////////////////////////////////////////////// */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</>     


      
    );
}

// <div >
//             <div className='grid place-items-center  flex space-x-2 w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
             
//              <div
//                     className=" mt-4 card  min-w-sm border border-gray-700 bg-gray-700 text-gray-50   transition-shadow shadow-xl hover:shadow-xl min-w-max">
                    
//                     <div className="w-full card__media"><img src="https://image.freepik.com/free-vector/abstract-binary-code-techno-background_1048-12836.jpg" className="h-48 w-96"/></div>
                    
//                         <div className="flex items-center p-4">
//                             <div className="relative flex flex-col items-center w-full">
//                                 <div
//                                     className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-400 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
//                                     <img className="h-24 w-24 md rounded-full relative" src="https://avatars3.githubusercontent.com/u/11801238?v=4" alt=""/>
//                                     <div className="absolute"></div>
//                                 </div>
//                                 {user ? (<div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
//                                     <span className="text-md whitespace-nowrap text-gray-50 font-semibold">{user.name}</span><span className="text-md whitespace-nowrap text-gray-100">{user.user_type}</span>
//                                     <p className="text-sm text-gray-200">
//                                         {user.email}
//                                     </p>
//                                     <div className="py-2 flex space-x-2">
//                                         <button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max border bg-transparent border-purple-400 text-purple-400 hover:border-purple-800 hover:border-purple-500 px-4 py-1 flex items-center hover:shadow-lg"><span className="mr-2"></span>FOLLOW<span className="ml-2"></span></button><button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-green-500 hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg"><span className="mr-2"><svg height="20" width="20" viewBox="0 0 32 32" className="fill-current text-red-100"><path d="M22.5,4c-2,0-3.9,0.8-5.3,2.2L16,7.4l-1.1-1.1C12,3.3,7.2,3.3,4.3,6.2c0,0-0.1,0.1-0.1,0.1c-3,3-3,7.8,0,10.8L16,29	l11.8-11.9c3-3,3-7.8,0-10.8C26.4,4.8,24.5,4,22.5,4z"></path></svg></span>SPONSOR <span className="ml-2"></span></button>
//                                     </div>
//                                     <div
//                                         className="py-4 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid">
//                                         <span className="text-center px-2"><span className="font-bold text-gray-50">56</span><span className="text-gray-100"> followers</span></span><span className="text-center px-2"><span className="font-bold text-gray-50">112</span><span className="text-gray-100"> following</span></span><span className="text-center px-2"><span className="font-bold text-gray-50">27</span><span className="text-gray-100"> repos</span></span>
//                                     </div>
//                                 </div>):(<div></div>)}
//                             </div>
//                         </div>
//                     </div>
                
            
//     <div className="flex items-center justify-center">
//     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4" >
//         <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
//             <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
//                 </svg>
//             </div>
//             <div className="mt-8">
//                 <p className="text-xl font-semibold my-2" href="/class">Course Name</p>
//                 <div className="flex space-x-2 text-gray-400 text-sm">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                      <p>Class Location</p> 
//                 </div>
//                 <div className="flex space-x-2 text-gray-400 text-sm my-3">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                     </svg>
//                      <p>1 Weeks Left</p> 
//                 </div>
//                 <div className="border-t-2"></div>

//                 <div className="flex justify-between">
//                     <div className="my-2">
//                         <p className="font-semibold text-base mb-2">Teacher Name</p>
//                         <div className="flex space-x-2">
//                             <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
//                             className="w-6 h-6 rounded-full"/>
                             
//                         </div>
//                     </div>
//                      <div className="my-2">
//                         <p className="font-semibold text-base mb-2">Class Time </p>
//                         <div className="text-base text-gray-400 font-semibold">
//                             <p>Time :</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//      </div>
//     </div>
// </div>
// </div>