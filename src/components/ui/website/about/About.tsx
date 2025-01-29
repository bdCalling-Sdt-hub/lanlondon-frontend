"use client"
import React from 'react';
import { Urbanist } from 'next/font/google';  
import { useGetAboutQuery } from '@/redux/features/website/footer';

const urbanist = Urbanist({ weight: ['400', '500', '600', '700'], subsets: ['latin'] }); 
const About = () => { 
    const {data:about} = useGetAboutQuery(undefined) 
    console.log(about);
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
  <h1 className=' text-gray-600 text-[26px]  pt-10 pb-5 font-semibold'> About Us</h1>   

  <div dangerouslySetInnerHTML={{ __html: about?.content}} /> 

 
        </div>
            
        </div>
    );
};

export default About;