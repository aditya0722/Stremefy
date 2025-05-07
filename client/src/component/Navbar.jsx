import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Logo from "../assets/logo.png"; 
import  download  from "../assets/download.jpg";
import { RiSearch2Line } from "react-icons/ri";
export default function Navbar({ isLoggedIn }) {
    const [isSearchVisible, setIsSearchVisible] = useState(true);
    return (
        <nav className=" bg-sky-800 text-white">
            <div className="container flex items-center justify-between mx-auto p-4 w-full gap-20 max-md:gap-3">
          
                                <div className="flex items-center ">
                                    <img
                                        src={Logo}
                                        alt="Logo"
                                        className="h-16 w-16 mr-2 rounded-full shadow-md"
                                    />
                                    <span className="text-xl font-bold ">StreamyFY</span>
                                </div>

                                <div className={`flex mx-4 w-1/3 max-md:w-auto items-center ${isSearchVisible ? ' bg-gray-800 shadow-lg' : ''} rounded-md px-2 relative`}>
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className={`w-full px-4 py-2 rounded-md text-white focus:outline-none shadow-sm ${
                                            isSearchVisible ? "" : "hidden"
                                        }`}
                                    />
                                    <RiSearch2Line
                                        className="ml-2 cursor-pointer w-6 h-6 text-white shadow-sm"
                                        onClick={() => 
                                           { if(window.innerWidth < 768) {
                                setIsSearchVisible(!isSearchVisible)
                            } else {
                                // For larger screens, you can implement a different behavior if needed
                            }
                        }
                        
                            
                        }
                    />
                </div>
                

                {/* Buttons */}
                <div className="flex items-center space-x-4 max-md:hidden shadow-sm">
                    {isLoggedIn ? (
                        <img
                            className="px-4 py-2 rounded-full object-center"
                            src={download}
                            height={70}
                            width={70}
                        />
                    ) : (
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm">
                            Login
                        </button>
                    )}
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow-sm">
                        Subscribe
                    </button>
                </div>
              
            </div>
        </nav>
    );
};

