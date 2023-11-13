'use client'

// import Image from 'next/image'
import Navbar from '../layout/navbar'
import LandingSearch from '../components/landing-search'
import Slider from "react-slick";
import { ReactElement } from 'react';
import MainLayout from '@/layout/main-layout';



export default function Home(): ReactElement {

  return (
    <MainLayout>
      <div className=" h-[800px] w-full ">
        <Slider
          dots={true}
          infinite
          speed={2000}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={5000}
        >
          <video className='h-[800px] object-cover' autoPlay loop >
            <source src="/images/lh-landing.mp4" type='video/mp4' />
          </video>
          <div className="h-[800px] bg-slate-600"></div>
        </Slider>
      </div>

      <div className="relative bg-[#003C71] w-full h-[100px] text-white">search filter</div>

    </MainLayout>




  )
}
