import React from 'react';
import Hero from '../components/Hero';
import UpcomingProjectsSection from '../components/UpcomingProjectsSection';
import { ProjectGrid } from '../components/ProjectCard';
import projects from '../data/projects.json';
import upcomingProjects from '../data/upcomingProjects.json';
import { Project } from '../types';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <ProjectGrid projects={projects as Project[]} />
            <UpcomingProjectsSection projects={upcomingProjects as Project[]} />
        </div>
    );
};

export default HomePage;