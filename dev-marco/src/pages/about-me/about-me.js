import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import './about-me.scss';

const AboutMe = () => {
    return (
        <>
            <Header subTitle="About Me" />
            <div className="about-me">
                <div className="about-me__container-content">
                    <h2 className="h2">About me...</h2>
                    <h4 className="h4">23 January 1984</h4>
                    <p className="body-3">I was born in Rome, Italy, on a cold morning of Monday 23rd January 1984.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutMe;