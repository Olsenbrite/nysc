import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import jhan from '../../assets/jhan.png'
export default function Dashboard() {
    return (
        <div>
            <div><Navbar/></div>
            <div className="flex bg-lightergreen font-poppins">
                <div className="w-1/4 pt-10"><Sidebar/></div>
                <div className=" border-600 w-3/4 pt-36 p-7 flex">
                    <div className="w-3/5">
                        <div>
                            <p className="text-deepgreen font-bold text-4xl ">Dashboard</p>
                            <p className="text-sm">Monday, 27 June 2024</p>
                        </div>
                        <div className="border-2 border-black  p-5 mt-5">
                            <p className="text-center text-2xl font-bold mb-4">Basic Details</p>
                            <div className="flex">
                                <div className="w-1/3 flex flex-col gap-2">
                                    <p>Name</p>
                                    <p>Batch</p>
                                    <p>Call-Up Number</p>
                                    <p>State Code</p>
                                    <p>Gender</p>
                                    <p>Email</p>
                                    <p>NHIS No</p>
                                    <p>HMO</p>
                                </div>
                                <div className="w-1/3 flex flex-col gap-2 text-deepgreen">
                                    <p>Olusola, John Temitope</p>
                                    <p>B(II), 2023</p>
                                    <p>NYSC/JOS/2021/185502</p>
                                    <p>PL/21B,2594</p>
                                    <p>Male</p>
                                    <p>johnolusola@gmail.com</p>
                                    <p>7329009</p>
                                    <p>Zuma Health Trust</p>
                                </div>
                                <div className="flex flex-col gap-2 justify-end">
                                    <button className="font-bold rounded-md px-2 py-1 bg-lightgreen text-deepgreen">Change of Name</button>
                                    <button className="font-bold rounded-md px-2 py-1 bg-lightgreen text-deepgreen">Apply for Relocation</button>
                                </div>
                            </div>
                        </div>
                        <div className="border-2 border-black  p-5 mt-5">
                            <p className="text-center text-2xl font-bold mb-4">Clearance Schedule</p>
                            <div>
                                <p>You have been scheduled for your monthly clearance and you are expected to be at your<br/> Local Government area secretariat on the date stated below</p>
                                <p className="border bg-lightgreen w-max px-5 py-3 mt-4 mb-4 rounded-lg text-deepgreen font-bold">Moday, 4th July 2023 <br/>10:00am to 12:30pm</p>
                                <p >Failure to show up on your scheduled date implies that you are absent from your PPA</p>
                                <div className="text-center"><button className=" mt-3 rounded-lg px-5 py-3 font-bold text-lg text-deepgreen bg-lightgreen ">Print Schedule</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/5 flex flex-col">
                        <div className=" flex self-center items-center gap-3">
                            <Image src={jhan} className="rounded-full w-28 h-28 object-cover"/>
                            <div>
                                <p>NYSC/JOS/2023/185502</p>
                                <p>PL/218/2594</p>
                            </div>
                        </div>
                        <div className="border-2 border-black  p-5 mt-5 ml-7">
                            <p className="text-center text-2xl font-bold mb-2">Call-up Letter</p>
                            <div>
                                <p className="text-xs text-justify">Any Person who fails to report for service in the service Corps as directed in the letter and/or refuses
                                    to make himself available for service in the service corps shal be prosecuted in line with the provisions 
                                    of Section 13 sub-section 19(a) and (b) of the NYSC Act, Cap. N84, Laws of the Federation of Nigeria, 2004
                                </p>
                                <div className="text-center"><button className=" mt-1 rounded-lg px-5 py-3 font-bold text-md text-deepgreen bg-lightgreen ">Print Call up Letter</button></div>
                            </div>
                        </div>
                        <div className="border-2 border-black  p-5 mt-5 ml-7">
                            <p className="text-center text-2xl font-bold mb-2">Green Card</p>
                            <div>
                                <p className="text-xs text-justify">You cannot apply for D.O.B after you have been documented in camp, also not that your graduation date,
                                 date of birth and course of study are going to appear on your certificate
                                </p>
                                <div className="text-center"><button className=" mt-3 rounded-lg px-5 py-3 font-bold text-md text-deepgreen bg-lightgreen ">Print Green Card</button></div>
                            </div>
                        </div>
                        <div className="border-2 border-black  p-5 mt-5 ml-7">
                            <p className="text-center text-2xl font-bold mb-2">Clearance Status</p>
                            <div className="flex justify-center gap-24 ">
                                <div className="flex flex-col gap-2">
                                    <p className="font-bold">Month</p>
                                    <p>March</p>
                                    <p>April</p>
                                    <p>May</p>
                                    <p>June</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="font-bold">Status</p>
                                    <p>Present</p>
                                    <p>Present</p>
                                    <p className="text-red">Absent</p>
                                    <p>Present</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}