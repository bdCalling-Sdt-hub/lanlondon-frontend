"use client";
import { useRouter } from "next/navigation";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
  } from "react-icons/fa";

const Footer = () => { 
  const router = useRouter();
    return (
        <div className="bg-black h-[400px]">
        <div className="flex items-center justify-center pt-20 gap-10 text-white container mx-auto">
          <div className="w-[35%] space-y-5">
            <h1 className="text-3xl font-bold">Creator Brief</h1>
            <p className="w-[90%] text-gray-300">
              Authentic Job Bulletins for Influencer. Friendly for brands to
              create campaign.
            </p>
          
          </div>
          <div className="w-[15%]">
            <h1 className="text-xl font-semibold my-5">Pages</h1>
            <div className="space-y-2">
              <p className="cursor-pointer "  onClick={() =>router.push("/")}>Home</p>
              <p className="cursor-pointer "  onClick={() =>router.push("/about")}>About</p>
           
            </div>
          </div>
          <div className="w-[15%]">
            <h1 className="text-xl font-semibold my-5">Support</h1>
            <ul className="space-y-2 ">
              <p className="cursor-pointer " onClick={() =>router.push("/contact")}>Contact Us</p>
              <p className="cursor-pointer " onClick={() =>router.push("/privacy")}>Privacy Policy</p>
           
            </ul>
          </div>
          <div className="w-[35%]">
          <h1 className="text-xl font-semibold pb-3">Social Media</h1>
            <div className="flex gap-5">
              <div className="flex gap-5 text-black">
                <div className="p-2 bg-white rounded-full">
                  <FaFacebook size={25} />
                </div>
              </div>
              <div className="flex gap-5 text-black">
                <div className="p-2 bg-white rounded-full">
                  <FaTwitter size={25} />
                </div>
              </div>
              <div className="flex gap-5 text-black">
                <div className="p-2 bg-white rounded-full">
                  <FaInstagram size={25} />
                </div>
              </div>
              <div className="flex gap-5 text-black">
                <div className="p-2 bg-white rounded-full">
                  <FaLinkedin size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;