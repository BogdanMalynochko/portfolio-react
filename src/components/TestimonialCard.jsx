import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="!flex flex-col gap-9">
            <p className="text-center max-w-xl mx-auto !block text-[18px]">
                "{testimonial.content}"
            </p>
            <div className="flex flex-col items-center gap-1">
                <h4>{testimonial.name}</h4>
                <p className="text-[14px]">{testimonial.position}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
