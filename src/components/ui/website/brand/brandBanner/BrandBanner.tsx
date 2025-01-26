import { Check } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import "./brandStyle.css"; 
import { Urbanist } from 'next/font/google'; 

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "500", "600", "700"]});
const BrandBanner = () => {
    return (
        <div className={ `${urbanist.className}`}>
            <section className={`relative brandBannerBg  py-24`}>
            <div className="absolute inset-0 bg-gray-300 opacity-20 z-0"></div>

      
      <div className="container relative mx-auto px-4">
        <div className="flex flex-row-reverse  items-center justify-between">
          {/* Left Content */}
          <div className="space-y-2 "> 

            <div className=' flex items-start justify-between'> 

            <h2 className="space-y-2 ms-5">
              <span className="block text-2xl font-medium text-purple-600">Value that</span>
              <span className="block text-4xl font-semibold">Sets us Apart</span>
            </h2> 
 
 <div className=' flex items-center gap-3'> 
 <img src="/star.png" alt="" className='w-[60px] h-[60px]' /> 
 <img src="/star.png" alt="" className='w-[60px] h-[60px] mt-2' /> 
 </div>
            
            </div>
            
            <div className="space-y-3">
              {[
                {
                  title: "Transparent Communication",
                  description: "Success is built on the foundation of disciplined and precise management"
                },
                {
                  title: "Accurate Oversight",
                  description: "Success is built on the foundation of disciplined and precise management"
                },
                {
                  title: "Thorough specifics",
                  description: "Excellence thrives in the careful attention to every intricate detail"
                },
                {
                  title: "Pioneering perfection",
                  description: "Pioneering ideas and exceptional execution define true innovation"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-x-1">
              
                  <div className="">
                    <div className=" flex items-center gap-1">  

                    <div className="rounded-full  p-1">
                      <Check className="h-5 w-5 text-black" />
                    </div> 
                       <div className=' text-[26px] font-[600]'>   {item.title}  </div>
                         
                         </div>
                    <p className="text-[20px] text-[#2A2A2A] font-medium ms-6">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>  
            <div className=' ms-3 mt-3'> 
            <img src="/footerIcon.png" alt="" className='w-auto h-[50px]' />
            </div>
          </div>

          {/* Right Content - Device Mockup */}
          <div className="relative">
            <div className="relative mx-auto max-w-[600px]">
              <Image
                src="/brandBanner.svg"
                alt="Campaign creation interface"
                className="rounded-[2rem] shadow-lg"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>  
        </div>
    );
};

export default BrandBanner;