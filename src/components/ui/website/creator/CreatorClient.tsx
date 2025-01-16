import React from 'react';
import CreatorBanner from './CreatorBanner/CreatorBanner';
import HowItWorkBrand from './HowItWorkBrand';
import StartEarningSlider from './StartEarningSlider/StartEarningSlider';

const CreatorClient = () => {
    return (
        <div>
            <CreatorBanner />  
            <StartEarningSlider />
            <HowItWorkBrand />
        </div>
    );
};

export default CreatorClient;