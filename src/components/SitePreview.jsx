import React from 'react';
import { LinkSimple } from 'phosphor-react';

const SitePreview = ({ imageSite, url }) => {
    return (
        <div
            data-aos="fade-down"
            className="max-w-5xl flex gap-10 flex-col mx-auto pb-20"
        >
            <img
                src={imageSite}
                alt=""
                className="duration-200 hover:scale-[1.01] hover:duration-200"
            />
            <a
                href={url}
                target="_blanc"
                className="btn flex-btn w-max mx-auto"
            >
                Check Site
                <LinkSimple size={20} />
            </a>
        </div>
    );
};

export default SitePreview;
