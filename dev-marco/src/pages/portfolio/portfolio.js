import CarouselInfinite from '../../components/carousel-infinite-skills/carousel-infinite-skills';
import Header from '../../components/header/header';
import ProjectCard from '../../components/project-card/project-card';
import TitleElastic from '../../components/title-elastic/title-elastic';

import './portfolio.scss';

const Portfolio = () => {

    return (
        <>
            <Header subTitle="Portfolio" />
            <TitleElastic title="Portfolio" />
            <div className="portfolio">
                <div className="portfolio__container">
                    <ProjectCard
                        projectImage="https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        projectTitle="Project Title"
                        projectDescription="Web Application with NodeJs, React and MySQL eeeeeeeeee eeeeeeeeee eeeeeeee"
                        showRepository={true}
                        projectRepository="https://arenko-aug.sobold.dev/"
                        projectUrl="https://www.google.com"
                        projectButton="Google"
                    />
                    <ProjectCard
                        projectImage="https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        projectTitle="Project Title"
                        projectDescription="Web Application with NodeJs, React and MySQL"
                        projectUrl="https://www.google.com"
                        projectButton="Google"
                    />
                    <ProjectCard
                        projectImage="https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        projectTitle="Project Title"
                        projectDescription="Web Application with NodeJs, React and MySQL"
                        projectUrl="https://www.google.com"
                        projectButton="Google"
                    />
                    <ProjectCard
                        projectImage="https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        projectTitle="Project Title"
                        projectDescription="Web Application with NodeJs, React and MySQL"
                        projectUrl="https://www.google.com"
                        projectButton="Google"
                    />
                    <ProjectCard
                        projectImage="https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        projectTitle="Project Title"
                        projectDescription="Web Application with NodeJs, React and MySQL"
                        projectUrl="https://www.google.com"
                        projectButton="Google"
                    />
                </div>
            </div>
            <CarouselInfinite />
        </>
    )

}

export default Portfolio;
