import React from "react";
import {useState} from "react";


 export default function Form(){
    const [userInput, setUserInput] = useState({
        category: "",
        className: "",
        price: 0,
        location: "",
        duration: "",
        teacherName: "",
      });
    

return(
  
    
    <div className="flex justify-center bg-[url(https://images.unsplash.com/photo-1587612049655-c1030366a74a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-center bg-no-repeat "> 
    

    <form className="bg-glass bg-white bg-opacity-70  drop-shadow-lg  rounded-md shadow-md p-10 w-1/3">    
     
   
    <label className="block font-medium text-sm mb-2">
    Category:
    <select className="block w-full rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue border border-gray-300">
        <option value="" disabled selected>Select a course field</option>
        <option value="category1">Music</option>
        <option value="category2">Coding</option>
        <option value="category3">Engineering</option>
    </select>
    </label>

    <br />

    <label className="block font-medium text-sm mb-2">
      Class Name:
      <input
        className="block w-full rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue border border-gray-300"
        type="text"
        name="className"  
      />
    </label>

    <br />

    <label className="block font-medium text-sm mb-2">
      Price:
      <input
        className="block w-full rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue border border-gray-300"
        type="text"
        name="price"    
      />
    </label>

    <br />

    <label className="block font-medium text-sm mb-2">
      Location:
      <input
        className="block w-full rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue border border-gray-300"
        type="text"
        name="location"   
      />
    </label>

    <br />

    <label className="block font-medium text-sm mb-2">
      Class Duration:
      <input
        className="block w-full rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue border border-gray-300"
        type="text"
        name="duration"   
      />
    </label>

    <br />
    
    <label className="block font-medium text-sm mb-2">
      Teacher name:
      <input
        className="block w-full rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue border border-gray-300"
        type="text"
        name="teacherName"   
      />
    </label>

    <br />

    <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mx-auto my-auto flex justify-center" type="submit">Create Class</button>
    
  </form>
  
  </div> 
  

  
    );
 }

