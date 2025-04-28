import React, {useState} from "react";
import architecture from "../assets/architecture.jpg"
import workers from "../assets/workers.jpg"
import workers1 from "../assets/workers1.jpg"
import workers2 from "../assets/workers2.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


import 'swiper/css/bundle'

export default function Home() {
    const [count, setCount] = useState(0);

    return (
        <>
            <section className="px-5 md:px-50 flex flex-col justify-center items-start md:w-full md:h-[700px] h-[450px] bg-[url(./assets/2150576450.jpg)] bg-no-repeat bg-cover bg-center bg-gray-200 bg-blend-multiply">
                <div className="flex flex-col justify-center md:items-center">
                    <h1 className=" text-4xl md:text-6xl font-semibold"> NEXT GENERATION </h1>
                    <div className=" ml-5 md:ml-0 relative text-red-600 font-semibold text-xl md:text-4xl uppercase before:absolute after:absolute before:h-[4px] before:bg-red-600 before:top-[50%] before:left-[-5%] before:w-[5%] after:h-[4px] after:w-[5%] after:bg-red-600 md:after:right-[-5%] after:top-[50%] "> Roofing & Construction </div>
                    <p className=" text-xs md:text-sm text-black uppercase font-semibold md:tracking-[3px] ">Always honest, always affordable, always working</p>
                </div>
            </section>

            <section className="px-5 py-20 md:px-50 md:py-20 justify-center items-center">
                <div className="grid md:grid-cols-2 gap-7 ">
                    <div className="">
                        <h2 className="text-[#1d1d1d] uppercase text-4xl md:text-5xl font-bold">About Us</h2>
                        <p className="text-lg pt-5 md:pt-10">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.<br/><br/>

                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>

                        <button className=" bg-red-600 text-white py-3 px-7 text-xl uppercase font-semibold mt-10 ">Read More</button>
                    </div> 
                    <div className=" flex flex-row relative flex-wrap h-auto">
                        <img className="w-[50%] border-8 border-white h-[400px] md:h-[100%] object-cover" src={workers}></img>
                        <img className=" w-[50%] border-8 border-white h-[400px] md:h-[100%] object-cover" src={workers1}></img>
                        <img className=" md:absolute md:top-[60%] md:left-[36%] border-10 object-cover border-white h-[350px] w-[350px]" src={architecture}></img>
                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-center h-auto md:h-[600px] px-5 md:px-50 py-20 md:mt-30 bg-[url(./assets/bg-image.jpg)] bg-no-repeat bg-cover bg-blend-multiply bg-[#4a4a4ae4] ">
                <div className="flex gap-15 flex-col md:flex-row justify-center items-center h-auto ">
                    <div className="relative w-[100%] md:w-[50%] bg-amber-200 flex flex-col justify-start items-start">
                        <div className=" z-0 bg-[url(./assets/architecture.jpg)] bg-no-repeat bg-cover h-[300px] md:h-[350px] md:w-[100%] w-[100%] bg-orange-100 bg-blend-colorburn "></div>
                        <img src={workers2} className="w-[340px] md:w-[100%] h-[300px] md:h-[350px] absolute top-[20px] md:top-[30px] left-[20px] md:left-[30px] z-10 object-cover "></img>
                    </div>
                    <div className=" w-[100%] md:w-[50%] ">
                        <h3 className=" border-l-2 pl-2 font-semibold text-lg text-white "> Explore The Features </h3>
                        <h2 className=" uppercase text-red-600 text-2xl md:text-[42px] font-bold py-5">Project Commmitment</h2>
                        <p className=" text-white text-xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <button className=" bg-white text-red-600 py-3 px-7 text-xl uppercase font-semibold mt-10 after:content-['🡪'] after:ml-2 ">
                            Read More
                        </button>
                    </div>
                </div>
            </section>

            <section className=" h-auto px-5 md:px-50 flex flex-col justify-center items-center ">
                <div className="bg-amber-500 w-[100%] h-100 ">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide className="h-100 bg-blue-500">Slide 1</SwiperSlide>
                        <SwiperSlide className="h-[400px] bg-green-500 ">Slide 2</SwiperSlide>
                        <SwiperSlide className="h-[400px] ">Slide 3</SwiperSlide>
                        <SwiperSlide className="h-[400px] ">Slide 4</SwiperSlide>
                        <SwiperSlide className="h-[400px] ">Slide 5</SwiperSlide>
                        <SwiperSlide className="h-[400px] ">Slide 6</SwiperSlide>
                        <SwiperSlide className="h-[400px] ">Slide 7</SwiperSlide>
                        <SwiperSlide className="h-[400px] ">Slide 8</SwiperSlide>
                        <SwiperSlide className="h-[400px] ">Slide 9</SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}