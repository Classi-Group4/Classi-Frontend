import React from "react";
export default function signup(){
    
  
    return(
<>
<div class="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-cover bg-center bg-no-repeat bg-[url(https://media.istockphoto.com/id/1290864946/photo/e-learning-education-concept-learning-online.jpg?s=170667a&w=is&k=20&c=4O9YYitL-Y2d3YiGGO4YSOBvO4EMrP4KuLxiJjnZjU0=)]">
  <div class="content text-5xl text-center md:text-left">
    <h1 class="text-4xl text-blue-500 font-bold">Create New Account</h1>
    <p class="text-white ">Welcome to our Site ,Let's learn Together</p>
  </div>
  <div class="container mx-auto flex flex-col items-center">
  <div class="rounded-xl bg-gray-300  bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
    <div class="text-black">
      <div class="mb-8 flex flex-col items-center">
        <img src="https://cdn.discordapp.com/attachments/1062676267507384395/1064961503456931950/classi-high-resolution-logo-color-on-transparent-background.png" width="150" alt="" srcset="" />
      </div>
      <form action="#">
        <p></p>
        <div class="mb-4 text-lg">
          <input class="rounded-3xl border-none  bg-blue-100  bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="Username" />
        </div>
        <div class="mb-4 text-lg">
        <input class="rounded-3xl border-none  bg-blue-100  bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="email" placeholder="Email" />
        </div>

        <div class="mb-4 text-lg">
          <input class="rounded-3xl border-none  bg-blue-100  bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="name" placeholder="*********" />
        </div>
        
        <div class="mt-8 flex justify-center text-lg text-black">
          <button type="submit" class="rounded-3xl  bg-blue-500  bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-gray-600">Sign Up</button>
        </div>
      </form>
    </div>
  </div> 
    
  </div>

</div>
    </>
    );
}

