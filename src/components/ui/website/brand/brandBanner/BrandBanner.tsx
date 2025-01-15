import { Check } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const BrandBanner = () => {
    return (
        <div>
            <section className="relative overflow-hidden bg-white py-24">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: 'linear-gradient(-45deg, transparent 46%, #E5E7EB 46%, #E5E7EB 54%, transparent 54%)',
          backgroundSize: '20px 20px'
        }}
      />
      
      <div className="container relative mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="space-y-2">
            <h2 className="space-y-2 ms-5">
              <span className="block text-2xl font-medium text-purple-600">Value that</span>
              <span className="block text-4xl font-semibold">Sets us Apart</span>
            </h2>
            
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

                    <div className="rounded-full bg-purple-100 p-1">
                      <Check className="h-5 w-5 text-purple-600" />
                    </div> 
                       <div className='font-medium text-[30px]'>   {item.title}  </div>
                         
                         </div>
                    <p className="text-sm text-[#2A2A2A] text-[20px] ms-6">{item.description}</p>
                  </div>
                </div>
              ))}
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