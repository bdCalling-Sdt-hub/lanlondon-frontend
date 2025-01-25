import React from 'react';
import Banner from './banner/Banner';
import JoinAs from './Joinas/JoinAs';
import Testimonials from './testimonials/Testimonials';

import EnhanceExperience from './EnhanceExperience';
import FAQ from './faq/FAQ';

const HomeClient = () => {
    return (
        <div className='' >
            <Banner /> 
            <JoinAs /> 
            <Testimonials /> 
            <FAQ /> 
            <EnhanceExperience />
        </div>
    );
};

export default HomeClient;