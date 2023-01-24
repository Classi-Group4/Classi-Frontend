"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [classes, setClasses] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [teacherEmail, setTeacherE] = useState("");
  const [filteredClasses, setFilteredClasses] = useState([]);
  const [role, setRole] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/user", {
          withCredentials: true, // this sends the cookie along with the request
        });
        setUserData(response.data);
        setRole(response.data.role);
        setStudentId(response.data.id);
        setTeacherE(response.data.email);
      } catch (error) {
        console.error(error);
      }
      axios
        .get(`http://localhost:8000/api/class/`)
        .then((res) => {
          setClasses(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(classes);
    })();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (role == "student") {
      setFilteredClasses(
        classes.filter((item) =>
          item.students.split(",").includes(studentId.toString())
        )
      );
      console.log(studentId);
      // console.log(classes[0].students)
      // console.log(filteredClasses);
      // console.log(teacherEmail);
      console.log(classes);
      console.log(filteredClasses);
    } else {
      setFilteredClasses(
        classes.filter((item) => item.teacher_email == teacherEmail)
      );
      // console.log(filteredClasses);
      // console.log(teacherEmail);
      // console.log(classes);
    }
  };
  const handleDelete = (id) => {
    if (role == "teacher") {
      axios
        .delete(`http://127.0.0.1:8000/api/class/delete/${id}`)
        .then((response) => {
          console.log(response);
          alert("The class was deleted");
          window.location.reload(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (role == "student") {
      axios
        .delete(`http://127.0.0.1:8000/api/class/update/${id}/`, {
          data: { studentid: studentId.toString() },
        })
        .then((response) => {
          alert("The class was deleted");
          console.log(response);
          window.location.reload(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <section class="mt-10">
        <div class=" container mx-auto px-4">
          <div class="  bg-[#e5e5e5] hover:bg-[#bfbfbf] flex flex-col min-w-0 break-words  w-full mb-6 shadow-xl rounded-lg -mt-500">
            <div class="px-6">
              {userData && (
                <div>
                  <div class="flex flex-wrap justify-center">
                    <div class="relative max-w-md mx-auto md:max-w-2xl mt-2 min-w-0 break-words  px-80 ml-auto  w-full mb-6 rounded-lg mt-7">
                      <div class="py-5">
                        <img
                          alt="..."
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcw4B2qZUXkzZtUdrAicj8exPFgt4JbgBea6lafJabwpEGg8hHA89WOFGUpH8wOMpp_8w&usqp=CAU"
                          class="shadow-xl rounded-full h-auto align-middle border-none absolute  -ml-20 lg:-ml-16 max-w-150-px"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"></div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4 lg:order-1">
                      <div class=" flex justify-center py-4 lg:pt-4 pt-8"></div>
                    </div>
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <div class="text-center mt-20">
                    <h3 class="text-4xl font-semibold leading-normal  mb-2 text-blueGray-700 mb-2">
                      {userData.name}
                    </h3>
                    <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                      <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                      {userData.email}
                    </div>
                    <div class="mb-2 text-blueGray-600">
                      <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                      {userData.role}
                    </div>
                  </div>
                </div>
              )}
              <div class="mt-10 py-10 border-t border-blueGray-500 text-center">
                <h3 class="text-4xl font-semibold leading-normal  mb-2 text-blueGray-700 mb-2">
                  Your Courses
                </h3>
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    {/* ///////////////////////////card/////////////////////////////// */}
                    <div class=" flex  flex-col  md:flex-row justify-center  flex-wrap gap-20 mt-10  ">
                      {filteredClasses.map((cls, ss) => (
                        <div class="">
                          <div class="bg-white max-w-xs mx-auto rounded-2xl  border-b-4 border-[#576F72] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
                            <div class="bg-[#576F72]  flex h-20  items-center">
                              <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">
                                {cls.id}
                              </h1>
                              <p class="ml-4 text-white uppercase">
                                {cls.name}
                              </p>
                            </div>
                            <p class="py-6 px-6 text-lg tracking-wide text-center">
                              {cls.description}
                            </p>
                            <div class="flex justify-center px-5 mb-2 text-sm ">
                              <button
                                key={ss}
                                onClick={() => handleDelete(cls.id)}
                                className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-green-500 hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                      {/* <div class="">
                        <div class="bg-white max-w-xs mx-auto rounded-2xl  border-b-4 border-[#576F72] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
                          <div class="bg-[#576F72]  flex h-20  items-center">
                            <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">
                              1
                            </h1>
                            <p class="ml-4 text-white uppercase">Course1</p>
                          </div>
                          <p class="py-6 px-6 text-lg tracking-wide text-center">
                            Description Goes here
                          </p>
                          <div class="flex justify-center px-5 mb-2 text-sm ">
                            <button
                              type="button"
                              class="border border-[#576F72] text-[#576F72] rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-[#b27f7f] focus:outline-none focus:shadow-outline"
                            >
                              Details
                            </button>
                          </div>
                        </div>
                      </div> */}

                      {/* <div class="">
                        <div class="bg-white max-w-xs mx-auto rounded-2xl  border-b-4 border-[#576F72] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
                          <div class="h-20 bg-[#576F72] flex items-center ">
                            <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">
                              2
                            </h1>
                            <p class=" text-white text-base ml-4 uppercase">
                              Course2
                            </p>
                          </div>
                          <p class="py-6 px-6 text-lg tracking-wide text-center">
                            Description Goes Here
                          </p>
                          <div class="flex justify-center px-5 mb-2 text-sm ">
                            <button
                              type="button"
                              class="border border-[#576F72] text-[#576F72] rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline"
                            >
                              Details
                            </button>
                          </div>
                        </div>
                      </div> */}

                      {/* <div class=""> */}
                      {/* <div class="bg-white max-w-xs mx-auto rounded-2xl  border-b-4 border-[#576F72] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
                          <div class="h-20 bg-[#576F72] flex items-center ">
                            <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">
                              3
                            </h1>
                            <p class=" text-white text-base ml-4 uppercase">
                              Course3
                            </p>
                          </div>
                          <p class="py-6  px-6 text-lg tracking-wide text-center">
                            Description Goes Here
                          </p>
                          <div class="flex justify-center px-5 mb-2 text-sm ">
                            <button
                              type="button"
                              class="border border-[#576F72] text-[#576F72] rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline"
                            >
                              Details
                            </button>
                          </div>
                        </div> */}
                      {/* </div> */}
                    </div>
                    <div></div>
                    <button
                      onClick={handleClick}
                      className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-green-500 hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg"
                    >
                      Show my classes
                    </button>

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
