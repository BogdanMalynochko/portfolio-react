import React from 'react';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard';

const SliderComponent = ({ data, slides }) => {
    var settings = {
        infinite: true,
        speed: 300,
        slidesToShow: slides,
    };

    return (
        <>
            {data.length > 0 ? (
                <div className="overflow-hidden py-32">
                    <Slider {...settings}>
                        {data.length > 0 &&
                            data.map(item => (
                                <TestimonialCard
                                    key={item.id}
                                    testimonial={item}
                                />
                            ))}
                    </Slider>
                </div>
            ) : (
                <h3 className="white text-center pt-10">
                    Here are no any testimonials..
                </h3>
            )}
        </>
    );
};

export default SliderComponent;
