/* eslint-disable @next/next/no-img-element */
import "./Banner.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Urbanist } from "next/font/google";
import CmnButton from "@/components/shared/CmnButton";
import { MdArrowOutward } from "react-icons/md";
const urbanist = Urbanist({ subsets: ["latin"], weight: "400" });
const Banner = () => {
  return (
    <div className="bannerBg h-[calc(100vh-92px)] flex items-center justify-center "> 
    <div className=" container  flex items-center justify-between w-full "> 
      <div className="w-full">
        <div className="flex items-center gap-2">
          <img src="/heart.png" alt="" />
          <p className={`text-2xl font-extrabold  ${urbanist.className}` }>Hi We’re Creator Brief</p>
        </div>
        <h1 className=  { ` ${urbanist.className } text-[84px]  font-[1600] w-[90%] leading-snug`}>
          Authentic Job Bulletin for Influencers
        </h1>
        <div className="flex mt-10 mb-20 items-center gap-5">
          <div className="flex -space-x-5">
            <img
              className="w-14 h-14 border-4 border-black  object-cover rounded-full"
              src="/img1.webp"
              alt=""
            />
            <img
              className="w-14 h-14 border-4 border-black object-cover rounded-full"
              src="/img2.jpg"
              alt=""
            />
            <img
              className="w-14 h-14 border-4 border-black object-cover rounded-full"
              src="/img3.jpg"
              alt=""
            />
            <p className="bg-white rounded-full border-4 border-black w-14 h-14 flex items-center justify-center">
              <span className="font-bold">86K+</span>
            </p>
          </div>
          <p className={`text-2xl font-bold  ${urbanist.className}`}>Influencers on Our Platform</p>
        </div>
        <div>
          <CmnButton className={`${urbanist.className} py-5 mt-3 border border-black px-16 rounded-full font-semibold text-xl flex items-center gap-3 `} >
            Create Your Campaign <MdArrowOutward />
          </CmnButton>
        </div>
        <div className="w-[90%] bg-black/80 h-[2px] mt-20"></div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="p-1 border border-black hover:text-white hover:bg-black rounded-full w-11 flex items-center justify-center h-11">
          <FaFacebook size={30} />
        </div>
        <div className="p-1 border border-black hover:text-white hover:bg-black rounded-full w-11 flex items-center justify-center h-11">
          <FaTwitter size={30} />
        </div>
        <div className="p-1 border border-black hover:text-white hover:bg-black rounded-full w-11 flex items-center justify-center h-11">
          <FaLinkedin size={30} />
        </div>
        <div className="p-1 border border-black hover:text-white hover:bg-black rounded-full w-11 flex items-center justify-center h-11">
          <FaInstagram size={30} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
