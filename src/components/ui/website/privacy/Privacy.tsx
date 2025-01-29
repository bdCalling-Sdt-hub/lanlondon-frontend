"use client"
import React from 'react';
import { Urbanist } from 'next/font/google';  
import { useGetPrivacyQuery } from '@/redux/features/website/footer';

const urbanist = Urbanist({ weight: ['400', '500', '600', '700'], subsets: ['latin'] }); 
const Privacy = () => { 
    const {data:privacy} = useGetPrivacyQuery(undefined) 
    console.log(privacy);
    return (
        <div  style={{
            backgroundImage: `url('/banner.svg')`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            width: "100%", 
            height: "100%",   
            objectFit: 'cover', 
            backgroundColor: "#ffe6f7"
        }}> 

        <div className={`${urbanist.className}  min-h-screen  container`}> 
  <h1 className=' text-gray-600 text-[26px]  pt-10 pb-5 font-semibold'> Privacy Policy</h1>   

  <div dangerouslySetInnerHTML={{ __html: privacy?.content}} /> 

 
        </div>
            
        </div>
    );
};

export default Privacy;