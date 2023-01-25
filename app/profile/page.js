"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [classes, setClasses] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [teacherEmail, setTeacherE] = useState("");
  const [filteredClasses, setFilteredClasses] = useState([]);
  const [role, setRole] = useState("");
  const { push } = useRouter();


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
  const handleClick2 = (e) => {
    e.preventDefault()
    push('/form');

  }
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
        <div class=" container mx-auto px-20">
          <div class="bg-[#e5e5e5] flex flex-col min-w-0 break-words  w-full mb-6 shadow-xl rounded-lg -mt-500">
            <div class="px-6">
              {userData && (
                <div className="">
                  <div>
                    <div class="relative max-w-md mx-auto md:max-w-2xl mt-2 min-w-0 break-words  px-80 ml-auto w-full mb-6 rounded-lg mt-7">
                      <div class="py-5">
                        <img
                          alt="Profile_picture"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcw4B2qZUXkzZtUdrAicj8exPFgt4JbgBea6lafJabwpEGg8hHA89WOFGUpH8wOMpp_8w&usqp=CAU"
                          class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 flex items-center justify-center text-indigo-500"
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />

                  <div class="mt-20 text-center">
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
                    {(role == "teacher") && <button
                      onClick={handleClick2}
                      className="flex justify-center ml-auto mr-auto  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-[#7D9D9C] hover:bg-[#576F72] px-4 py-1 flex items-center hover:shadow-lg"
                    >
                      Create a new class
                    </button>}
                  </div>
                </div>
              )}
              <div class="mt-10 py-10 border-t-2 border-white text-center items-center">
                <h3 class="text-4xl font-semibold leading-normal  mb-8 text-blueGray-700 mb-2">
                  Your Courses
                </h3>
                <button
                  onClick={handleClick}
                  className="flex justify-center ml-auto mr-auto  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-[#7D9D9C] hover:bg-[#576F72] px-4 py-1 flex items-center hover:shadow-lg"
                >
                  Show my classes
                </button>
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    {/* ///////////////////////////card/////////////////////////////// */}
                    <div class=" flex flex-col  md:flex-row justify-center  flex-wrap gap-20 mt-10  ">
                      {filteredClasses.map((cls, ss) => (
                        <div class="p-8 rounded w-64 active:bg-gray-100">
                          <div class="bg-white max-w-xs mx-auto rounded-2xl  border-b-4 border-[#576F72] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
                            <div>
                              <div class="bg-[#576F72] h-20 text-center">
                                <p class="text-white px-4 py-10">
                                  {cls.classname}
                                </p>
                              </div>
                              <p class="py-6 px-6 text-lg tracking-wide text-center">
                                {cls.description}
                              </p>
                            </div>
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

                    </div>
                    <div></div>

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
