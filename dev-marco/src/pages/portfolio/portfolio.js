import ButtonAnimated from '../../components/button-animated/button-animated';

import './portfolio.scss';

const Portfolio = () => {

    return (
        <div className="portfolio">
            <div className="portfolio__container">
                <div className="portfolio__container-project">
                    <div className="portfolio__wrapper-project" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')` }}>
                        <div className="portfolio__container-project-title">
                            <h2 className="portfolio__project-title h2">Project Title Title</h2>
                        </div>
                        <div className="portfolio__container-project-description">
                            <p className="portfolio__project-description body-2">Project test Description Project because Description Project Description Project Description Project Description Project Description</p>
                        </div>
                        <div className="portfolio__container-project-btn">
                            <ButtonAnimated url="https://www.google.com/" content="Google" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Portfolio;
