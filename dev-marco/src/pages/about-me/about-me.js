import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import './about-me.scss';

const AboutMe = () => {
    return (
        <>
            <Header subTitle="About Me" />
            <div className="about-me">
                <div className="about-me__container-content">
                    <h2 className="about-me__title h2">About me...</h2>
                    <h4 className="h4">23 January 1984</h4>
                    <p className="body-3">I was born in Rome, Italy, on a cold morning of Monday 23rd January 1984.</p>
                    <p className="about-me__content-last-line body-3">Unlike many other people, I love Monday morning, when a new week starts. It is because I was born on Monday morning and also because I alway worked hard to follow my dream job.</p>
                    <h4 className="h4">1 March 2015</h4>
                    <p className="body-3">Because of my passion for SEO and programming languages, in 2015 I decided to move to the best place in the world for working in these fields: London.</p>
                    <p className="about-me__content-last-line body-3">Moving from Rome to London has completely changed my life because the Capital of England is a place where I met people from all over the world and where I found thousands of opportunities.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutMe;