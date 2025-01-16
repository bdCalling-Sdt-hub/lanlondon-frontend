import React from 'react';
import BrandBanner from './brandBanner/BrandBanner';
import RecentCampaign from './RecentCampaign';
import HowWeWork from './HowWeWork';

const BrandClient = () => {
    return (
        <div>
            <BrandBanner /> 
            <RecentCampaign /> 
            <HowWeWork />
        </div>
    );
};

export default BrandClient;