import React from 'react';
import { HomeSkills } from '../data/HomeSkills';
import SkillCard from './SkillCard';
import TitleLine from './TitleLine';

const SkillsList = () => {
    return (
        <div className="container pb-36" data-aos="fade-down">
            <div className="flex justify-between">
                <h2 className="max-w-xl">3+ years experience working</h2>
                <div className="flex flex-col gap-2 max-w-[360px]">
                    <TitleLine title="Services" />
                    <p>
                        Discover the best services I offer, designed to ensure
                        the success of your project.
                    </p>
                </div>
            </div>
            <div className="pt-20 grid grid-cols-3 gap-5">
                {HomeSkills.length > 0 &&
                    HomeSkills.map(skill => (
                        <SkillCard key={skill.id} skill={skill} />
                    ))}
            </div>
        </div>
    );
};

export default SkillsList;
