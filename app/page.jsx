"use client";



import Form from './components/Form';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import HomePage from './components/Home';



export default function Home() {
  return (


    <>
    

      <HomePage />
      
      
      <Form/>
    </>

  )
}
