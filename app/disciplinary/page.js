import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

export default function Disciplinary() {
    return(
        <div>
            <div><Navbar/></div>
                <div className="flex bg-lightergreen">
                    <div className="w-1/4 pt-10"><Sidebar/></div>
                
                <div className=" w-3/4 pt-36 p-7 flex h-screen font-poppins ">
                        <div className=" w-full">
                            <div>
                                <p className="text-deepgreen font-bold text-4xl">Disciplinary Case</p>
                                <p className="text-sm">Monday, 27 June 2024</p>
                            </div>
                            <div className="flex justify-end  gap-20">                            
                                <div className="border-2 border-black p-5 mt-5 flex h-max w-3/5">
                                    <div className="">
                                        <p className="text-center text-2xl font-bold mb-4">Case History</p>
                                        <div className="flex justify-center flex-col text-sm gap-5">
                                            <p>1. Absent for your Biometric Capturing/ Monthly Clearance(February, 2022)</p>
                                            <p>2. Absent for your Biometric Capturing/ Monthly Clearance(May, 2022)</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="border-2 border-black p-5 mt-24 flex w-2/5 flex justify-center">
                                    <div className="flex flex-col ">
                                        <p className="text-center text-2xl font-bold mb-4 text-red">Disciplinary Action</p>
                                        <p>
                                            <span className="font-bold">Letter of Appeal</span><br/>
                                            Kindly write an Appeal letter stating reasons why you were absent for February Clearance, it should be signed and stamped by your PPA and submitted to the LGA for further action (February, 2023)
                                        </p>
                                        <p className="mt-5">
                                            <span className="font-bold">Extension of Service Year</span><br/>
                                            Your Service period is hereby extended by two(2) months without monthly stipend for each month, You are advised to see the local government as soon as possible (May, 2022)
                                        </p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}