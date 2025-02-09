"use client";
import React, { useState } from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { imageUrl } from '@/redux/base/baseApi';
import { useGetFavoriteQuery } from '@/redux/features/brand-dashboardApi/favorite';
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai';

interface InfluencerCardProps {
    name: string;
    username: string;
    imageUrl: string;
    instagramFollowers: string;
    facebookFollowers: string;
}

const InfluencerCard = ({ name, username, imageUrl, instagramFollowers, facebookFollowers }: InfluencerCardProps) => {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="bg-white rounded-xl shadow-sm border border-black overflow-hidden">
            {/* Header */}
            <div className="p-3 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-2">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="text-[16px] font-medium text-gray-900">{username}</h3>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                <Instagram size={12} className="text-pink-500" />
                                <span className="text-xs text-gray-500">{instagramFollowers}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Facebook size={12} className="text-blue-600" />
                                <span className="text-xs text-gray-500">{facebookFollowers}</span>
                            </div>
                        </div>
                    </div>
                </div>
       
            </div>

            {/* Main Image */}
            <div className=" w-full relative">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-[250px] object-cover"
                />
            </div>

            {/* Action Buttons */}
            <div className="p-3 flex items-center justify-end">
                <div className="flex items-center gap-2">
                    <button 
                        onClick={() => setIsLiked(!isLiked)}
                        className={`p-1.5 rounded-full transition-colors ${
                            isLiked ? 'text-pink-500' : 'text-gray-600 hover:text-gray-800'
                        }`}
                    >
                    <AiFillHeart size={25} color='red' />
                    </button>
                    <button className="p-1.5 text-gray-600 hover:text-gray-800 rounded-full">
                        <AiOutlineMessage size={24} />
                    </button>
                </div>
   
            </div>
        </div>
    );
};

const Favorites = () => {
    const { data: favorites } = useGetFavoriteQuery(undefined);
    const allFavorites = favorites?.data;

    const influencers = allFavorites?.map((influencer: {
        _id: string,
        influencer: {
            name: string,
            profile: string,
            instagramFollowers: string,
            facebookFollowers: string
        }
    }) => ({
        id: influencer?._id,
        name: influencer?.influencer?.name,
        username: influencer?.influencer.name,
        imageUrl: influencer?.influencer?.profile?.startsWith("https")
            ? influencer?.influencer?.profile
            : `${imageUrl}${influencer?.influencer?.profile}`,
        instagramFollowers: influencer?.influencer?.instagramFollowers,
        facebookFollowers: influencer?.influencer?.facebookFollowers,
    }));

    return (
        <div className="">
            <div className="">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-semibold text-gray-900">Favorite Influencers</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {influencers?.map((influencer: {
                        id: string,
                        name: string,
                        username: string,
                        imageUrl: string,
                        instagramFollowers: string,
                        facebookFollowers: string
                    }, index: number) => (
                        <InfluencerCard
                            key={influencer.id || index}
                            {...influencer}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Favorites;