'use client'
import MainLayout from "@/layout/main-layout"
import Slider from "react-slick"

export const ProjectList = () => {
    return (
        <MainLayout>
           
                <Slider
                    dots={true}
                    infinite
                    speed={2000}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={5000}
                >
                    <video className='h-[500px] object-cover' autoPlay loop >
                        <source src="/images/lh-landing.mp4" type='video/mp4' />
                    </video>
                    <div className="h-[500px] bg-slate-600"></div>
                </Slider>
            
            <div className="bg-[#BEAE83] h-[200px] flex justify-center items-center text-white">Secction 1</div>
            <div className="bg-[#525149] h-[200px] flex justify-center items-center text-white">Secction 2</div>
            
        </MainLayout>
    )
}

export default ProjectList