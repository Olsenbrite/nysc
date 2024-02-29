import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Image from "next/image"
import jhan from '../../assets/jhan.png'
import one from '../../assets/1.webp'
import two from '../../assets/2.jpg'
import three from '../../assets/3.jpg'
import four from '../../assets/4.jpeg'
import five from '../../assets/5.jpeg'
import six from '../../assets/6.webp'
import seven from '../../assets/7.webp'
import eight from '../../assets/8.jpg'
import nine from '../../assets/9.jpeg'
import ten from '../../assets/10.jpeg'
import eleven from '../../assets/11.jpeg'
import twelve from '../../assets/12.jpg'
import thirteen from '../../assets/13.jpeg'
import fourteen from '../../assets/14.jpeg'
import fifteen from '../../assets/15.jpeg'
import sixteen from '../../assets/16.jpeg'
import eighteen from '../../assets/18.jpeg'
import seventeen from '../../assets/17.jpeg'
export default function OurTeam() {
    return(
        <div>
            <div><Navbar/></div>
                <div className="flex bg-lightergreen">
                    <div className="w-1/4 pt-10"><Sidebar/></div>
                
                <div className=" w-3/4 pt-36 p-7 flex font-poppins">
                        <div className=" w-full">
                            <div>
                                <p className="text-deepgreen font-bold text-4xl">Jos, Plateau State</p>
                            </div>
                            <div className="flex mt-10">
                                <div className="w-1/3 pl-8">
                                    <Image src={one} className="rounded-lg w-44 h-44 object-cover"/>
                                    <p className="text-lg font-bold text-deepgreen py-2">State Coordinator</p>
                                    <p className="text-sm font-bold text-deepgreen">08184752285</p>
                                </div>
                                <div className="flex w-2/3 ">
                                    <div className="flex list-decimal flex-row flex-wrap gap-3 text-deepgreen font-poppins font-bold">
                                        <div className="w-1/4 text-center">Jos North</div>
                                        <div className="w-1/4 text-center">Jos East</div>
                                        <div className="w-1/4 text-center">Jos South</div>
                                        <div className="w-1/4 text-center">Jos West</div>
                                        <div className="w-1/4 text-center">Riyom</div>
                                        <div className="w-1/4 text-center">Mangu</div><br/>
                                        <div className="w-1/4 text-center">Pankshin</div>
                                        <div className="w-1/4 text-center">Kanam</div>
                                        <div className="w-1/4 text-center">Mikang</div>
                                        <div className="w-1/4 text-center">Wase</div>
                                        <div className="w-1/4 text-center">Qua'an Pan</div>
                                        <div className="w-1/4 text-center">Bassa</div>
                                        <div className="w-1/4 text-center">Barkin Ladi</div>
                                        <div className="w-1/4 text-center">Bokkos</div>
                                        <div className="w-1/4 text-center">Kanke</div>
                                        <div className="w-1/4 text-center">Langthang North</div>
                                        <div className="w-1/4 text-center">Langtang South</div>
                                        <div className="w-1/4 text-center">Shendam</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="mt-7 text-deepgreen font-bold text-lg">Jos Zone</p>
                                <hr className="border-2 border-deepgreen"/>
                                <div className="mt-7 flex flex-wrap">
                                    <div className="w-1/5 mt-3">
                                        <Image src={two} className="rounded-lg w-44 h-44 object-cover"/>
                                        <p className="font-bold mt-2 underline decoration-3 underline-offset-4 text-lg">Jos North</p>
                                        <p>Zonal Coordinator</p>
                                        <p className="text-deepgreen">090759382548</p>
                                    </div>
                                    <div className="w-1/5 mt-3">
                                        <Image src={three} className="rounded-lg w-44 h-44 object-cover"/>
                                        <p className="font-bold mt-2 underline decoration-3 underline-offset-4 text-lg">Jos East</p>
                                        <p>Zonal Coordinator</p>
                                        <p className="text-deepgreen">090759382548</p>
                                    </div>
                                    <div className="w-1/5 mt-3">
                                        <Image src={four} className="rounded-lg w-44 h-44 object-cover"/>
                                        <p className="font-bold mt-2 underline decoration-3 underline-offset-4 text-lg">Jos South</p>
                                        <p>Zonal Coordinator</p>
                                        <p className="text-deepgreen">090759382548</p>
                                    </div>
                                    <div className="w-1/5 mt-3">
                                        <Image src={five} className="rounded-lg w-44 h-44 object-cover"/>
                                        <p className="font-bold mt-2 underline decoration-3 underline-offset-4 text-lg">Jos West</p>
                                        <p>Zonal Coordinator</p>
                                        <p className="text-deepgreen">090759382548</p>
                                    </div>
                                    <div className="w-1/5 mt-3">
                                        <Image src={six} className="rounded-lg w-44 h-44 object-cover"/>
                                        <p className="font-bold mt-2 underline decoration-3 underline-offset-4 text-lg">Riyom</p>
                                        <p>Zonal Coordinator</p>
                                        <p className="text-deepgreen">090759382548</p>
                                    </div>
                                    <div className="w-1/5 mt-3">
                                        <Image src={seven} className="rounded-lg w-44 h-44 object-cover"/>
                                        <p className="font-bold mt-2 underline decoration-3 underline-offset-4 text-lg"> Mangu</p>
                                        <p>Zonal Coordinator</p>
                                        <p className="text-deepgreen">090759382548</p>
                                    </div>
                                    <div className="w-1/5 mt-3">
                                        <Image src={eight} className="rounded-lg w-44 h-44 object-cover"/>
                                        <p className="font-bold mt-2 underline decoration-3 underline-offset-4 text-lg">Pankshin</p>
                                        <p>Zonal Coordinator</p>
                                        <p className="text-deepgreen">090759382548</p>
                                    </div>
                                    <div className="w-1/5 mt-3">
                                        <Image src={nine} className="rounded-lg w-44 h-44 object-cover"/>
                                        <p className="font-bold mt-2 underline decoration-3 underline-offset-4 text-lg">Kanam</p>
                                        <p>Zonal Coordinator</p>
                                        <p className="text-deepgreen">090759382548</p>
                                    </div>
                                    <div className="w-1/5 mt-3">
                                        <Image src={ten} className="rounded-lg w-44 h-44 object-cover"/>
                                        <p className="font-bold mt-2 underline decoration-3 underline-offset-4 text-lg">Mikang</p>
                                        <p>Zonal Coordinator</p>
                                        <p className="text-deepgreen">090759382548</p>
                                    </div>
                                    <div className="w-1/5 mt-3">
                                        <Image src={eleven} className="rounded-lg w-44 h-44 object-cover"/>
                                        <p className="font-bold mt-2 underline decoration-3 underline-offset-4 text-lg">Wase</p>
                                        <p>Zonal Coordinator</p>
                                        <p className="text-deepgreen">090759382548</p>
                                    </div>
                                    <div className="w-1/5 mt-3">
                                        <Image src={twelve} className="rounded-lg w-44 h-44 object-cover"/>
                                        <p className="font-bold mt-2 underline decoration-3 underline-offset-4 text-lg">Qua'an Pan</p>
                                        <p>Zonal Coordinator</p>
                                        <p className="text-deepgreen">090759382548</p>
                                    </div>
                                    <div className="w-1/5 mt-3">
                                        <Image src={thirteen} className="rounded-lg w-44 h-44 object-cover"/>
                                        <p className="font-bold mt-2 underline decoration-3 underline-offset-4 text-lg">Bassa</p>
                                        <p>Zonal Coordinator</p>
                                        <p className="text-deepgreen">090759382548</p>
                                    </div>
                                    <div className="w-1/5 mt-3">
                                        <Image src={fourteen} className="rounded-lg w-44 h-44 object-cover"/>
                                        <p className="font-bold mt-2 underline decoration-3 underline-offset-4 text-lg">Barkin Ladi</p>
                                        <p>Zonal Coordinator</p>
                                        <p className="text-deepgreen">090759382548</p>
                                    </div>
                                    <div className="w-1/5 mt-3">
                                        <Image src={fifteen} className="rounded-lg w-44 h-44 object-cover"/>
                                        <p className="font-bold mt-2 underline decoration-3 underline-offset-4 text-lg">Bokkos</p>
                                        <p>Zonal Coordinator</p>
                                        <p className="text-deepgreen">090759382548</p>
                                    </div>
                                    <div className="w-1/5 mt-3">
                                        <Image src={sixteen} className="rounded-lg w-44 h-44 object-cover"/>
                                        <p className="font-bold mt-2 underline decoration-3 underline-offset-4 text-lg">Kanke</p>
                                        <p>Zonal Coordinator</p>
                                        <p className="text-deepgreen">090759382548</p>
                                    </div>
                                    <div className="w-1/5 mt-3">
                                        <Image src={eighteen} className="rounded-lg w-44 h-44 object-cover"/>
                                        <p className="font-bold mt-2 underline decoration-3 underline-offset-4 text-lg">Langtang South</p>
                                        <p>Zonal Coordinator</p>
                                        <p className="text-deepgreen">090759382548</p>
                                    </div>
                                    <div className="w-1/5 mt-3">
                                        <Image src={seventeen} className="rounded-lg w-44 h-44 object-cover"/>
                                        <p className="font-bold mt-2 underline decoration-3 underline-offset-4 text-lg">Shendam</p>
                                        <p>Zonal Coordinator</p>
                                        <p className="text-deepgreen">090759382548</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}