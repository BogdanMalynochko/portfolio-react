import React from 'react';
import ProjectsPage from '../pages/ProjectsPage';
import Home from '../pages/Home';
import ProjectSlug from '../pages/ProjectSlug';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const RouteLinks = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectSlug />} />
        </Routes>
    );
};

export default RouteLinks;
