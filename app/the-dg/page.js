import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import dg from '../../assets/dg.jpg'
import Image from "next/image"
export default function TheDg() {
    return(
        <div>
            <div><Navbar/></div>
                <div className="flex bg-lightergreen">
                    <div className="w-1/4 pt-10"><Sidebar/></div>
                
                <div className=" w-3/4 pt-36 p-7 flex font-poppins">
                        <div className=" w-full">
                            <div>
                                <p className="text-deepgreen font-bold text-4xl">The Director General</p>
                                <p className="text-sm">Monday, 27 June 2024</p>
                            </div>
                            <div className="flex flex-col mt-5">   
                                <div className=" flex mt-3">
                                    <div className="w-1/5 flex flex-col items-center">
                                        <Image src={dg} className="w-40 h-40 rounded-full object-cover  border-4 border-deepgreen"/>
                                        <p className="font-bold text-lg text-deepgreen">Brig. Gen. MK Fadah</p>
                                        <p className="font-bold text-sm text-deepgreen">DSS Pjse MA MTRCN</p>
                                        <p className="font-bold text-sm text-left mt-2 w-full">Director General</p>
                                        <p className="font-bold text-xs text-left mt-2 w-full">National Youth Service Corps</p>
                                        <p className="font-bold text-sm text-left mt-2 w-full">May, 2022 - Present</p>
                                    </div>
                                    <div className="w-4/5 ml-5 px-4 pt-3">
                                        <p className="text-sm">Brigadier General MK Fadah hails from Bade Local Government area of Yobe State of Nigeria. He attended the Kaduna Polytechnic from where he obtained an HND before 
                                            proceeding to bag a Post-Graduate Diploma in Management from the Lagos State University. He also holds a Master Degree in Peace and Strategic Study of the University of Ilorin.
                                            Driven by his insatiable thirst for knowledge, he enrolled for, and is currently working for a PhD Security and Strategic Studies at the Nigerian Defence Academy.
                                            Contact
                                        </p><br/>
                                        <p className="text-sm">
                                            <p className="font-bold text-sm text-deepgreen">Military Career</p>
                                            <p>
                                            His military career began with his commissioning into the Nigerian Army in 1993. In line with the Nigerian Armed Forces tradition of promoting professionalism 
                                            through training and retraining of officers, he has attended several courses, including: Young Officers' Course - Intelligence, Young Officers' Course - Infantry, Young 
                                            Officers' Course - Education, Tactical Intelligence Course - Sat and Civilian, Executive Management Course, Police Administration and Security Management, 
                                            Logistic Management Course -NACOL, Junior Staff Course, Peace and Conflict Resolution Course, Comprehensive Protection of Civilian Leadership Course (Nigerian Army Peace Keeping Centre)
                                            </p>
                                        </p>
                                    </div>
                                </div>                         
                                <div>
                                    <p className="text-sm mt-8">
                                        <p className="font-bold text-sm text-deepgreen">Posting History</p>
                                            <p>
                                            Brig Gen Fadah has served in various capacities at different formations, where he demonstrated uncommon leadership prowess. Some of his postings/ service locations include: ICS and CSC 
                                            Nigerian Army Intelligence Corps (NAIC) Detachment, 82 Nigerian Army Intelligence Corps, Nasarawa State Government: ADC to Military Administrator, Strategic Intelligence Group, 116 
                                            Intelligence Group, 81 Division Intelligence Group (Ag. Commander), 
                                            HQ Nigerian Army Armoured Corps (Bauchi), NEPAL Observer, Nigerian Army School of Education (Ilorin), Command Day Secondary School, Jos (Commandant), Command Day Secondary School, 
                                            Mbiri (Commandant), Command Day Secondary School, Kaduna (Commandant), Armed Forces Command and Staff College-Jaji, Theatre Command Deputy Chief of Staff (DCOS G9), 4 Special Force Command-Doma, Defence Headquarters-Abuja.
                                        </p>
                                    </p>
                                    <p className="text-sm mt-8">
                                        <p className="font-bold text-sm text-deepgreen">Assumption of duty as NYSC Director-General</p>
                                            <p>
                                            Wednesday, 18th May, 2022 marked yet another milestone in the history of the National Youth Service Corps being the day Brig Gen MK Fadah formally assumed duty as the 19th Director-General following his 
                                            appointment by the President of the Federal Republic of Nigeria Muhammadu Buhari GCFR. He has since unveiled his policy thrust, which is anchored on the following focal areas: Improvement of the security and general welfare of Corps members, Enhancement of staff welfare, industrial 
                                            harmony and human capacity development for higher productivity, Improving the gains of the NYSC Ventures and the Skill Acquisition and Entrepreneurship Development Programme, Sustaining the digitization of the
                                             operations of the Scheme for enhanced efficiency and Deepening the impact of NYSC on rural development through the Community Development Service.
                                        </p>
                                    </p>
                                </div>                         
                               
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}