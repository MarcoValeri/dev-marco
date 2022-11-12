import React, { useState } from 'react';

import ButtonAnimated from '../button-animated/button-animated';
import ProjectCard from '../project-card/project-card';
import TitleElastic from '../title-elastic/title-elastic';

import './portfolio-preview.scss';

const PortfolioPreview = () => {

    const [projectsPreview, setProjectsPreview] = useState('');

    // Get projectsPreview by APIs
    React.useEffect(() => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(data => setProjectsPreview(data.project.projects));
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
                if (index < 4) {
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
                }
            })
        }

        return output;
    };

    return (
        <div className="portfolio-preview">
            <TitleElastic title="Latest Projects" />
            <div className="portfolio-preview__container-projects">
                {getProjectsItems(projectsPreview)}
            </div>
            <div className="portfolio-preview__container-button">
                <ButtonAnimated internalLink={true} url="/portfolio" content="Discover All Projects" />
            </div>
        </div>
    )

}

export default PortfolioPreview;