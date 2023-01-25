"use client";

import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Form() {
  const [userData, setUserData] = useState(null);
  const { push } = useRouter();

  const [userInput, setUserInput] = useState({
    category: "",
    classname: "",
    teacher_name: "",
    teacher_email: "",
    location: "",
    available_times: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/user", {
          withCredentials: true, // this sends the cookie along with the request
        });

        setUserData(response.data);
        
      } catch (error) {
        console.error(error);
      }
    })();

  }, []);
  
 

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData)
    
    // setUserInput({ ...userInput,  });

    const dataJson = JSON.stringify(userInput);
    console.log(dataJson)
    setUserInput({ ...userInput, teacher_name: userData.name,teacher_email: userData.email });
    axios
      .post("http://localhost:8000/api/class/", dataJson, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res);
        alert("Class has been created!")
        push('/profile');
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  


  return (
    <div>
    <div className="flex justify-center bg-[#F0EBE3] p-10">
      
      <form
        className="bg-glass bg-white bg-opacity-70  drop-shadow-lg  rounded-md shadow-md p-8 w-1/3"
        onSubmit={handleSubmit}
      >
          <h1 class="font-medium text-3xl mb-6">Create a class</h1>
        <label className="block font-medium text-sm mb-4">
          Category:
          <select
            className="block w-full rounded-md py-2 px-3 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue border border-gray-300"
            // onChange={}
            name="category"
            value={userInput.category}
            onChange={(event) =>
              setUserInput({ ...userInput, category: event.target.value })
            }
          >
            <option value="" disabled selected>
              Select a course field
            </option>
            <option value="Personal Training">Personal Training</option>
            <option value="Music">Music</option>
            <option value="Sports">Sports</option>
            <option value="Software Development">Software Development</option>
            <option value="Languages">Languages</option>
            <option value="Cooking">Cooking</option>
            <option value="Arts">Arts</option>
            <option value="Engineering">Engineering</option>
            <option value="Social Studies">Social Studies</option>
          </select>
        </label>


        <label className="block font-medium text-sm mb-4">
          Class Name:
          <input
            className="block w-full rounded-md py-2 px-3 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue border border-gray-300"
            type="text"
            name="classname"
            value={userInput.classname}
            onChange={(event) =>
              setUserInput({ ...userInput, classname: event.target.value })
            }
          />
        </label>
        <label className="block font-medium text-sm mb-4">
          Location:
          <input
            className="block w-full rounded-md py-2 px-3 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue border border-gray-300"
            type="text"
            name="location"
            value={userInput.location}
            onChange={(event) =>
              setUserInput({ ...userInput, location: event.target.value },)
            }
          />
        </label>
        <label className="block font-medium text-sm mb-4">
          Available Hours:
          <input
            value={userInput.available_times}
            onChange={(event) =>
              setUserInput({
                ...userInput,
                available_times: event.target.value,
              })
            }
            className="block w-full rounded-md py-2 px-3 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue border border-gray-300"
            type="text"
            name="available_times"
          />
        </label>

        <label className="block font-medium text-sm mb-4">
          Price:
          <input
            className="block w-full rounded-md py-2 px-3 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue border border-gray-300"
            type="text"
            name="price"
            value={userInput.price}
            onChange={(event) =>
              setUserInput({ ...userInput, price: event.target.value })
            }
          />
        </label>
        <label className="block font-medium text-sm mb-4">
          Class Description:
          <input
            className="block w-full rounded-md py-2 px-3 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue border border-gray-300"
            type="text"
            name="description"
            value={userInput.description}
            onChange={(event) =>
              setUserInput({ ...userInput, description: event.target.value })
            }
          />
        </label>

        <br />

        <button
          className="bg-[#7D9D9C] hover:bg-[#576F72] text-white font-medium py-2 px-4 rounded-md mx-auto my-auto flex justify-center"
          type="submit"
        >
          Create Class
        </button>
      </form>
    </div>
    </div>
  );
}
