import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { Input } from 'antd';

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

const influencers = Array(8).fill({
    name: 'Jason Price',
    username: 'squ_chen12',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    instagramFollowers: '2.2k',
    facebookFollowers: '2.2k',
});
const Favorites = () => {
    return (
        <div>
            <div className="">
                <div className=" mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-xl font-semibold text-black">Favorite Influencer</h1>
                        <div className="">
                            <Input 
                                type="text"
                                placeholder="Search"
                                className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200" 
                                style={{ width: '350px' , height: '45px' }}  

                                
                            />
                 
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {influencers.map((influencer, index) => (
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