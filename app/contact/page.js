import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

export default function Contact() {
    return(
        <div>
            <div><Navbar/></div>
                <div className="flex bg-lightergreen font-poppins">
                    <div className="w-1/4 pt-10"><Sidebar/></div>
                
                <div className=" border-600 w-3/4 pt-36 p-7 flex flex-col gap-3 h-screen">
                        <div className="w-3/5">
                            <div>
                                <p className="text-deepgreen font-bold text-4xl">Contact Information</p>
                                <p className="text-sm">Monday, 27 June 2024</p>
                            </div>
                            <p className="mt-7 text-xl text-deepgreen font-bold"> We would like to hear you!</p>
                            <p>NYSC would like to hear your feedback, suggestions and complaints</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="bg-lightgreen mb-3 px-3 py-2 rounded-md w-max mt-3">NYSC National Head Office</p>
                            <p className="ml-4 text-deepgreen">Visit Us</p>
                            <p className="ml-4 mb-3 text-deepgreen font-bold">Plot 416, Tigris Cresent Off Aguiyi Ironsi Street, Maitama, Abuja, Nigeria.</p>
                            <p className="ml-4 text-deepgreen">Call Now</p>
                            <p className="ml-4 mb-3 text-deepgreen font-bold">+234-8147869429, +234-9038034460, +234-8092142661</p>
                            <p className="ml-4 text-deepgreen">Send Mail</p>
                            <p className="ml-4 mb-3 text-deepgreen font-bold">nyscsupport@nysc.org.ng, P.M.B 138, Garki, Abuja</p>
                        </div>
                </div>
            </div>
        </div>
    )
}