import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

export default function Course() {
    return(
        <div>
            <div><Navbar/></div>
                <div className="flex bg-lightergreen font-poppins">
                    <div className="w-1/4 pt-10"><Sidebar/></div>
                
                <div className=" w-3/4 pt-36 p-7 flex ">
                        <div className=" w-full">
                            <div>
                                <p className="text-deepgreen font-bold text-4xl">Course Correction</p>
                                <p className="text-sm">Monday, 27 June 2024</p>
                            </div>
                            <div className="flex justify-end  gap-20">                            
                                <div className="border-2 border-black p-5 mt-5 flex w-3/5">
                                    <div className="">
                                        <p className="text-center text-2xl font-bold mb-4">Request Details</p>
                                        <div className="flex justify-center gap-24 ">
                                            <div className="flex flex-col gap-2 font-bold">
                                                <p>Name</p>
                                                <p>Call-up Number</p>
                                                <p>State code</p>
                                                <p>Date of Birth</p>
                                                <p>Marital Status</p>
                                                <p>Email</p>
                                                <p>Phone Number</p>
                                                <p>Institution</p>
                                                <p>Course</p>
                                                <p>Award</p>
                                                <p>Date of graduation</p>
                                                <p>Date of Registration</p>
                                                <p>Mobilisation Status</p>
                                            </div>
                                            <div className="flex flex-col gap-2 text-deepgreen font-bold">
                                                <p>Olusola John Temitope</p>
                                                <p>NYSC/JOS/2022/185502</p>
                                                <p>PL/218/2594</p>
                                                <p>October 9th, 1980</p>
                                                <p>Single</p>
                                                <p>olusolajohn@gmail.com</p>
                                                <p>08058372294</p>
                                                <p>Federal University of Technology, Akure</p>
                                                <p>Computer Science</p>
                                                <p>B.Tech</p>
                                                <p>21/04/2024</p>
                                                <p>08/07/2024</p>
                                                <p>Mobilised</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-2 border-black p-5 mt-24 flex w-2/5 flex justify-center">
                                    <div className="flex flex-col ">
                                        <p className="text-center text-2xl font-bold mb-4">Change Details</p>
                                        <label className="font-bold mt-4">Course of Study</label>
                                        <select  className="px-3 py-4 rounded-md">
                                            <option>Mechanical Engineering</option>
                                            <option>Computer Science</option>
                                            <option>Electrical Engineering</option>
                                            <option>Software Engineering</option>
                                            <option>Computer Engineering</option>
                                        </select>

                                        <label className="font-bold mt-4">Class of Degree</label>
                                        <select className="px-3 py-4 pr-5 rounded-md">
                                            <option>First Class</option>
                                            <option>Second Class Upper Division</option>
                                            <option>Second Class Lower Division</option>
                                            <option>Third Class</option>
                                        </select>

                                        <label className="font-bold mt-4">Qualification</label>
                                        <select className="px-3 py-4 rounded-md">
                                            <option>B.Tech</option>
                                            <option>BSc</option>
                                            <option>LL.B</option>
                                        </select>
                                        <div className="text-center"><button className=" mt-10 mb-60 rounded-lg px-5 py-3 font-bold text-md text-deepgreen bg-lightgreen ">Send Request</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}