import React, { useState } from 'react';

import CarouselInfinite from '../../components/carousel-infinite-skills/carousel-infinite-skills';
import Header from '../../components/header/header';
import ProjectCard from '../../components/project-card/project-card';
import TitleElastic from '../../components/title-elastic/title-elastic';

import './portfolio.scss';

const Portfolio = () => {

    const [projects, setProjects] = useState('Empty');

    // Get projects by API
    React.useEffect(() => {
        fetch('/api/projects')
            .then((res) => res.json())
            .then((data) => setProjects(data.project.projects));
    }, []);

    /**
     * Create a function that gets
     * @param object gerProjects
     * and
     * @return array with all projects
     *
     * If the parameter is not an object,
     * the function return an empty array
     */
    const getProjectsItems = (getProjects) => {

        let output = [];

        if (typeof getProjects === 'object') {
            getProjects.forEach((project, index) => {
                output.push(
                    <ProjectCard
                        projectImage={project.projectImage}
                        projectTitle={project.projectTitle}
                        projectDescription={project.projectDescription}
                        showRepository={project.showRepository}
                        projectRepository={project.projectRepository}
                        projectUrl={project.projectUrl}
                        projectButton={project.projectButton}
                    />
                )
            })
        }

        return output;
    };

    return (
        <>
            <Header subTitle="Portfolio" />
            <TitleElastic title="Portfolio" />
            <div className="portfolio">
                <div className="portfolio__container">
                    {getProjectsItems(projects)}
                </div>
            </div>
            <CarouselInfinite />
        </>
    )

}

export default Portfolio;
