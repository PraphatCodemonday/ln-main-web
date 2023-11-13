'use client'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const Navbar = () => {
    const [menuStates, setMenuStates] = useState({
        project: false,
        brands: false,
        blogs: false,
        investor: false,
        innovation: false,
        service: false,
        careers: false,
        contact: false,
        menu: true
    })
    const router = useRouter()

    const toggleMenu = (menu: string) => {
        setMenuStates((prev: any) => ({
            project: false,
            brands: false,
            blogs: false,
            investor: false,
            innovation: false,
            service: false,
            careers: false,
            contact: false,
            menu: true,
            [menu]: !prev[menu]
        }))
    }


    return (
        <div className="absolute z-10 w-full">
            <nav className={`relative z-10 flex flex-col items-center px-16 transition-all duration-500 
                ${Object.values(menuStates).some(state => state) ? "bg-[#003C71]" : ""} 
             `}
            >
                <div className="top">
                    <Image
                        className="py-4"
                        src="/images/logo-color.svg"
                        alt="logo"
                        width={200}
                        height={32}
                        onClick={() => router.push('/')}
                    ></Image>
                </div>
                <hr className="bg-white w-[100%]" />
                <div className="py-6 w-[100%] text-white flex justify-center">
                    <div className=" border-r-2 px-6 "
                        onClick={() => toggleMenu('project')}
                    >
                        <button>Project Types</button>

                    </div>
                    <div className="relative border-r-2 px-6"
                        onClick={() => toggleMenu('brands')}
                    >
                        Our Brands
                    </div>
                    <div className="border-r-2 px-6" onClick={() => toggleMenu('blogs')}>Blogs</div>
                    <div className="border-r-2 px-6" onClick={() => toggleMenu('investor')}>Investor Relations</div>
                    <div className="border-r-2 px-6" onClick={() => toggleMenu('innovation')}>Innovation</div>
                    <div className="border-r-2 px-6" onClick={() => toggleMenu('service')}>Service</div>
                    <div className="border-r-2 px-6" onClick={() => toggleMenu('careers')}>Careers</div>
                    <div className="border-r-2 px-6" onClick={() => toggleMenu('contact')}>Contact</div>
                </div>
            </nav>
            {menuStates.project ? (
                <>
                    <div className="slide-down flex text-black h-full "
                    >
                        <div className="bg-[#F2F2F2] w-1/2 h-full px-10 py-12">
                            <Link href={'/project-list'}>
                                Project List
                            </Link>
                        </div>
                        <div className="bg-white w-1/2 h-full border-x-2 px-10 py-12">
                            <Link href={'/project-detail'}>
                                Project Detail
                            </Link>
                        </div>
                    </div>
                </>
            ) : (<></>)}
            {menuStates.brands ? (
                <>
                    <div className="slide-down flex text-black h-full bg-red-600"
                    >
                        <div className="bg-[#F2F2F2] w-1/3 h-full px-10 py-12">
                            Project List
                        </div>
                        <div className="bg-white w-1/3 h-full border-x-2 px-10 py-12">
                            Project Detail
                        </div>
                        <div className="bg-white w-1/3 h-full px-10 py-12">Image</div>
                    </div>
                </>
            ) : (<></>)}
            {menuStates.blogs ? (
                <>
                    <div className="slide-down flex text-black h-full bg-red-600 animate-bounce "
                    >
                        <div className="bg-[#F2F2F2] w-1/3 h-full px-10 py-12">Menu</div>
                        <div className="bg-white w-1/3 h-full border-x-2 px-10 py-12">Project</div>
                        <div className="bg-white w-1/3 h-full px-10 py-12">Image</div>
                    </div>
                </>
            ) : (<></>)}
            {menuStates.investor ? (
                <>
                    <div className="slide-down flex text-black h-full bg-red-600 animate-bounce "
                    >
                        <div className="bg-[#F2F2F2] w-1/3 h-full px-10 py-12">Menu</div>
                        <div className="bg-white w-1/3 h-full border-x-2 px-10 py-12">Project</div>
                        <div className="bg-white w-1/3 h-full px-10 py-12">Image</div>
                    </div>
                </>
            ) : (<></>)}
            {menuStates.innovation ? (
                <>
                    <div className="slide-down flex text-black h-full bg-red-600 animate-bounce "
                    >
                        <div className="bg-[#F2F2F2] w-1/3 h-full px-10 py-12">Menu</div>
                        <div className="bg-white w-1/3 h-full border-x-2 px-10 py-12">Project</div>
                        <div className="bg-white w-1/3 h-full px-10 py-12">Image</div>
                    </div>
                </>
            ) : (<></>)}
            {menuStates.careers ? (
                <>
                    <div className="slide-down flex text-black h-full bg-red-600 animate-bounce "
                    >
                        <div className="bg-[#F2F2F2] w-1/3 h-full px-10 py-12">Menu</div>
                        <div className="bg-white w-1/3 h-full border-x-2 px-10 py-12">Project</div>
                        <div className="bg-white w-1/3 h-full px-10 py-12">Image</div>
                    </div>
                </>
            ) : (<></>)}
            {menuStates.contact ? (
                <>
                    <div className="slide-down flex text-black h-full bg-red-600 animate-bounce "
                    >
                        <div className="bg-[#F2F2F2] w-1/3 h-full px-10 py-12">Menu</div>
                        <div className="bg-white w-1/3 h-full border-x-2 px-10 py-12">Project</div>
                        <div className="bg-white w-1/3 h-full px-10 py-12">Image</div>
                    </div>
                </>
            ) : (<></>)}
            {menuStates.service ? (
                <>
                    <div className="slide-down flex text-black h-full bg-red-600 animate-bounce "
                    >
                        <div className="bg-[#F2F2F2] w-1/3 h-full px-10 py-12">Menu</div>
                        <div className="bg-white w-1/3 h-full border-x-2 px-10 py-12">Project</div>
                        <div className="bg-white w-1/3 h-full px-10 py-12">Image</div>
                    </div>
                </>
            ) : (<></>)}




        </div>
    )
}
export default Navbar