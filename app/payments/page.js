import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

export default function Payments() {
    return(
        <div>
            <div><Navbar/></div>
                <div className="flex bg-lightergreen">
                    <div className="w-1/4 pt-10"><Sidebar/></div>
                
                <div className=" border-600 w-3/4 pt-36 p-7 flex h-screen font-poppins">
                        <div className="w-3/5">
                            <div>
                                <p className="text-deepgreen font-bold text-4xl">Payment</p>
                                <p className="text-sm">Monday, 27 June 2024</p>
                            </div>
                            <p className="mt-7 text-xl"> No Payment is available at this time</p>
                        </div>
                </div>
            </div>
        </div>
    )
}