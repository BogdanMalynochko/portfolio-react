import React from 'react';
import SliderComponent from './SliderComponent';
import TitleLine from './TitleLine';
import { TestimonialsData } from '../data/TestimonialsData';

const Testimonials = () => {
    return (
        <div className="pt-36 pb-28" data-aos="fade-down">
            <div className="container">
                <div className="flex flex-col items-center gap-3">
                    <TitleLine title="Testimonials" />
                    <h2>My happy clients</h2>
                </div>
                <SliderComponent slides={1} data={TestimonialsData} />
            </div>
        </div>
    );
};

export default Testimonials;
