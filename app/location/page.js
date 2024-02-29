import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import map from '../../assets/map.png'
import Image from "next/image"
export default function Location() {
    return(
        <div>
            <div><Navbar/></div>
                <div className="flex bg-lightergreen">
                    <div className="w-1/4 pt-10"><Sidebar/></div>
                
                <div className="w-3/4 pt-36 p-7 flex font-poppins">
                        <div>
                            <div>
                                <p className="text-deepgreen font-bold text-4xl">Locations</p>
                                <p className="text-sm">Monday, 27 June 2024</p>
                            </div>
                            <div className="mt-3 flex flex-col w-3/5">
                                <input placeholder="Akure, Ondo" className="px-3 py-2 rounded-md border-2 border-deepgreen"/>
                                <input placeholder="NYSC Orientation Camp Jos, Jakatai Mangu" className=" mt-2 px-3 py-2 rounded-md border-2 border-deepgreen"/>
                            </div>
                            <div className="border-2 border-black mt-5 ">
                                <Image src={map} />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}