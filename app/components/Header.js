'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
import { useState } from "react";
import cookieCutter from 'cookie-cutter';





export default function Header() {
  
  const { push } = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const jwt = cookieCutter.get('jwt');
    // console.log(jwt)
    
    
      if (jwt != 0) {
        setIsLoggedIn(true);
        
      } else {
        setIsLoggedIn(false);
      }
    
  }, []);
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8000/api/logout");
      cookieCutter.set('jwt', 0)
      console.log("logout")
     setIsLoggedIn(false)
      push('/loginform');
    } catch (err) {
      console.error(err);
    }
  }
  return (


    <header >

      <div>
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-[#576F72] text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a href="/"><img className="w-20"src="https://cdn.discordapp.com/attachments/1062676267507384395/1064961503456931950/classi-high-resolution-logo-color-on-transparent-background.png" /></a>
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <a className="hover:text-gray-200" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="/categories">
                    Categories
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="/profile">
                    Profile
                  </a>
                </li>
                {isLoggedIn && <li>
                <a className="hover:text-gray-200"> 
              <button onClick={handleLogout}>
                Logout
              </button>
            </a>
            </li>}
              </ul>
              <div className="hidden xl:flex items-center space-x-5 items-center">
                <a className="flex items-center hover:text-gray-200" href="/profile">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            
          </nav>
          
        </section>
      </div>
    </header>
  );
}
