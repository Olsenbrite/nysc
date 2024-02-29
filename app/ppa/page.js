import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

export default function Ppa() {
    return(
        <div>
            <div><Navbar/></div>
                <div className="flex bg-lightergreen font-poppins">
                    <div className="w-1/4 pt-10"><Sidebar/></div>
                
                <div className=" border-600 w-3/4 pt-36 p-7 flex h-screen">
                        <div className="w-3/5">
                            <div>
                                <p className="text-deepgreen font-bold text-4xl">Place of Primary Assigment</p>
                                <p className="text-sm">Monday, 27 June 2024</p>
                            </div>
                            <div className="border-2 border-black p-5 mt-5">
                                <p className="text-center text-2xl font-bold mb-4">PPA Posting</p>
                                <div>
                                    <p className="text-xs text-justify">Kindly click on the print PPA posting button below to download and print  place of primary assignment (PPA) letter in the Portable Document Format (PDF).
                                    </p>
                                    <div className="text-center"><button className=" mt-10 mb-60 rounded-lg px-5 py-3 font-bold text-md text-deepgreen bg-lightgreen ">Print PPA Posting</button></div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}