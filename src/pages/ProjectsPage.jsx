import React from 'react';
import Banner from '../components/Banner';
import Projects from '../components/Projects';

const ProjectsPage = () => {
    return (
        <>
            <Banner title="My Projects" />
            <Projects subtitle={false} button={false} title="All Projects" />
        </>
    );
};

export default ProjectsPage;
