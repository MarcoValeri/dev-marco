import CarouselInfinite from '../../components/carousel-infinite-skills/carousel-infinite-skills';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import ProjectCard from '../../components/project-card/project-card';
import TitleElastic from '../../components/title-elastic/title-elastic';

// Import images
import londonEyeImage from '../../images/london-eye.webp';
import movingCompanyImage from '../../images/moving-company.webp';
import quickbookImage from '../../images/quickbook.webp';
import spaceImage from '../../images/space.webp';
import typewriterImage from '../../images/typewriter.webp';

// Import API
import project from '../../api/projects.json';

import './portfolio.scss';

const Portfolio = () => {

    const projects = project.projects;

    /**
     * Create a function that gets
     * @param string getImage
     * and
     * @return the right image component if
     * that exist.
     *
     * The function works with api/project.json
     */
    const getImageProject = (getImage) => {
        // TODO: improve this logic
        if (getImage === "londonEyeImage") {
            return londonEyeImage;
        } else if (getImage === "movingCompanyImage") {
            return movingCompanyImage;
        } else if (getImage === "quickbookImage") {
            return quickbookImage;
        } else if (getImage === "spaceImage") {
            return spaceImage;
        } else if (getImage === "typewriterImage") {
            return typewriterImage;
        }
    }

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
                        key={index}
                        projectImage={getImageProject(project.projectImage)}
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
            <Footer />
        </>
    )

}

export default Portfolio;
