/* eslint-disable @next/next/no-img-element */
import React from 'react';
import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.png";
import logo3 from "@/assets/logo3.png";
import logo4 from "@/assets/logo4.png";
import logo5 from "@/assets/logo5.png";
import Image from 'next/image';
import { Poppins, Urbanist } from 'next/font/google';
import "./JoinAs.css";
const urbanist = Urbanist({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const JoinAs = () => {
    return (
        <div>

            <div className='flex items-center justify-between my-[55px] container '>
                {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
                    <Image
                        key={index}
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        className="h-[30px]"
                        height={30} // Specify height
                        width={150}  // Specify width
                    />
                ))}
            </div>

            {/* section  */}
            <div>
            <div className="relative  w-full bannerBg2  ">

      <div className="container relative mx-auto flex items-center justify-between px-4 py-[110px]">
        {/* Left Content */}
        <div className="w-full max-w-2xl pr-8">
          <span className="mb-4 inline-block text-[24px] font-medium text-gray-600">
            — Be the Part of the Community
          </span>
          
          <h2 className={`mb-6 text-[48px] font-bold leading-tight text-gray-900 ${urbanist.className}` }>
            Join as Influencer & Earn
          </h2>
          
          <p className={`mb-8 text-lg leading-relaxed text-gray-600 font-semibold ${poppins.className}`}>
            At Creator Brief, we help bands create impactful campaigns and track their success with a powerful dashboard. Customize your promotions, monitor real-time analytics, and understand your audience like never before. From tracking engagement to optimizing your reach, our platform gives you the insights to grow your fanbase and amplify your music&apos;s impact.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 pb-12">
                            <a
                                href="https://play.google.com/store"
                                className="group relative inline-flex items-center justify-center bg-black text-white h-12 px-4 rounded-lg transition-transform hover:scale-105 active:scale-100"
                            >
                                <div className="flex items-center gap-2">
                                    <Image src="/playstore.svg" height={30} width={25} alt='' />
                                    <div className="flex flex-col items-start leading-none">
                                        <span className="text-[10px] opacity-80">GET IT ON</span>
                                        <span className={`text-[18px] font-medium ${urbanist.className}`}>Google Play</span>
                                    </div>
                                </div>
                            </a>

                            <a
                                href="https://apps.apple.com"
                                className="group relative inline-flex items-center justify-center bg-black text-white h-12 px-4 rounded-lg transition-transform hover:scale-105 active:scale-100"
                            >
                                <div className="flex items-center gap-2">
                                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.78 1.18-.19 2.31-.88 3.53-.81 1.54.13 2.72.77 3.47 1.91-3.12 1.83-2.61 5.68.78 7.09-.79 1.96-1.88 3.85-2.86 4Zm-3.19-14.93c-.06-2.09 1.77-3.77 3.74-3.85.45 2.24-1.75 3.85-3.74 3.85Z" />
                                    </svg>
                                    <div className="flex flex-col items-start leading-none">
                                        <span className="text-[10px] opacity-80">Download on the</span>
                                        <span className="text-sm font-medium">App Store</span>
                                    </div>
                                </div>
                            </a>
                        </div> 
        </div>

        {/* Right Image Group */}
        <div className="  h-[400px] w-[400px]">
     <Image src="/group.svg" alt="Image" width={600} height={422} />
        </div>
      </div>
    </div>
            </div>
        </div>
    );
};

export default JoinAs;