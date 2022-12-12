import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import './about-me.scss';

const AboutMe = () => {

    const getTodayDate = new Date("DD/MM/YYYY");
    console.log(getTodayDate);

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
                    <h4 className="h4">01 August 2016</h4>
                    <p className="body-3">I founded an Italian travel magazine that in a few years has reached more than 300k monthly views.</p>
                    <p className="body-3">You can find it on google by typing <em>ViaggIn</em>.</p>
                    <p className="about-me__content-last-line body-3">I reached this great result because of my passion for travel, SEO and coding.</p>
                    <h4 className="h4">01 October 2018</h4>
                    <p className="body-3">I decided to improve my knowledge by studying Computer Science at the Birkbeck University of London.</p>
                    <p className="body-3">he Birkbeck University of London has been an incredible place where I met a lot of people that have my same passion: programming languages and new technologies.</p>
                    <p className="about-me__content-last-line body-3">In those years I studied some important subjects about Computer Science like Object Oriented, Functional Programming, Database, Algorithms, Mobile First, Responsive Design as well as great programming languages like JavaScript, PHP, Python and Java.</p>
                    <h4 className="h4">01 January 2021</h4>
                    <p className="body-3">This is a special date for me because I found my first job as a <em>Junior Full Stack Developer</em> in a great web agency whose name is <a href="https://www.heavypenguin.com/" rel="noreferrer noopener">Heavy Penguin</a>.</p>
                    <p className="body-3">At Heavy Penguin I learned how to work in an agile environment as well as I learned how to work in a small but busy team.</p>
                    <p className="about-me__content-last-line body-3">In this great web agency I worked as a full stack developer for important clients like <a href="https://www.heavypenguin.com/" rel="noreferrer noopener">Institute Of The Motor Industry</a> and <a href="https://www.cam.ac.uk/" rel="noreferrer noopener">Cambridge University</a> combining my knowledge of JavaScript, PHP and Python.</p>
                    <h4 className="h4">01 August 2021</h4>
                    <p className="about-me__content-last-line body-3">It has been a great day: the first August 2021 I got my Foundation Degree in Computer Science at the <a href="https://www.bbk.ac.uk/" rel="noreferrer noopener">BirkBeck University of London</a>.</p>
                    <h4 className="h4">03 January 2022</h4>
                    <p className="body-3">After a few years as full stack	developer, I decided to be focused on just one stack: front-end development.</p>
                    <p className="body-3">On Monday 3rd January 2022 I started a new incredible path as Junior Front End Developer at <a href="https://sobold.co.uk/" rel="noreferrer noopener">SoBold</a>, a great web development company based in the centre of London.</p>
                    <p className="about-me__content-last-line body-3">In this new web agency I have been focused on Front-End development, having the time to understand this stack much better, working for great clients like <a href="https://www.collercapital.com/" rel="noreferrer noopener">Coller Capital</a>, <a href="https://arenko.group/" rel="noreferrer noopener">Arenko</a>, <a href="https://www.kapowprimary.com/" rel="noreferrer noopener">Kapow</a>, <a href="https://commonpurposeclub.co.uk/" rel="noreferrer noopener">Common purpose</a>, <a href="https://www.jamieandthejam.co.uk/" rel="noreferrer noopener">Jamie and the Jam</a>, and many more.</p>
                    <h4 className="h4">Today</h4>
                    <p className="body-3">Today I am proud about what I have done because I found my dream job: be a great Front End developer.</p>
                    <p className="body-3">This is the reason why I still love every Monday morning.</p>
                    <p className="body-3">My main goal as a Web Developer is to increase customer satisfaction delivering robust code that can reduce maintenance time and technical debt. </p>
                    <p className="body-3">At the moment I am working with Node, React and PHP but because of my knowledge I am able to switch between new and old technologies easily.</p>
                    <p className="body-3">I love the JavaScript environment because it allows creating faster web applications, this is why I am glad of using NodeJS and React together.</p>
                    <p className="about-me__content-last-line body-3">I like PHP too because a lot of businesses in the world have been written with this programming language that version by version is getting faster, more secure and better - especially from the version 8.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutMe;