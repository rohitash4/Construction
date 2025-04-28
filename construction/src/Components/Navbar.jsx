import React, {useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaFacebook, FaTwitter, FaInstagramSquare, FaPinterest, FaPhone, FaMapPin, FaEnvelope } from "react-icons/fa";

export default function Navbar () {

        // State to manage the navbar's visibility
        const [nav, setNav] = useState(false);
      
        // Toggle function to handle the navbar's display
        const handleNav = () => {
          setNav(!nav);
        };
      
        // Array containing navigation items
        const navItems = [
          { id: 1, text: 'Home' },
          { id: 2, text: 'Company' },
          { id: 3, text: 'Resources' },
          { id: 4, text: 'About' },
          { id: 5, text: 'Contact' },
        ];
      

    return(
        <>
            <div className="header">
                <div className="top_header md:px-50 px-5 bg-neutral-900 py-3 flex md:flex-row justify-between">
                    <div className="social_icons_box flex flex-row justify-center items-center gap-2">
                        <FaFacebook color="#1877F2" size={20} />
                        <FaTwitter color="#1da1f2" size={20} />
                        <FaPinterest color="#E60023" size={20} />
                        <FaInstagramSquare color="#d62976" size={20} />
                    </div>

                    <div className="flex md:flex-row flex-col justify-between md:gap-10 text-sm">
                        <div className="phone_icon_box p-0 m-0 text-white flex flex-row gap-1 justify-center items-center align-middle place-items-center">
                            <FaPhone /> <p><a href="#">+91 1234-567-890</a></p>
                        </div>
                        <div className="email_icon_box p-0 m-0 text-white flex flex-row gap-1 justify-center items-center align-middle place-items-center ">
                            <FaEnvelope /> <p><a href="#">support@gmail.com</a></p>
                        </div>
                    </div>
                </div>

                <div className="main_header w-full py-5 px-5 flex flex-row justify-between items-center md:px-50 shadow-md bg-white">
                    <div className="logo cursor-pointer">
                        <h1 className="text-2xl md:text-2xl font-bold text-black uppercase">Next <span className="text-red-600">Generation</span></h1>
                    </div>
                    <div className='flex justify-between items-center text-black'>

                        {/* Desktop Navigation */}
                        <ul className='hidden md:flex space-x-6'>
                            {navItems.map(item => (
                            <li
                                key={item.id}
                                className='p-2 hover:text-red-600 duration-300 text-black cursor-pointer'
                            >
                                {item.text}
                            </li>
                            ))}
                        </ul>

                        {/* Mobile Navigation Icon */}
                        <div onClick={handleNav} className='block md:hidden'>
                            <AiOutlineMenu size={24}/>
                        </div>

                        {/* Mobile Navigation Menu */}
                        <ul
                            className={
                            nav
                                ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                                : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                            }
                        >

                            {/* Mobile Navigation Items */}
                            <div className="text-white w-full flex flex-row justify-end text-2xl items-end p-5">
                                <AiOutlineClose onClick={handleNav} size={24} />
                            </div>

                            {navItems.map(item => (
                            <li
                                key={item.id}
                                className='p-4 border-b rounded-xl text-white hover:bg-[#fff] duration-300 hover:text-white cursor-pointer border-gray-600'
                            >
                                {item.text}
                            </li>
                            ))}
                        </ul>
                        </div>
                </div>
            </div>
        </>
    )
}