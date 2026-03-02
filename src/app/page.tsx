import React from 'react';
import Hero from '../components/Hero';
import { ProjectGrid } from '../components/ProjectCard';
import projects from '../data/projects.json';
import { Project } from '../types';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <ProjectGrid projects={projects as Project[]} />
        </div>
    );
};

export default HomePage;