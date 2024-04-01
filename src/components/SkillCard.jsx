import React from 'react';
import { Atom } from 'phosphor-react';

const SkillCard = ({ skill }) => {
    return (
        <div className="bg-grey px-6 py-16 border-b-8 border-green cursor-pointer duration-200 hover:scale-[1.03] hover:duration-200">
            <Atom color="white" size={50} />
            <div className="flex flex-col gap-3 pt-10">
                <h4>{skill.name}</h4>
                <p>{skill.description}</p>
            </div>
        </div>
    );
};

export default SkillCard;
