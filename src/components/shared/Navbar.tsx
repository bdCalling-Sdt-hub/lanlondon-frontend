"use client"
import { useState, useRef } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CmnButton from "./CmnButton";
import { useBrandProfileQuery } from "@/redux/features/auth/authApi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();
  const { data: profile } = useBrandProfileQuery(undefined)
  console.log(profile);

  const navOptions = [
    { label: "Home", path: "/" },
    { label: "I'm a Brand", path: "/brand" },
    { label: "I'm a Creator", path: "/creator" },
    { label: "Contact Us", path: "/contact" },
  ];


  return (
    <div className="bg-black text-white w-full">
      <div className="navbar flex  py-6 container  justify-between items-center relative">
        {/* Mobile menu toggle */}
        <button
          className="lg:hidden z-50"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <HiX size={30} /> : <HiOutlineMenuAlt3 size={30} />}
        </button>

        {/* Logo */}
        <h1 className="text-3xl font-bold">Creator Briefs</h1>
        {/* Nav Menu */}
        <div
          ref={menuRef}
          className={`absolute lg:relative top-16 left-0 lg:top-0 border border-gray-400 lg:left-auto w-full lg:w-auto lg:flex flex-col lg:flex-row bg-[#262729] lg:rounded-full lg:px-6 shadow-lg lg:shadow-none p-5 lg:p-0 space-y-4 lg:space-y-0 lg:space-x-6 transition-all duration-300 z-50 text-[16px] ${isMenuOpen ? "block" : "hidden"
            }`}
        >
          {navOptions.map((option, index) => {
            if (!option.path) {
            
              return (
                <div
                  key={index}
                  className="nav-link flex items-center justify-center flex-col px-3 "
                >
                  {option.label}
                </div>
              );
            }
            
            return (
              <Link key={index} href={option.path}

                className={`nav-link flex flex-col items-center justify-center px-3 py-4 rounded-lg ${pathname === option.path
                    ? "text-green-500"
                    : "hover:text-green-500"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {option.label}

              </Link>
            );
          })}
        </div>

        {/* Right Icons */}
        <div className="nav-icons flex gap-4">
          <Link href="/login">
            <CmnButton className=" py-3 px-8 rounded-xl font-medium">Login</CmnButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;