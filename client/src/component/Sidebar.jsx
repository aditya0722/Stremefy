import React from 'react';
import { FaHome, FaSearch, FaMusic, FaHeart, FaUser,FaUpload } from 'react-icons/fa';
 // Add custom styles for Sidebar

const Sidebar = () => {
    return (
        <div className="bg-gray-900 text-white h-full w-64 flex flex-col">
            <div className="p-6 border-b border-gray-700">
                <h2 className="text-2xl font-bold ">StreamyFY</h2>
            </div>
            <div className="flex-1 p-4 space-y-4">
                <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-800 p-2 rounded-md">
                    <FaHome className="text-blue-400 text-xl" />
                    <span className="text-sm font-medium">Home</span>
                </div>
                <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-800 p-2 rounded-md">
                    <FaSearch className="text-blue-400 text-xl" />
                    <span className="text-sm font-medium">Search</span>
                </div>
                <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-800 p-2 rounded-md">
                    <FaUpload className="text-blue-400 text-xl" />
                    <span className="text-sm font-medium">Upload</span>
                </div>
                <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-800 p-2 rounded-md">
                    <FaHeart className="text-blue-400 text-xl" />
                    <span className="text-sm font-medium">Liked Videos</span>
                </div>
                <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-800 p-2 rounded-md">
                    <FaUser className="text-blue-400 text-xl" />
                    <span className="text-sm font-medium">Profile</span>
                </div>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm w-full mt-4">
                        Subscribe
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow-sm w-full mt-4">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;