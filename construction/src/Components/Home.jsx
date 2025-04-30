import React, {useState} from "react";
import architecture from "../assets/architecture.jpg"
import workers from "../assets/workers.jpg"
import workers1 from "../assets/workers1.jpg"
import workers2 from "../assets/workers2.jpg"
import users from "../assets/users.jpg"
import services1 from "../assets/services1.jpg"
import services2 from "../assets/services2.jpg"
import services3 from "../assets/services3.jpg"
import services4 from "../assets/services4.jpg"
import services5 from "../assets/services5.jpg"
import services6 from "../assets/services6.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaRegStar } from "react-icons/fa6";
import { ImQuotesLeft } from "react-icons/im";
import '../index.css'

import { useForm } from 'react-hook-form';



import 'swiper/css/bundle'

export default function Home() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
  

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
                        <h2 className="text-[#222222] uppercase text-4xl md:text-5xl font-bold">About Us</h2>
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

            <section className="flex flex-col justify-center items-center bg-[url(./assets/bg-image.jpg)] bg-no-repeat bg-cover h-auto bg-[#f4f4f4] ">
            <div className="h-full w-full bg-[rgba(255,255,255,0.9)] px-5 md:px-50 py-20 flex justify-center flex-col items-center ">
                <div className="text-black border-l-2">
                    <h3 className=" font-semibold text-lg ml-2 text-red-600 ">What We Offer</h3>
                </div>
                <h2 className="text-5xl text-[#1d1d1d] font-bold">Our Services</h2>
                <div className="w-[100%] gap-7 mt-20 grid md:grid-cols-3 grid-cols-1">
                    <div className=" md:h-[500px] bg-gray-100 ">
                        <img src={services1} className=" h-[250px] object-cover "></img>
                        <div className=" border-1 border-red-600 w-[100%] h-[250px] px-5 py-8 flex flex-col items-start gap-4">
                            <h4 className=" text-2xl font-bold uppercase text-[#222222] ">Roofing</h4>
                            <p className="text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p>
                            <button className=" bg-red-600 py-1 px-5 cursor-pointer text-white uppercase font-semibold ">Read More <span>➞</span> </button>
                        </div>
                    </div>
                    <div className=" md:h-[500px] bg-gray-100 ">
                        <img src={services2} className=" h-[250px] object-cover "></img>
                        <div className=" border-1 border-red-600 w-[100%] h-[250px] px-5 py-8 flex flex-col items-start gap-4">
                            <h4 className=" text-2xl font-bold uppercase text-[#222222] ">Gutters</h4>
                            <p className="text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p>
                            <button className=" bg-red-600 py-1 px-5 cursor-pointer text-white uppercase font-semibold ">Read More <span>➞</span> </button>
                        </div>
                    </div>
                    <div className=" md:h-[500px] bg-gray-100 ">
                        <img src={services3} className=" h-[250px] object-cover "></img>
                        <div className=" border-1 border-red-600 w-[100%] h-[250px] px-5 py-8 flex flex-col items-start gap-4">
                            <h4 className=" text-2xl font-bold uppercase text-[#222222] ">Fencing</h4>
                            <p className="text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p>
                            <button className=" bg-red-600 py-1 px-5 cursor-pointer text-white uppercase font-semibold ">Read More <span>➞</span> </button>
                        </div>
                    </div>
                    <div className="md:h-[500px] bg-gray-100 ">
                        <img src={services4} className=" h-[250px] object-cover "></img>
                        <div className=" border-1 border-red-600 w-[100%] h-[250px] px-5 py-8 flex flex-col items-start gap-4">
                            <h4 className=" text-2xl font-bold uppercase text-[#222222] ">Garage Doors</h4>
                            <p className="text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p>
                            <button className=" bg-red-600 py-1 px-5 cursor-pointer text-white uppercase font-semibold ">Read More <span>➞</span> </button>
                        </div>
                    </div>
                    <div className=" md:h-[500px] bg-gray-100 ">
                        <img src={services5} className=" h-[250px] object-cover "></img>
                        <div className=" border-1 border-red-600 w-[100%] h-[250px] px-5 py-8 flex flex-col items-start gap-4">
                            <h4 className=" text-2xl font-bold uppercase text-[#222222] ">Windows</h4>
                            <p className="text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p>
                            <button className=" bg-red-600 py-1 px-5 cursor-pointer text-white uppercase font-semibold ">Read More <span>➞</span> </button>
                        </div>
                    </div>
                    <div className=" md:h-[500px] bg-gray-100 ">
                        <img src={services6} className=" h-[250px] object-cover "></img>
                        <div className=" border-1 border-red-600 w-[100%] h-[250px] px-5 py-8 flex flex-col items-start gap-4">
                            <h4 className=" text-2xl font-bold uppercase text-[#222222] ">Interior & Exterior</h4>
                            <p className="text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p>
                            <button className=" bg-red-600 py-1 px-5 cursor-pointer text-white uppercase font-semibold ">Read More <span>➞</span> </button>
                        </div>
                    </div>
                </div>
            </div>
            </section>

            <section className=" h-[100%] px-5 xl:px-30 mt-20 mb-20 md:mb-30 md:mt-30 flex flex-col justify-center items-center ">
                <h2 className="text-5xl text-[#222222] font-bold">Testimonials</h2>
                <div className=" w-[100%] h-[100%] mt-20">
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
                            <p className=" text-md text-[#222222] mt-5">Integrating leezyAl has been a game-changer for our customer support workflow. We've seen a 40% decrease in response times and a significant uptick in customer satisfaction scores. The Al's ability to understand and process complex queries has freed our team to handle more nuanced issues.</p>

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
                            <p className=" text-md text-[#222222] mt-5">Integrating leezyAl has been a game-changer for our customer support workflow. We've seen a 40% decrease in response times and a significant uptick in customer satisfaction scores. The Al's ability to understand and process complex queries has freed our team to handle more nuanced issues.</p>

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
                            <p className=" text-md text-[#222222] mt-5">Integrating leezyAl has been a game-changer for our customer support workflow. We've seen a 40% decrease in response times and a significant uptick in customer satisfaction scores. The Al's ability to understand and process complex queries has freed our team to handle more nuanced issues.</p>

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
                            <p className=" text-md text-[#222222] mt-5">Integrating leezyAl has been a game-changer for our customer support workflow. We've seen a 40% decrease in response times and a significant uptick in customer satisfaction scores. The Al's ability to understand and process complex queries has freed our team to handle more nuanced issues.</p>

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
                            <p className=" text-md text-[#222222] mt-5">Integrating leezyAl has been a game-changer for our customer support workflow. We've seen a 40% decrease in response times and a significant uptick in customer satisfaction scores. The Al's ability to understand and process complex queries has freed our team to handle more nuanced issues.</p>

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

            <section className=" h-150 bg-[url(./assets/bg-image2.jpg)] bg-no-repeat bg-cover ">
                    <div className="h-full w-full px-5 py-20 md:px-50 bg-[rgba(255,0,0,0.8)] ">
                        <div className=" flex flex-col md:flex-row justify-between items-center ">
                            <div className="flex flex-col justify-center items-start gap-3 w-full md:w-[80%] h-[100%] ">
                                <span className=" border-l-2 border-white px-3 "><h3 className=" text-white text-lg font-medium ">Contact Us</h3></span>
                                <h2 className=" text-white text-2xl md:text-[40px] font-bold uppercase ">Schedule Free Property Inspection!</h2>
                                <p className=" text-white text-xl ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy.</p>
                            </div>

                            <div className=" w-full md:w-[20%] h-[100%] flex flex-row md:justify-end items-center ">
                                <button className=" bg-white mt-5 sm:mt-2 py-3 px-4 uppercase font-semibold text-red-600 text-lg after:content-['➞'] "> Schedule Free </button>
                            </div>
                        </div>
                    </div>
            </section>

            <section className=" h-100 w-full mb-40 md:mb-20 bg-white md:px-50 z-0 px-5 ">
                <div className=" w-full h-[650px] -translate-y-50 md:-translate-y-70 z-10 bg-amber-500 flex flex-col md:flex-row ">
                    <div className=" w-full md:w-[50%] h-full bg-[url(./assets/bg-image5.jpg)] bg-no-repeat bg-cover  ">
                        
                        <div className=" bg-[rgba(228,228,228,0.8)] h-full w-full p-10 flex flex-col ">
                            <h3 className=" border-l-2 border-black pl-2 text-red-600 font-semibold "> Get Quote</h3>
                            <h2 className=" font-bold text-4xl uppercase text-[#222222] mt-5 mb-10 ">Request A Quote</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className=" grid gap-7 grid-cols-2 items-start ">
                                <input className=" bg-white p-3 placeholder:text-[#222222] " type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
                                <input className=" bg-white p-3 placeholder:text-[#222222] " type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
                                <input className=" bg-white p-3 placeholder:text-[#222222] " type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                                <input className=" bg-white p-3 placeholder:text-[#222222] " type="text" placeholder="Subject" {...register("Subject", {required:false} )} />
                                <input className=" bg-white p-3 h-50 col-span-2 placeholder:text-[#222222] placeholder:absolute placeholder:top-[7%] " type="text" placeholder="Message" {...register("Message")} />

                                <input className=" bg-red-600 py-3.5 px-8 col-span-2 text-white uppercase text-xl font-semibold w-[200px] " value="Send Message" type="submit" />
                            </form>
                        </div>

                    </div>

                    <div className=" w-full md:w-[50%] h-full bg-[url(./assets/workers7.jpg)] bg-no-repeat bg-cover bg-center ">

                    </div>
                </div>
            </section>
        </>
    )
}