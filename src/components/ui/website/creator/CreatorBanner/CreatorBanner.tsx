import React from 'react';
import { Urbanist } from 'next/font/google'; 
import "./CreatorStyle.css"
const urbanist = Urbanist({ subsets: ['latin'], weight: '400' });
const CreatorBanner = () => {
    return (
        <div className={ `${urbanist.className} bg-[#f2e6fe]  h-[calc(100vh-80px)] flex items-center justify-start   `}>  
        <div className='container flex lg:flex-row flex-col items-center h-full lg:relative '> 
            <div className='lg:w-[80%] '> 

                <div className=' flex items-start justify-between'> 
                    <div>
    <p className='text-[#7A00F1] lg:text-[24px] text-[18px] font-semibold'> -Join Creator Brief  </p>
  <p className=' lg:text-[24px] text-[20px] font-medium text-[#2A2A2A] pt-1 lg:pb-5 pb-3'>  Start Participating in the App </p>
                    </div> 

                    <div> 
                        <img src="/star.png" alt="" className='lg:w-[50px] lg:h-[50px] w-[40px] h-[40px]' />
                    </div>
                </div>

       
       <p className='text-[#2A2A2A] text-[42px] font-bold leading-snug mb-5 '> 
       Get Brand Deals & Promotions by Your Trusted Platform.
       </p> 

       <p className='text-[#545454] text-[20px] font-medium '> 
       Join our trusted platform to amplify your brand’s reach and connect with the right audience. With proven campaigns and reliable partnerships, we ensure maximum impact for your participation. Let’s achieve success together!
       </p>
       
       <div className='lg:absolute lg:bottom-16 '> 
 <img src="/footerIcon.png" alt="" className='w-auto h-[50px]' />
       </div>
            </div> 

            <div className='w-[100%] '>
                <img src="/sideimg.svg" alt="" className='lg:h-[800px] h-[400px] w-full' /> 
            </div>
        </div>
            
        </div>
    );
};

export default CreatorBanner;