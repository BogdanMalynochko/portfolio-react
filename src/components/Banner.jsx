import React from 'react';
import { Envelope } from 'phosphor-react';
import TypingEffect from './features/TypingEffect';

const Banner = ({ subtitle, title, description }) => {
    return (
        <div data-aos="fade-down" className="container pt-24 pb-36">
            <div className="flex flex-col">
                <span className="text-4xl green">{subtitle}</span>
                <TypingEffect title={title} />
            </div>
            <p className="max-w-xl mt-6 mb-9">{description}</p>
            <a className="btn flex-btn" href="#">
                Email Me
                <Envelope size={20} />
            </a>
        </div>
    );
};

export default Banner;
