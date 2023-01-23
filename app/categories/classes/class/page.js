'use client';
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

export default function Class() {
    const [classDetails, setClasses] = useState([]);

    
    useEffect(() => {
        const ID = localStorage.getItem("ID")
        axios.get(`http://localhost:8000/api/class/`)
        .then(res => {
            
            const filteredClasses = res.data.filter(item => item.id == ID);
            
            setClasses(filteredClasses[0]);
      
          })
          .catch(err => {
            console.log(err);
          });
      }, []);
      console.log(classDetails)

    return (
        <>
           <div class="antialiased max-w-6xl mx-auto my-12 bg-[#E4DCCF] px-8">


                <div class="relative block md:flex items-center">
                    <div class="w-full md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
                        <div class="text-xl font-medium text-[#576F72] uppercase p-8 text-center border-b border-[#cfdddd] tracking-wide">{classDetails.classname}</div>
                        <div class="block sm:flex md:block lg:flex items-center justify-center">
                            <div class="mt-8 sm:m-8 md:m-0 md:mt-8 lg:m-8 text-center">
                                <div class="inline-flex items-center">
                                    <span class="text-3xl font-medium">{classDetails.category}</span>
                                    
                                </div>
                                <span class="block text-sm text-gray-600 mt-2">{classDetails.description}</span>
                            </div>

                        </div>
                        <div class="flex justify-center mt-3">
                            <ul>
                                
                                <li class="flex items-center">
                                    <div class="bg-[#c7e0e0] rounded-full p-2 fill-current text-[#7D9D9C]">

                                    </div>
                                    <span class="text-gray-700 text-lg ml-3">Category: Name</span>
                                </li>
                                <li class="flex items-center mt-3">
                                    <div class="bg-[#c7e0e0] rounded-full p-2 fill-current text-[#7D9D9C]">
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3">Available time: 00:00 - 00:00</span>
                                </li>
                                <li class="flex items-center mt-3">
                                    <div class="bg-[#c7e0e0] rounded-full p-2 fill-current text-[#7D9D9C]">
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3">Price: $00.0/hr</span>
                                </li>
                            </ul>
                        </div>
                        <a class="block flex items-center justify-center bg-[#c7e0e0] hover:bg-[#E4DCCF] p-8 text-md font-semibold text-gray-800 uppercase mt-16" href="#">
                            {/* If not purchased */}
                            <span>Purchase</span>
                            <span class="font-medium text-gray-700 ml-2">➔</span>
                            {/* if purchased => hide span */}
                        </a>
                    </div>
                    <div class="w-full md:w-1/2 relative z-0 px-8 md:px-0 md:py-16">
                        <div class="bg-[#576F72] text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
                            <div class="text-lg font-medium uppercase p-8 text-center border-b border-[#7D9D9C] tracking-wide">{classDetails.teacher_name}</div>
                            <div class="text-center text-sm sm:text-md max-w-sm mx-auto mt-8 text-[#c7e0e0] px-8 lg:px-0">
                                Teacher Description which describes the teacher abilities and what they do too
                            </div>
                            <div class="mt-8 border border-[#7D9D9C] mx-8 lg:mx-16 flex flex-wrap">
                                <div class="flex items-center justify-center w-1/2 text-center p-4 border-r border-b border-[#7D9D9C]">Email</div>
                                <div class="flex items-center justify-center w-1/2 text-center p-4 border-b border-[#7D9D9C]">{classDetails.teacher_email}</div>
                                <div class="flex items-center justify-center w-1/2 text-center p-4 border-r border-[#7D9D9C]">Teacher Category</div>
                                <div class="flex items-center justify-center w-1/2 text-center p-4">What they teach</div>
                            </div>
                            <a class="block flex items-center justify-center bg-[#7D9D9C] hover:bg-[#bbae9a] hover:text-[#576F72] p-8 text-md font-semibold text-[#E4DCCF] uppercase mt-8" href="#">
                                <span>Teacher Profile</span>
                                <span class="font-medium text-[#E4DCCF] ml-2 hover:text-[#576F72]">➔</span>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}
