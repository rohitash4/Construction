import React from "react";
import { FaFacebook, FaTwitter, FaInstagramSquare, FaPinterest, FaPhone, FaMapPin, FaEnvelope } from "react-icons/fa";

export default function Footer () {


    return(
        <>
            <section className=" bg-[#222222] pt-20 ">
                <div className=" grid grid-cols-1 md:grid-cols-3 justify-between gap-10 border-b-1 border-[rgba(255,255,255,0.2)] px-5 md:px-50 pb-10 ">
                    <div className=" p-5 ">
                        <h2 className=" text-3xl uppercase font-bold text-white ">Next <span className="text-red-600 text-3xl uppercase font-bold "> Generation </span></h2>
                        <div className=" flex flex-col gap-1 justify-start items-start mt-5">
                            <div className=" flex gap-2 flex-row justify-center items-center text-[16px] text-white">
                                <FaEnvelope className=" text-red-600 text-lg " /> <p>support@mail.com</p>
                            </div>
                            <div className=" flex gap-2 flex-row justify-center items-center text-[16px] text-white">
                                <FaPhone className=" text-red-600 text-lg " /> <p>+91 1234-567-890</p>
                            </div>
                            <div className=" flex gap-2 flex-row justify-center items-center text-[16px] text-white">
                                <FaMapPin className=" text-red-600 text-lg " /> <p>Mumbai, IN</p>
                            </div>
                        </div>

                        <div className=" flex flex-row gap-3 mt-5 ">
                            <FaFacebook color="#fff" size={28} className="border-1 border-white rounded-full p-1 " />
                            <FaTwitter color="#fff" size={28} className="border-1 border-white rounded-full p-1 " />
                            <FaPinterest color="#fff" size={28} className="border-1 border-white rounded-full p-1 " />
                            <FaInstagramSquare color="#fff" size={28} className="border-1 border-white rounded-full p-1 " />
                        </div>
                    </div>
                    <div className=" p-5 ">
                        <h4 className=" text-2xl uppercase font-semibold text-red-600  ">Quick Links</h4>
                        <div className=" flex flex-col gap-2 mt-5">
                            <p className=" text-white ">Lorem Ipsum</p>
                            <p className=" text-white ">Lorem Ipsum</p>
                            <p className=" text-white ">Lorem Ipsum</p>
                            <p className=" text-white ">Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className=" p-5 ">
                        <h4 className=" text-2xl uppercase font-semibold text-red-600 ">Our Services</h4>
                        <div className=" flex flex-col gap-2 mt-5">
                            <p className=" text-white ">Lorem Ipsum</p>
                            <p className=" text-white ">Lorem Ipsum</p>
                            <p className=" text-white ">Lorem Ipsum</p>
                            <p className=" text-white ">Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
                <div className=" text-red-600 flex flex-col justify-center items-center p-5 " >&copy; Copyright 2025 by MindTech Solutions.</div>
            </section>
        </>
    )
}