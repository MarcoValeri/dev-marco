import ButtonLarge from '../button-large/button-large';
import TitleElastic from '../title-elastic/title-elastic';

import './about-me-preview.scss';

const AboutMePreview = () => {
    return (
        <>
        <TitleElastic title="Who am I?" />
        <section className="about-me-preview">
            <div className="about-me__container-content">
                <h4 className="h4">About me</h4>
                <p className="body-3">Today I am proud about what I have done because I found my dream job: be a great Front End developer.</p>
                <p className="body-3">This is the reason why I still love every Monday morning.</p>
                <p className="body-3">My main goal as a Web Developer is to increase customer satisfaction delivering robust code that can reduce maintenance time and technical debt. </p>
                <p className="body-3">At the moment I am working with Node, React and PHP but because of my knowledge I am able to switch between new and old technologies easily.</p>
                <p className="body-3">I love the JavaScript environment because it allows creating faster web applications, this is why I am glad of using NodeJS and React together.</p>
                <p className="about-me__content-last-line body-3">I like PHP too because a lot of businesses in the world have been written with this programming language that version by version is getting faster, more secure and better - especially from the version 8.</p>
            </div>
            <ButtonLarge url="/about-me" content="Read more about me..." />
        </section>
        </>
    )
}

export default AboutMePreview;
