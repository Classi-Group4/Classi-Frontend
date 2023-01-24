'use client';
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

export default function Class() {
    const [classDetails, setClasses] = useState([]);
    const [studentId,setUserId] = useState('')
    
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

      useEffect(() => {
        axios.get("http://localhost:8000/api/user", {
          withCredentials: true, 
        })
        .then(res => {
          setUserId(res.data.id);
          console.log(studentId)
        })
        .catch(err => {
          console.log(err);
        });
      }, []);
      
      
        const handleClick = async () => {
            // console.log(str(studentId))
          const pk = localStorage.getItem("ID")
          try {
            const response = await axios.put(`http://127.0.0.1:8000/api/class/update/${pk}/`, {studentid: studentId.toString()});
            console.log(response);
          } catch (error) {
            console.log(error);
          }
        }
    return (
        <>
           <div className="antialiased max-w-6xl mx-auto my-12 bg-[#E4DCCF] px-8">


                <div className="relative block md:flex items-center">
                    <div className="w-full md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
                        <div className="text-xl font-medium text-[#576F72] uppercase p-8 text-center border-b border-[#cfdddd] tracking-wide">{classDetails.classname}</div>
                        <div className="block sm:flex md:block lg:flex items-center justify-center">
                            <div className="mt-8 sm:m-8 md:m-0 md:mt-8 lg:m-8 text-center">
                                <div className="inline-flex items-center">
                                    <span className="text-3xl font-medium">{classDetails.category}</span>
                                    
                                </div>
                                <span className="block text-sm text-gray-600 mt-2">{classDetails.description}</span>
                            </div>

                        </div>
                        <div className="flex justify-center mt-3">
                            <ul>
                                
                                <li className="flex items-center">
                                    <div className="bg-[#c7e0e0] rounded-full p-2 fill-current text-[#7D9D9C]">

                                    </div>
                                    <span className="text-gray-700 text-lg ml-3">Category: Name</span>
                                </li>
                                <li className="flex items-center mt-3">
                                    <div className="bg-[#c7e0e0] rounded-full p-2 fill-current text-[#7D9D9C]">
                                    </div>
                                    <span className="text-gray-700 text-lg ml-3">Available time: 00:00 - 00:00</span>
                                </li>
                                <li className="flex items-center mt-3">
                                    <div className="bg-[#c7e0e0] rounded-full p-2 fill-current text-[#7D9D9C]">
                                    </div>
                                    <span className="text-gray-700 text-lg ml-3">Price: $00.0/hr</span>
                                </li>
                            </ul>
                        </div>
                        <button onClick={handleClick} className="block flex items-center justify-center bg-[#c7e0e0] hover:bg-[#E4DCCF] p-8 text-md font-semibold text-gray-800 uppercase mt-16">
                            {/* If not purchased */}
                            <span>Purchase</span>
                            <span className="font-medium text-gray-700 ml-2">➔</span>
                            {/* if purchased => hide span */}
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 relative z-0 px-8 md:px-0 md:py-16">
                        <div className="bg-[#576F72] text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
                            <div className="text-lg font-medium uppercase p-8 text-center border-b border-[#7D9D9C] tracking-wide">{classDetails.teacher_name}</div>
                            <div className="text-center text-sm sm:text-md max-w-sm mx-auto mt-8 text-[#c7e0e0] px-8 lg:px-0">
                                Teacher Description which describes the teacher abilities and what they do too
                            </div>
                            <div className="mt-8 border border-[#7D9D9C] mx-8 lg:mx-16 flex flex-wrap">
                                <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-b border-[#7D9D9C]">Email</div>
                                <div className="flex items-center justify-center w-1/2 text-center p-4 border-b border-[#7D9D9C]">{classDetails.teacher_email}</div>
                                <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-[#7D9D9C]">Teacher Category</div>
                                <div className="flex items-center justify-center w-1/2 text-center p-4">What they teach</div>
                            </div>
                            <a className="block flex items-center justify-center bg-[#7D9D9C] hover:bg-[#bbae9a] hover:text-[#576F72] p-8 text-md font-semibold text-[#E4DCCF] uppercase mt-8" href="#">
                                <span>Teacher Profile</span>
                                <span className="font-medium text-[#E4DCCF] ml-2 hover:text-[#576F72]">➔</span>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}
