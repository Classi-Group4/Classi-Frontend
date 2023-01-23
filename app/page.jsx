"use client";
import { useEffect, useState } from "react";

import HomePage from "./components/Home";

export default function Home() {
  const [message, setMessage] = useState("");
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/user",{
        credentials: 'include'
      }) 
      const content = await response.json()
      console.log(content)
})})
  return (
    <>
      <HomePage auth={auth} />
    </>
  );
}
