/* eslint-disable @next/next/no-img-element */
"use client"
import "./Banner.css";
import {  FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Urbanist } from "next/font/google";
import { GoDotFill } from "react-icons/go";
import { TiSocialLinkedin } from "react-icons/ti"; 
import Typewriter from "typewriter-effect";
const urbanist = Urbanist({ subsets: ["latin"], weight: ["400" , "500", "600", "700" , "800" , "900" ] }); 
const Banner = () => { 

  const list = [
     "Influencers who have an engaged, loyal audience and prioritize trust over numbers." , 
     "A strong ability to create content that reflects authenticity and creativity." ,
     "Clear communication and commitment to deadlines.", 
     "A willingness to share constructive feedback and collaborate for the best results."
  ]
  return (
    <div className="bannerBg h-[calc(100vh-92px)] flex items-center justify-center "> 
    <div className=" container  flex items-center justify-between w-full "> 
      <div className="w-full">
        <div className="flex items-center gap-2">
          <img src="/heart.png" alt="" className="animate-bounce" />
          <p className={`text-2xl font-[600]  ${urbanist.className}` }>Hi We’re Creator Brief</p>
        </div>
        <h1
      className={`text-[84px] font-[700] w-[90%] leading-snug`}
      style={{ fontFamily: "Urbanist, sans-serif" }}
    >
      Authentic Job Bulletin for{" "}
      <span className="text-highlight">
        <Typewriter
          options={{
            strings: ["Influencers"],
            autoStart: true,
            loop: true,
            delay: 120, // Adjust typing speed
          }}
        />
      </span>
    </h1>

        <div className="ms-2 flex flex-col gap-2 mt-3"> 
          { 
            list?.map((item , index) =>  (
              <div key={index} className="flex items-center gap-2">
                <p><GoDotFill size={10} /> </p>
                <p className={`text-lg font-[500]  ${urbanist.className}`}>{item}</p>
              </div>
            ))
          }
        </div>
        <div className="flex mt-7 mb-12 items-center gap-5">
          <div className="flex -space-x-5">
            <img
              className="w-14 h-14 border-2 border-black  object-cover rounded-full"
              src="/img1.webp"
              alt=""
            />
            <img
              className="w-14 h-14 border-2 border-black object-cover rounded-full"
              src="/img2.jpg"
              alt=""
            />
            <img
              className="w-14 h-14 border-2 border-black object-cover rounded-full"
              src="/img3.jpg"
              alt=""
            />
            <p className="bg-white rounded-full border-2 border-black w-14 h-14 flex items-center justify-center">
              <span className="font-bold">86K+</span>
            </p>
          </div>
          <p className={`text-2xl font-[400]  ${urbanist.className}`}>Influencers on Our Platform</p>
        </div>
        <div>
          <button className={`${urbanist.className} py-4  border border-black px-6 rounded-xl font-[600]  text-xl flex items-center gap-3 bg-primary `} >
           <span> Create Your Campaign </span>   
          </button>
        </div>
        
      </div>
      <div className="flex flex-col gap-5">
        <div className="p-2 border border-black hover:text-white hover:bg-black rounded-full w-12 flex items-center justify-center h-12">
          <FaFacebookF size={27} />
        </div>
        <div className="p-1 border border-black hover:text-white hover:bg-black rounded-full w-12 flex items-center justify-center h-12">
          <FaTwitter size={26} />
        </div>
        <div className="p-1 border border-black hover:text-white hover:bg-black rounded-full w-12 flex items-center justify-center h-12">
          <TiSocialLinkedin size={30} />
        </div>
        <div className="p-1 border border-black hover:text-white hover:bg-black rounded-full w-12 flex items-center justify-center h-12">
          <FaInstagram size={27} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
