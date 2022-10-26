import ButtonAnimated from '../button-animated/button-animated';

// Import icons
import { IconContext } from 'react-icons/lib';
import { FaGithub } from 'react-icons/fa';

import './project-card.scss';

const ProjectCard = ({ projectImage, projectTitle, projectDescription, showRepository, projectRepository, projectUrl, projectButton }) => {

    /**
     * Create a function that gets
     * @param boolean showRepository
     * and
     * @return string element with its repository
     * if showRepository is true
     */
    const showGitRepository = showRepository => {

        if (showRepository) {
            return (
                <a href={projectRepository} target="_blank" rel="noopener noreferrer">
                    <IconContext.Provider value={{ className: 'icon icon__github--white' }}>
                        <FaGithub />
                    </IconContext.Provider>
                </a>
            )
        }

    }

    return (
        <div className="project-card">
            <div className="project-card__wrapper-project" style={{ backgroundImage: `url('${projectImage}')` }}>
                <div className="project-card__container-project-title">
                    <h2 className="project-card__project-title h2">{ projectTitle }</h2>
                </div>
                <div className="project-card__container-project-description">
                    <p className="project-card__project-description body-2">{ projectDescription }</p>
                </div>
                <div className="project-card__container-project-btn">
                    {showGitRepository(showRepository)}
                    <ButtonAnimated url={projectUrl} content={projectButton} />
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
