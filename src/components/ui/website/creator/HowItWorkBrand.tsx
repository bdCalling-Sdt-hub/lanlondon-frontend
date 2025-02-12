"use client";
import { MapPin, FileText, Package, Utensils } from "lucide-react";

import React from 'react';
import creator1 from "@/assets/creator1.png";
import creator2 from "@/assets/creator2.png";
import creator3 from "@/assets/creator3.png";
import creator4 from "@/assets/creator4.png";
import Image from "next/image";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: "400" });


const steps = [
    {
        number: "01",
        title: "Download & Complete Influencer Account Creation.",
        description: "Easily create and manage campaigns with our intuitive dashboard designed for brands. Define your objectives, set budgets, and outline content requirements in just a few clicks. Streamline your workflow by selecting the right influencers, tracking progress, and ensuring your campaign aligns perfectly with your goals",
        icon: MapPin,
        image: creator1
    },
    {
        number: "02",
        title: "Browse campaign  to explore opportunities that matches your style",
        description: "Choose the perfect influencers to promote your campaign with our smart selection tools. Filter by platform, audience demographics, engagement rate, and more to find creators who align with your brand. Build meaningful partnerships that drive authentic connections and deliver impactful results.",
        icon: FileText,
        image: creator2
    },
    {
        number: "03",
        title: "Participate to get collaboration with brands ",
        description: "Track the success of your campaign effortlessly with a personalized dashboard designed for actionable insights. Monitor key metrics like reach, engagement, conversions, and ROI in real-time, all in one place. Stay informed, optimize performance, and make data-driven decisions to maximize your campaign's impact.",
        icon: Package,
        image: creator3
    },
    {
        number: "04",
        title: "Start getting by Brands",
        description: "Watch your business thrive with real-time insights and measurable results. Track growth, engagement, and success as your campaigns connect with the right audience and drive meaningful impact for your brand.",
        icon: Utensils,
        image: creator4
    }
];

const HowItWorkBrand = () => {
    return (
        <div className={`${urbanist.className}  py-[100px]`} style={{
            backgroundImage: `url('/banner.svg')`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            width: "100%", 
            height: "100%",   
            objectFit: 'cover', 
            backgroundColor: "#ffe6f7"
        }}>

            <div className="">
                <div className="container">
                    <div className="mx-auto">
                        <div className="text-center mb-6">
                            <p className="font-bold lg:text-[40px] text-[30px] text-[#212121]"> How It Works for Brands </p>
                        </div>

                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#7A00F1] opacity-20 hidden lg:block" />

                            <div className="space-y-[33px]">
                                {steps.map((step, index) => (
                                    <div key={step.number} className="relative">
                                        <div className={`flex flex-col-reverse items-center  lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:items-center gap-8`}>
                                            <div className={`lg:w-2/3 w-full flex ${index % 2 === 0 ? 'lg:items-start lg:justify-end lg:me-20' : 'lg:items-end lg:justify-start lg:ms-20'} justify-center`}>
                                                <div className="lg:w-40 w-40 lg:h-40 h-40 bg-[#F2E6FE] rounded-full flex items-center justify-center">
                                                    <Image src={step?.image} alt={step?.title} height={80} width={80} />
                                                </div>
                                            </div>

                                            <div className={`lg:w-2/3 w-full flex flex-col ${index % 2 === 0 ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'} items-center text-center`}>
                                                <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col`}>
                                                    <div className="w-[60px] h-[60px] text-[20px] rounded-full bg-[#7A00F1] flex items-center justify-center border-[6px] border-[#caa6e2] text-white font-semibold">
                                                        {step.number}
                                                    </div>
                                                    <h3 className="lg:text-[24px] text-[22px] font-semibold lg:w-[400px]">{step.title}</h3>
                                                </div>
                                                <p className={`text-[#767676] text-[16px] w-[90%] lg:w-[500px] lg:ps-20 ${index % 2 === 0 ? 'lg:ps-20 lg:pe-0' : 'lg:pe-10 lg:ps-0'}`}>
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Circle connector */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#7A00F1] rounded-full hidden lg:block" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorkBrand;