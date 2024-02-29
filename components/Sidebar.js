'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {
    const currentPath = usePathname();
    return (
        <div className="bg-green h-full font-poppins">
            <div className="pt-32 pl-7">
                <div className={currentPath === "/dashboard" ? "bg-lightergreen rounded-bl-2xl rounded-tl-2xl ml-3 px-5 py-3 m-2 mr-0 font-bold text-poppins hover:text-green hover:bg-lightergreen hover:rounded-bl-2xl hover:rounded-tl-2xl" :"rounded-bl-2xl rounded-tl-2xl ml-3 px-5 py-3 m-2 mr-0 font-bold text-poppins hover:text-green hover:bg-lightergreen hover:rounded-bl-2xl hover:rounded-tl-2xl"}><Link href='/dashboard'>Dashboard</Link></div>
                <div className={currentPath === "/ppa" ? "bg-lightergreen rounded-bl-2xl rounded-tl-2xl ml-3 px-5 py-3 m-2 mr-0 font-bold text-poppins hover:text-green hover:bg-lightergreen hover:rounded-bl-2xl hover:rounded-tl-2xl" :"rounded-bl-2xl rounded-tl-2xl ml-3 px-5 py-3 m-2 mr-0 font-bold text-poppins hover:text-green hover:bg-lightergreen hover:rounded-bl-2xl hover:rounded-tl-2xl"}><Link href='/ppa'>PPA Letter</Link></div>
                <div className={currentPath === "/course" ? "bg-lightergreen rounded-bl-2xl rounded-tl-2xl ml-3 px-5 py-3 m-2 mr-0 font-bold text-poppins hover:text-green hover:bg-lightergreen hover:rounded-bl-2xl hover:rounded-tl-2xl" :"rounded-bl-2xl rounded-tl-2xl ml-3 px-5 py-3 m-2 mr-0 font-bold text-poppins hover:text-green hover:bg-lightergreen hover:rounded-bl-2xl hover:rounded-tl-2xl"}><Link href='/course'>Course Correction</Link></div>
                <div className={currentPath === "/lga" ? "bg-lightergreen rounded-bl-2xl rounded-tl-2xl ml-3 px-5 py-3 m-2 mr-0 font-bold text-poppins hover:text-green hover:bg-lightergreen hover:rounded-bl-2xl hover:rounded-tl-2xl" :"rounded-bl-2xl rounded-tl-2xl ml-3 px-5 py-3 m-2 mr-0 font-bold text-poppins hover:text-green hover:bg-lightergreen hover:rounded-bl-2xl hover:rounded-tl-2xl"}><Link href='/lga'>LGA Clearance</Link></div>
                <div className={currentPath === "/disciplinary" ? "bg-lightergreen rounded-bl-2xl rounded-tl-2xl ml-3 px-5 py-3 m-2 mr-0 font-bold text-poppins hover:text-green hover:bg-lightergreen hover:rounded-bl-2xl hover:rounded-tl-2xl" :"rounded-bl-2xl rounded-tl-2xl ml-3 px-5 py-3 m-2 mr-0 font-bold text-poppins hover:text-green hover:bg-lightergreen hover:rounded-bl-2xl hover:rounded-tl-2xl"}><Link href='/disciplinary'>Disciplinary Case</Link></div>
                <div className={currentPath === "/forgot" ? "bg-lightergreen rounded-bl-2xl rounded-tl-2xl ml-3 px-5 py-3 m-2 mr-0 font-bold text-poppins hover:text-green hover:bg-lightergreen hover:rounded-bl-2xl hover:rounded-tl-2xl" :"rounded-bl-2xl rounded-tl-2xl ml-3 px-5 py-3 m-2 mr-0 font-bold text-poppins hover:text-green hover:bg-lightergreen hover:rounded-bl-2xl hover:rounded-tl-2xl"}><Link href='/forgot'>Change Password</Link></div>
                <div className="ml-3  mt-12 px-5 py-3 m-2 hover: text-red font-bold hover:bg-lightergreen hover:rounded-bl-2xl hover:rounded-tl-2xl"><Link href='/'>Logout</Link></div>
            </div>
        </div>
    )
}