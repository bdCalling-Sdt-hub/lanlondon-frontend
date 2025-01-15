import React from 'react';
import Banner from './banner/Banner';
import JoinAs from './Joinas/JoinAs';
import Testimonials from './testimonials/Testimonials';
import FAQ from './FAQ';
import EnhanceExperience from './EnhanceExperience';

const HomeClient = () => {
    return (
        <div>
            <Banner /> 
            <JoinAs /> 
            <Testimonials /> 
            <FAQ /> 
            <EnhanceExperience />
        </div>
    );
};

export default HomeClient;