'use client'
import { useRouter, usePathname } from 'next/navigation';
import axios from 'axios';
import React, { useState, useEffect } from 'react'

async function getClassData(id) {
    try {
        const { data } = await axios.get(`http://localhost:8000/classes/${id}`);
        return (data);
    } catch (error) {
        console.log(error);
    }
}

function getId(pathName) {
    return pathName.split('/')[2];
}

export default function Class() {
    const [classData, setClassData] = useState({});
    const [categoryData, setCategoryData] = useState({});
    const [teacherData, setTeacherData] = useState({});

    const pathName = usePathname();
    console.log(pathName)
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await getClassData(getId(pathName));
                setClassData(response);
                const classCategory = (await axios.get(response.category)).data
                setCategoryData(classCategory);
                const classTeacher = (await axios.get(response.teacher)).data
                setTeacherData(classTeacher);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);
    // console.log(await getClassData(1))
    return (
        <>
            <div className="antialiased max-w-6xl mx-auto my-12 bg-[#E4DCCF] px-8">


                <div className="relative block md:flex items-center">
                    <div className="w-full md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
                        <div className="text-xl font-medium text-[#576F72] uppercase p-8 text-center border-b border-[#cfdddd] tracking-wide">{classData.class_name}</div>
                        <div className="block sm:flex md:block lg:flex items-center justify-center">
                            <div className="mt-8 sm:m-8 md:m-0 md:mt-8 lg:m-8 text-center">
                                <div className="inline-flex items-center">
                                    <span className="text-3xl font-medium">{classData.description}</span>

                                </div>
                                <span className="block text-sm text-gray-600 mt-2">This class is a class that classes, the class teaches class stuff and class things</span>
                            </div>

                        </div>
                        <div className="flex justify-center mt-3">
                            <ul>

                                <li className="flex items-center">
                                    <div className="bg-[#c7e0e0] rounded-full p-2 fill-current text-[#7D9D9C]">

                                    </div>
                                    <span className="text-gray-700 text-lg ml-3">Category: {categoryData.category_name}</span>
                                </li>
                                <li className="flex items-center mt-3">
                                    <div className="bg-[#c7e0e0] rounded-full p-2 fill-current text-[#7D9D9C]">
                                    </div>
                                    <span className="text-gray-700 text-lg ml-3">Available time: {classData.available_time}</span>
                                </li>
                                <li className="flex items-center mt-3">
                                    <div className="bg-[#c7e0e0] rounded-full p-2 fill-current text-[#7D9D9C]">
                                    </div>
                                    <span className="text-gray-700 text-lg ml-3">Price: {classData.price}</span>
                                </li>
                            </ul>
                        </div>
                        <a className="block flex items-center justify-center bg-[#c7e0e0] hover:bg-[#E4DCCF] p-8 text-md font-semibold text-gray-800 uppercase mt-16" href="#">
                            {/* If not purchased */}
                            <span>Purchase</span>
                            <span className="font-medium text-gray-700 ml-2">➔</span>
                            {/* if purchased => hide span */}
                        </a>
                    </div>
                    <div className="w-full md:w-1/2 relative z-0 px-8 md:px-0 md:py-16">
                        <div className="bg-[#576F72] text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
                            <div className="text-lg font-medium uppercase p-8 text-center border-b border-[#7D9D9C] tracking-wide">{teacherData.name}</div>
                            <div className="text-center text-sm sm:text-md max-w-sm mx-auto mt-8 text-[#c7e0e0] px-8 lg:px-0">
                                Teacher Description which describes the teacher abilities and what they do too
                            </div>
                            <div className="mt-8 border border-[#7D9D9C] mx-8 lg:mx-16 flex flex-wrap">
                                <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-b border-[#7D9D9C]">Email</div>
                                <div className="flex items-center justify-center w-1/2 text-center p-4 border-b border-[#7D9D9C]">{teacherData.email}</div>
                                <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-[#7D9D9C]">Actively teaching</div>
                                <div className="flex items-center justify-center w-1/2 text-center p-4">{teacherData.is_active ? 'yes' : 'no'}</div>
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

