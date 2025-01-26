/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Urbanist } from 'next/font/google'; 

const urbanist = Urbanist({ subsets: ['latin'], weight: '400' });
const RecentCampaign = () => {
    return ( 
        <div className='bg-[#ECFFD3]' style={{
            backgroundImage: `url('/joinbg.svg')`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            width: "100%", 
            height: "100%",   
            objectFit: 'cover', 
            backgroundColor: "#ffe6f7"
        }} >
        <div className={ `${urbanist.className} container  py-[80px]`}>
            <p className={ `text-[36px] font-[800] pb-6 ${urbanist.className}`}> Some of our recent Campaign</p> 

            <div className='flex items-center justify-between  h-[400px] w-full rounded-xl relative'  style={{
            backgroundImage: `url('/faqbg.svg')`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            width: "100%", 
            height: "100%",   
            objectFit: 'cover', 
            backgroundColor: "#faeef6"
        }} >
 <div className=' w-[60%] text-center px-[80px] py-[100px] text-black'>
 <p className=' text-[36px] font-[500]'> Specialized Dashboard to track & monitor your campaign smoothly. </p>  

 <p className='font-[500px] text-[21px] pt-2'> Supersede collects waste plastics, cleans sorts and washes it, diverting waste from manufacturing plants and homes from entering our from landfills </p>

 </div> 
  
  <div className='w-[40%] absolute -right-1'> 
 <img src="/dashboard.svg" alt=""  className='h-[445px] w-full rounded-e-xl'/>
  </div>
            </div>
        </div>
        </div>
    );
};

export default RecentCampaign;