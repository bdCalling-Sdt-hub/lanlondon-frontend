"use client";
import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { useGetFavoriteQuery } from '@/redux/features/brand-dashboardApi/favorite';
import { imageUrl } from '@/redux/base/baseApi';

interface InfluencerCardProps {
    name: string;
    username: string;
    imageUrl: string;
    instagramFollowers: string;
    facebookFollowers: string;
}

const InfluencerCard = ({ name, username, imageUrl, instagramFollowers, facebookFollowers }: InfluencerCardProps) => { 

    return (
        <div className="bg-white rounded-2xl p-4 shadow-lg flex flex-col items-center">
            <img
                src={imageUrl}
                alt={name}
                className="w-24 h-24 rounded-full mb-2 object-cover"
            />
            <h3 className="font-medium text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500 mb-2">Username: {username}</p>
            <div className="flex gap-2 mb-3">
                <div className="flex items-center gap-1">
                    <Instagram size={16} className="text-pink-500" />
                    <span className="text-sm text-gray-600 font-medium">{instagramFollowers}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Facebook size={16} className="text-blue-600" />
                    <span className="text-sm text-gray-600 font-medium">{facebookFollowers}</span>
                </div>
            </div>
            <button className="w-full py-1.5 bg-primary border-2 border-black/50 text-gray-700 rounded-md hover:bg-[#37851b] hover:text-white transition-colors">
                Details
            </button>
        </div>
    );
};


const Favorites = () => { 

    const {data:favorites} = useGetFavoriteQuery(undefined) 
    const allFavorites = favorites?.data 
    console.log(allFavorites) 
  
    const influencers = allFavorites?.map((influencer:{_id:string, influencer:{name:string, profile:string , instagramFollowers:string, facebookFollowers:string} }) => ({ 
        id: influencer?._id,
        name: influencer?.influencer?.name,
        username: influencer?.influencer.name,
        imageUrl: influencer?.influencer?.profile?.startsWith("https") ? influencer?.influencer?.profile : `${imageUrl}${influencer?.influencer?.profile }`,
        instagramFollowers: influencer?.influencer?.instagramFollowers,
        facebookFollowers: influencer?.influencer?.facebookFollowers,
    }));
    
    return (
        <div>
            <div className="">
                <div className=" mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-xl font-semibold text-black">Favorite Influencer</h1>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {influencers?.map((influencer:{id:string, name:string, username:string, imageUrl:string, instagramFollowers:string, facebookFollowers:string}, index:number) => (
                            <InfluencerCard
                                key={index}
                                {...influencer}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favorites;