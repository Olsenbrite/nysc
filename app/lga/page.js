import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

export default function Lga() {
    return(
        <div>
            <div><Navbar/></div>
                <div className="flex bg-lightergreen">
                    <div className="w-1/4 pt-10"><Sidebar/></div>
                
                <div className=" border-600 w-3/4 pt-36 p-7 flex h-screen font-poppins">
                        <div className="w-3/5">
                            <div>
                                <p className="text-deepgreen font-bold text-4xl">LGA Clearance</p>
                                <p className="text-sm">Monday, 27 June 2024</p>
                            </div>
                            <div className="border-2 border-black p-5 mt-5">
                                <p className="text-center text-2xl font-bold mb-4">Clearance Status</p>
                                <div>
                                <div className="flex justify-center gap-24 text-center ">
                                            <div className="flex flex-col gap-2 font-bold">
                                                <p className="text-xl">S/No.</p>
                                                <p>1.</p>
                                                <p>2.</p>
                                                <p>3.</p>
                                                <p>4.</p>
                                                <p>5.</p>
                                                <p>6.</p>
                                                <p>7.</p>
                                                <p>8.</p>
                                                <p>9.</p>
                                                <p>10.</p>
                                                <p>11.</p>
                                                <p>12.</p>
                                            </div>
                                            <div className="flex flex-col gap-2  font-bold">
                                                <p className="text-xl">Month/Year</p>
                                                <p>September,2021</p>
                                                <p>October,2021</p>
                                                <p>November,2021</p>
                                                <p>January,2021</p>
                                                <p>February,2021</p>
                                                <p>March,2021</p>
                                                <p>April,2021</p>
                                                <p>May,2021</p>
                                                <p>June,2021</p>
                                                <p>July,2021</p>
                                                <p>August,2021</p>
                                                <p>September,2021</p>
                                            </div>
                                            <div className="flex flex-col gap-2 text-deepgreen font-bold">
                                                <p className="text-xl text-black">Status</p>
                                                <p>Present</p>
                                                <p>Present</p>
                                                <p>Present</p>
                                                <p className="text-red">Absent</p>
                                                <p>Present</p>
                                                <p>Present</p>
                                                <p className="text-red">Absent</p>
                                                <p>Present</p>
                                                <p>Present</p>
                                                <p className="text-yellow">Pending</p>
                                                <p className="text-yellow">Pending</p>
                                                <p className="text-yellow">Pending</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}