'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from "next/navigation";


// useState and useEffect hooks to retrieve and store the data

export default function Classes() {
    const [classes, setClasses] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    const { push } = useRouter();

    useEffect(() => {
        const category2 = localStorage.getItem("Category")
        setSelectedCategory(category2)
        axios.get(`http://localhost:8000/api/class/`)
          .then(res => {
            const filteredClasses = res.data.filter(item => item.category === selectedCategory);
            setClasses(filteredClasses);
            
          })
          .catch(err => {
            console.log(err);
          });
      }, [selectedCategory]);

      
      const saveClass = (id) => {
        localStorage.setItem("ID" , (id))
        push('/categories/classes/class')
        // localStorage.setItem("clas" , JSON.stringify(classes))
    
      }
    
    return (
        
        <>
            <div className="flex w-full flex-col items-center justify-center rounded-lg border border-gray-200 p-8">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current text-gray-500" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M0 3.75A.75.75 0 01.75 3h7.497c1.566 0 2.945.8 3.751 2.014A4.496 4.496 0 0115.75 3h7.5a.75.75 0 01.75.75v15.063a.75.75 0 01-.755.75l-7.682-.052a3 3 0 00-2.142.878l-.89.891a.75.75 0 01-1.061 0l-.902-.901a3 3 0 00-2.121-.879H.75a.75.75 0 01-.75-.75v-15zm11.247 3.747a3 3 0 00-3-2.997H1.5V18h6.947a4.5 4.5 0 012.803.98l-.003-11.483zm1.503 11.485V7.5a3 3 0 013-3h6.75v13.558l-6.927-.047a4.5 4.5 0 00-2.823.971z"></path></svg>
                </div>

                <div className="m-8 text-center">
                    <h1 className="text-4xl">{selectedCategory} Classes</h1>
                </div>
<Link href='/categories'>
                <button className=" block rounded-lg border border-green-700 bg-[#576F72] py-1.5 px-4 font-medium text-white transition-colors hover:bg-[#7D9D9C] active:bg-green-800 disabled:opacity-50">Return To Categories</button>
                </Link>
            </div>
            <div className="flex flex-wrap grid grid-cols-4 gap-4">
                {classes.map((cls,ss) => (
                    <div class="flex flex-wrap place-items-center h-0.9 my-8">
                    
                    <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 m-auto">
                        <div class="w-full block h-full">
                            <img alt="blog photo" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" class="max-h-40 w-full object-cover"/>
                            <div class="bg-white w-full p-4">
                                <p class="text-[#576F72] text-2xl font-medium">
                                    {cls.classname} 
                                </p>
                                <p class="text-gray-800 text-sm font-medium mb-2">
                                    Location : {cls.location}
                                </p>
                                <p class="text-gray-600 font-light text-md">
                                    {cls.description}
                                </p>
                                <button key={ss} onClick={()=> saveClass(cls.id)} class="my-3 px-2 py-1 rounded bg-[#576F72] text-white hover:bg-[#7D9D9C]" >Class info</button>
                                <div class="flex flex-wrap justify-starts items-center py-1.5 border-b-2 text-xs text-white font-medium">
                                    
                                </div>
                                <div class="flex items-center mt-2">
                                    
                        
                                    <div class="pl-3">
                                        <div class="font-medium">
                                            {cls.teacher_name}
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                ))}
            </div>
        </>
    );
}