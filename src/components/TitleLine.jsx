import React from 'react';

const TitleLine = ({ title }) => {
    return (
        <div className="flex items-center gap-4">
            <div className="line"></div>
            <h4 className="green">{title}</h4>
        </div>
    );
};

export default TitleLine;
