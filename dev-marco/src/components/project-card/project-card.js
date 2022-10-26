import ButtonAnimated from '../button-animated/button-animated';

import './project-card.scss';

const ProjectCard = ({ projectImage, projectTitle, projectDescription, projectUrl, projectButton }) => {
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
                    <ButtonAnimated url={projectUrl} content={projectButton} />
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
