import React from 'react';
import Banner from '../components/Banner';
import SkillsList from '../components/SkillsList';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <>
            <Banner
                subtitle="Hello, I’m Bogdan"
                title={['WordPress developer']}
                description="I’m from Ukraine and I have been working as a WordPress for more
                than 3 years. I’ve worked for a Hanziree company Clixsy as a
                WordPress and Front-end Developer for 2 years."
            />
            <SkillsList />
            <Projects amountOfProjects={4} />
            <Testimonials />
        </>
    );
};

export default Home;
