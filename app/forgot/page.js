import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

export default function Forgot() {
    return(
        <div>
            <div><Navbar/></div>
                <div className="flex bg-lightergreen">
                    <div className="w-1/4 pt-10"><Sidebar/></div>
                
                <div className=" w-3/4 pt-36 p-7 flex h-screen font-poppins">
                        <div className=" w-full">
                            <div>
                                <p className="text-deepgreen font-bold text-4xl">Security Details</p>
                                <p className="text-sm">Monday, 27 June 2024</p>
                            </div>
                            <div className="flex ">                            
                                <div className="border-2 border-black p-5 px-14 mt-5 flex w-3/5 justify-center">
                                    <div className="w-full">
                                        <p className="text-center text-2xl font-bold mb-4">Change Password</p>
                                        <div className="flex justify-center flex-col text-sm gap-5 ">
                                            <input type="text" placeholder="Enter Email" className="px-3 py-4 border-2 border-black rounded-lg"></input>
                                            <input type="password" placeholder="Enter Old Password" className="px-3 py-4 border-2 border-black rounded-lg"></input>
                                            <input type="password" placeholder="Enter New Password" className="px-3 py-4 border-2 border-black rounded-lg"></input>
                                            <input type="password" placeholder="Confirm Password" className="px-3 py-4 border-2 border-black rounded-lg"></input>
                                        </div>
                                        <div className="text-center mt-5"><button className="rounded-lg px-5 py-3 font-bold text-md text-deepgreen bg-lightgreen">Change Password</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}