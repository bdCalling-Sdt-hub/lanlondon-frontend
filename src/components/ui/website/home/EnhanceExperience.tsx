/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react'; 
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({ subsets: ['latin'], weight: '400' }); 

const EnhanceExperience = () => {
    return ( 
        <div className=' '>
            <div  
                className=" h-auto  z-30  relative"
                style={{
                    backgroundImage: `url('/banner.svg')`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    backgroundRepeat: 'no-repeat', 
                    width: "100%", 
                    height: "100%",   
                    objectFit: 'cover', 
                    backgroundColor: "#ffe6f7"
                }}
            > 
            <div className='container pb-[100px]'>

                <div className="flex lg:flex-row flex-col-reverse items-center  w-full">
                    {/* Left Column */}
                    <div className="  w-full px-4 mb-40">
                    
                    <div className={`flex flex-col  text-[40px] font-bold `}>
                        <p className='text-[#5C5C5C]'>Enhance your experience </p> 
                        <p className='text-[#7A00F1] text-[35px]'> Download the Creator Brief app today! </p>
                    </div>

                        <p className="text-sm md:text-base text-[#5C5C5C] tracking-tight w-full lg:py-6 pb-10">
                        Discover a whole new level of convenience with our mobile app. From browsing our delectable menu to securing exclusive deals, it&apos;s your gateway to a world of culinary delights. Download now and elevate your dining experience with just a tap.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 md:gap-6 pb-16">
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

                    {/* Right Column - Phone Mockup */}
                    <div className="lg:w-[44%] w-full flex items-center justify-end lg:mb-0 mb-5">
                        <div className="relative lg:w-[443px] w-full lg:h-[614px] h-[400px] pb-3">
                            <img
                                src="/phone.svg"
                                alt="Tweet App Interface"
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default EnhanceExperience;
