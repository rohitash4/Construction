import React, {useState} from "react";
import architecture from "../assets/architecture.jpg"
import workers from "../assets/workers.jpg"
import workers1 from "../assets/workers1.jpg"
import workers2 from "../assets/workers2.jpg"
import users from "../assets/users.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaRegStar } from "react-icons/fa6";
import { ImQuotesLeft } from "react-icons/im";
import '../index.css'



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

            <section>
                <div>
                    <h3 className=" font-semibold text-red-600 text-xl ">What We Offer</h3>
                </div>
            </section>

            <section className=" h-[100%] px-5 xl:px-30 mt-20 mb-20 md:mb-30 md:mt-30 flex flex-col justify-center items-center ">
                <div className=" w-[100%] h-[100%]">
                    <Swiper
                        slidesPerView={3}
                        loop={true}
                        spaceBetween={40}
                        pagination={{
                        clickable: true,
                        }}
                        breakpoints={{

                            380:{
                                slidesPerView:1,
                                spaceBetween: 10,
                            },

                            640: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 3,
                              spaceBetween: 20,
                            },
                            1024: {
                              slidesPerView: 3,
                              spaceBetween: 50,
                            },
                          }}         
                        
                        modules={[Pagination, Navigation]}
                        className="mySwiper h-[500px] md:h-[420px] md:w-[100%] overflow-hidden md:p-20"
                    >
                        <SwiperSlide className=" border-[1px] border-[rgba(0,0,0,.1)] shadow-xl box rounded-3xl p-5 ">
                            <div className="flex flex-row justify-between text-2xl">
                                <div className=" text-4xl text-[rgba(0,0,0,0.3)] ">
                                    <ImQuotesLeft />
                                </div>
                                <div className="flex flex-row justify-center text-amber-400">
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                </div>
                            </div>
                            <p className=" text-md text-[#1d1d1d] mt-5">Integrating leezyAl has been a game-changer for our customer support workflow. We've seen a 40% decrease in response times and a significant uptick in customer satisfaction scores. The Al's ability to understand and process complex queries has freed our team to handle more nuanced issues.</p>

                            <div className=" mt-8 flex flex-row justify-start ">
                                <div className="mr-8">
                                    <img src={users} className="rounded-full w-12 h-12 object-cover size-1 "></img>
                                </div>
                                <div>
                                    <h5 className="text-[rgba(0,0,0,1)]"> John Doe </h5>
                                    <p className="text-[rgba(0,0,0,.5)]"> Technical Staff Head</p>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className=" border-[1px] border-[rgba(0,0,0,.1)] shadow-xl box rounded-3xl p-5 ">
                            <div className="flex flex-row justify-between text-2xl">
                                <div className=" text-4xl text-[rgba(0,0,0,0.3)] ">
                                    <ImQuotesLeft />
                                </div>
                                <div className="flex flex-row justify-center text-amber-400">
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                </div>
                            </div>
                            <p className=" text-md text-[#1d1d1d] mt-5">Integrating leezyAl has been a game-changer for our customer support workflow. We've seen a 40% decrease in response times and a significant uptick in customer satisfaction scores. The Al's ability to understand and process complex queries has freed our team to handle more nuanced issues.</p>

                            <div className=" mt-8 flex flex-row justify-start ">
                                <div className="mr-8">
                                    <img src={users} className="rounded-full w-12 h-12 object-cover size-1 "></img>
                                </div>
                                <div>
                                    <h5 className="text-[rgba(0,0,0,1)]"> John Doe </h5>
                                    <p className="text-[rgba(0,0,0,.5)]"> Technical Staff Head</p>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className=" border-[1px] border-[rgba(0,0,0,.1)] shadow-xl box rounded-3xl p-5 ">
                            <div className="flex flex-row justify-between text-2xl">
                                <div className=" text-4xl text-[rgba(0,0,0,0.3)] ">
                                    <ImQuotesLeft />
                                </div>
                                <div className="flex flex-row justify-center text-amber-400">
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                </div>
                            </div>
                            <p className=" text-md text-[#1d1d1d] mt-5">Integrating leezyAl has been a game-changer for our customer support workflow. We've seen a 40% decrease in response times and a significant uptick in customer satisfaction scores. The Al's ability to understand and process complex queries has freed our team to handle more nuanced issues.</p>

                            <div className=" mt-8 flex flex-row justify-start ">
                                <div className="mr-8">
                                    <img src={users} className="rounded-full w-12 h-12 object-cover size-1 "></img>
                                </div>
                                <div>
                                    <h5 className="text-[rgba(0,0,0,1)]"> John Doe </h5>
                                    <p className="text-[rgba(0,0,0,.5)]"> Technical Staff Head</p>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className=" border-[1px] border-[rgba(0,0,0,.1)] shadow-xl box rounded-3xl p-5 ">
                            <div className="flex flex-row justify-between text-2xl">
                                <div className=" text-4xl text-[rgba(0,0,0,0.3)] ">
                                    <ImQuotesLeft />
                                </div>
                                <div className="flex flex-row justify-center text-amber-400">
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                </div>
                            </div>
                            <p className=" text-md text-[#1d1d1d] mt-5">Integrating leezyAl has been a game-changer for our customer support workflow. We've seen a 40% decrease in response times and a significant uptick in customer satisfaction scores. The Al's ability to understand and process complex queries has freed our team to handle more nuanced issues.</p>

                            <div className=" mt-8 flex flex-row justify-start ">
                                <div className="mr-8">
                                    <img src={users} className="rounded-full w-12 h-12 object-cover size-1 "></img>
                                </div>
                                <div>
                                    <h5 className="text-[rgba(0,0,0,1)]"> John Doe </h5>
                                    <p className="text-[rgba(0,0,0,.5)]"> Technical Staff Head</p>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className=" border-[1px] border-[rgba(0,0,0,.1)] shadow-xl box rounded-3xl p-5 ">
                            <div className="flex flex-row justify-between text-2xl">
                                <div className=" text-4xl text-[rgba(0,0,0,0.3)] ">
                                    <ImQuotesLeft />
                                </div>
                                <div className="flex flex-row justify-center text-amber-400">
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                </div>
                            </div>
                            <p className=" text-md text-[#1d1d1d] mt-5">Integrating leezyAl has been a game-changer for our customer support workflow. We've seen a 40% decrease in response times and a significant uptick in customer satisfaction scores. The Al's ability to understand and process complex queries has freed our team to handle more nuanced issues.</p>

                            <div className=" mt-8 flex flex-row justify-start ">
                                <div className="mr-8">
                                    <img src={users} className="rounded-full w-12 h-12 object-cover size-1 "></img>
                                </div>
                                <div>
                                    <h5 className="text-[rgba(0,0,0,1)]"> John Doe </h5>
                                    <p className="text-[rgba(0,0,0,.5)]"> Technical Staff Head</p>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className=" border-[1px] border-[rgba(0,0,0,.1)] shadow-xl box rounded-3xl p-5 ">
                            <div className="flex flex-row justify-between text-2xl">
                                <div className=" text-4xl text-[rgba(0,0,0,0.3)] ">
                                    <ImQuotesLeft />
                                </div>
                                <div className="flex flex-row justify-center text-amber-400">
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                </div>
                            </div>
                            <p className=" text-md text-[#1d1d1d] mt-5">Integrating leezyAl has been a game-changer for our customer support workflow. We've seen a 40% decrease in response times and a significant uptick in customer satisfaction scores. The Al's ability to understand and process complex queries has freed our team to handle more nuanced issues.</p>

                            <div className=" mt-8 flex flex-row justify-start ">
                                <div className="mr-8">
                                    <img src={users} className="rounded-full w-12 h-12 object-cover size-1 "></img>
                                </div>
                                <div>
                                    <h5 className="text-[rgba(0,0,0,1)]"> John Doe </h5>
                                    <p className="text-[rgba(0,0,0,.5)]"> Technical Staff Head</p>
                                </div>
                            </div>

                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}