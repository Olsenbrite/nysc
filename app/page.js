'use client'
import Image from "next/image";
import Navbar from '../components/Navbar'
import Sidebar from "@/components/Sidebar";
import nysclogo from '../assets/nysc.png'
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [guardian, setGuardian] = useState(false)
  const [corp, setCorp] = useState(true)
  
  const corpSet = () => {
    setCorp(true)
    setGuardian(false)
  }
  const guardSet = () => {
    setCorp(false)
    setGuardian(true)
  }
  return (
    <main className="h-screen font-poppins bg-gradient-to-tr from-deepgreen to-lightyellow flex items-center justify-center gap-7">
      <div className="flex flex-col items-center p-0">
        <Image src={nysclogo} className="w-40"/>
        <p className="font-bold mt-2 text-xl">NATIONAL YOUTH SERVICE CORPS</p>
        <p className="text-red font-bold">SERVICE AND HUMILITY</p>
      </div>
      <div className="p-14 rounded-md bg-white  bg-opacity-30">
        <p className="font-bold mt-2 text-sm">existing user</p>
        <p className="font-bold text-3xl">LOGIN</p>
        <div className="flex w-full mt-4 bg-gray-400 rounded-full">
          <div onClick={() => corpSet()} className={corp ? "cursor-pointer text-center  w-1/2 rounded-full py-4 bg-deepgreen text-white font-bold": " cursor-pointer text-center  w-1/2 rounded-full py-4 bg-gray-400 text-white font-bold"}>Corp Member</div>
          <div onClick={() => guardSet(false)} className={ guardian ? " cursor-pointer text-center w-1/2 rounded-full py-4 bg-ye+llow text-white font-bold transition-all duration-300" : "cursor-pointer text-center w-1/2 rounded-full py-4 bg-gray-400 text-white font-bold transition-all duration-300" } >Guardian</div>
        </div>
        <input className="mt-7 w-full px-2 py-3 rounded-md border-2 border-black bg-white  bg-opacity-30 " type="text" placeholder="Enter Email"/>
        <input className="mt-7 w-full px-2 py-3 rounded-md border-2 border-black bg-white  bg-opacity-30 " type="password" placeholder="Enter Password"/>
        <Link href='/dashboard'><div className={ guardian ? " text-center mt-7 w-full px-2 py-3 rounded-md bg-yellow text-white font-bold transition-all duration-300" : "mt-7 w-full px-2 py-3 rounded-md bg-deepgreen text-center text-white font-bold transition-all duration-300"}>Resume</div></Link>
        <p className="mt-3">Forgot password or email?</p>
      </div>
    </main>
  );
}
