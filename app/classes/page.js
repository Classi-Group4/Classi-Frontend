'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';


// useState and useEffect hooks to retrieve and store the data

export default function Classes() {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        async function getClasses() {
            try {
                const { data } = await axios.get('http://127.0.0.1:8000/classes/');
                console.log(data.results)
                setClasses(data.results);
                // console.log(classes)
            } catch (error) {
                console.log(error);
            }
        }
        getClasses();
    }, []);

    // function handleClassClick(cls) {
    //     console.log(cls.url)

    //   }


    return (

        <>
            <div className="flex w-full flex-col items-center justify-center rounded-lg border border-gray-200 p-8">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current text-gray-500" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M0 3.75A.75.75 0 01.75 3h7.497c1.566 0 2.945.8 3.751 2.014A4.496 4.496 0 0115.75 3h7.5a.75.75 0 01.75.75v15.063a.75.75 0 01-.755.75l-7.682-.052a3 3 0 00-2.142.878l-.89.891a.75.75 0 01-1.061 0l-.902-.901a3 3 0 00-2.121-.879H.75a.75.75 0 01-.75-.75v-15zm11.247 3.747a3 3 0 00-3-2.997H1.5V18h6.947a4.5 4.5 0 012.803.98l-.003-11.483zm1.503 11.485V7.5a3 3 0 013-3h6.75v13.558l-6.927-.047a4.5 4.5 0 00-2.823.971z"></path></svg>
                </div>

                <div className="mt-8 text-center">
                    <h1 className="text-4xl">Category Classes</h1>
                </div>

                <button className="mt-8 block rounded-lg border border-green-700 bg-green-600 py-1.5 px-4 font-medium text-white transition-colors hover:bg-green-700 active:bg-green-800 disabled:opacity-50">Return To Categories</button>
            </div>
            <div className="mt-6 flex flex-wrap	grid grid-cols-3 gap-4">
                {classes.map((cls) => (
                    <Link
                        // href={{
                        //     pathname: '/class/cls.id',
                        //     query : { classID: cls.id } // the data
                        //   }}                        
                        href={`/classes/${cls.id}`}
                    >
                        <button
                            className="p-8 border border-gray-200 rounded bg-white w-64 hover:bg-gray-50 hover:border-b-4 hover:border-b-blue-500 active:bg-gray-100"
                        >
                            <div className="flex justify-center items-center text-gray-500 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-24 w-24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </div>
                            <div className="text-center mt-4">
                                <h1 className="font-bold text-gray-700 text">{cls.class_name}</h1>
                                <p className="text-500 text-sm mt-4">{cls.description}</p>
                            </div>
                        </button>
                    </Link>
                ))}
            </div>
        </>
    );
}
