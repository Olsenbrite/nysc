'use client'
import Link from "next/link"
import Image from "next/image"
import logo from '../assets/nysc.png'
import { useState } from "react"
import { usePathname } from "next/navigation"
export default function Navbar() {

    const [about, setAbout] = useState(false)
    const currentPath = usePathname();
    
    return (
        <div className="flex fixed top:0 w-full p-3 pl-5 bg-deepgreen">
            <div className="w-20 "><Image src={logo}/></div>
            <div className=" flex  w-full flex-col justify-between  ml-7">
                <div className="text-white text-xl font-roboto font-bold">NATIONAL YOUTH SERVICE CORPS<br/><p className="text-deepyellow ml-12 font-medium text-sm">SERVICE AND HUMANITY</p></div>
                <div className=" flex text-white font-poppins font-bold justify-between mr-32 mt-3 ">
                    <div className="flex">
                        <div className={currentPath === "/dashboard" ? "px-4 py-2 bg-white text-deepgreen" : "px-4 py-2 hover:bg-white hover:text-deepgreen"}><Link href='/dashboard'>Home</Link></div>
                        <div className={currentPath ==="/the-dg" || currentPath==="/our-team" ? "flex flex-col relative px-4 py-2 bg-white text-deepgreen" : "flex flex-col relative px-4 py-2 hover:bg-white hover:text-deepgreen"}onClick={()=>setAbout(!about)}><button>About <span className=" text-center font-bold text-md p-2">&darr;</span></button>
                            {about && <div className="absolute top-14 -ml-3 w-full bg-lightgreen text-black flex flex-col items-center gap-2 font-bold py-5 text-sm">
                                <Link href='/the-dg' className=" p-2 hover:bg-white hover:text-green" onClick={()=>setAbout(false)}>Meet the DG</Link>
                                <Link href='/our-team'className=" p-2 hover:bg-white hover:text-green" onClick={()=>setAbout(false)}>Our Team</Link>
                            </div>}
                        </div>
                        <div className={currentPath === "/location" ? "px-4 py-2 bg-white text-deepgreen": "px-4 py-2 hover:bg-white hover:text-deepgreen"}><Link href='/location'>Locations</Link></div>
                        <div className={currentPath === "/payments" ? "px-4 py-2 bg-white text-deepgreen": "px-4 py-2 hover:bg-white hover:text-deepgreen"}><Link href='/payments'>Payment</Link></div>
                    </div>
                    <div>
                        <div className={currentPath === "/contact" ? "px-4 py-2 bg-white text-deepgreen": "px-4 py-2 hover:bg-white hover:text-deepgreen"}><Link href='/contact'>Contact</Link></div>
                    </div>
                </div>

            </div>
        </div>
    )
}