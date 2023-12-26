import React, { useState } from "react";
import images from "../constants/images";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed w-full flex justify-between items-center px-12 p-4 bg-black text-white text-md font-regular z-20">
      <div className="flex justify-start items-center">
        <img
          src={images.logo}
          alt="My Barber Logo"
          className="mx-auto"
          style={{ maxWidth: "100px" }}
        />
      </div>

      {/* Desktop navigation */}
      <div className="hidden lg:inline">
        <ul className="flex justify-center gap-[2vw] hover:cursor-pointer tracking-wide">
          <li className="px-3 py-1 hover:rounded hover:text-[#f2e7d9]/90 tracking-wider">
            Book Now
          </li>
          <li className="px-3 py-1 hover:rounded hover:text-[#f2e7d9]/90 tracking-wider">
            Our Team
          </li>
          <li className="px-3 py-1 hover:rounded hover:text-[#f2e7d9]/90 tracking-wider">
            Gallery
          </li>
          <li className="px-3 py-1 hover:rounded hover:text-[#f2e7d9]/90 tracking-wider">
            Find Us
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden relative">
        <button onClick={toggleNav} className="text-white">
          {isOpen ? '' : <Menu />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed top-0 right-0 h-screen w-full bg-black/80 transition-transform transform ease-out duration-1000">
            <ul className="flex flex-col items-center justify-center h-full tracking-wide cursor-pointer">
              <li className="py-2 hover:text-[#f2e7d9]/90 tracking-wider mb-4">Book Now</li>
              <li className="py-2 hover:text-[#f2e7d9]/90 tracking-wider mb-4">Our Team</li>
              <li className="py-2 hover:text-[#f2e7d9]/90 tracking-wider mb-4">Gallery</li>
              <li className="py-2 hover:text-[#f2e7d9]/90 tracking-wider mb-4">Find Us</li>
            </ul>

            {/* Close Button */}
            <div
              className="absolute top-7 right-12"
              onClick={toggleNav}
              style={{ cursor: "pointer" }}
            >
              <X className="text-white" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
