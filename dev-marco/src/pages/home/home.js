import CarouselInfinite from '../../components/carousel-infinite/carousel-infinite';
import Header from '../../components/header/header';

// Import Icons
import { IconContext } from 'react-icons/lib';
import { FaNodeJs, FaReact, FaPhp, FaSymfony, FaSass, FaCss3Alt, FaHtml5, FaWordpressSimple } from 'react-icons/fa';
import { SiMysql, SiJavascript } from 'react-icons/si';

import './home.scss';

/**
 * Create an array where to store the icons
 */
 const skillsIcons = [
    <IconContext.Provider value={{ className: 'icon icon__javascript' }}>
        <SiJavascript />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__node' }}>
        <FaNodeJs />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__react' }}>
        <FaReact />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__php' }}>
        <FaPhp />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__symfony' }}>
        <FaSymfony />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__mysql' }}>
        <SiMysql />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__sass' }}>
        <FaSass />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__css' }}>
        <FaCss3Alt />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__html' }}>
        <FaHtml5 />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__wordpress' }}>
        <FaWordpressSimple />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__javascript' }}>
        <SiJavascript />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__node' }}>
        <FaNodeJs />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__react' }}>
        <FaReact />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__php' }}>
        <FaPhp />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__symfony' }}>
        <FaSymfony />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__mysql' }}>
        <SiMysql />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__sass' }}>
        <FaSass />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__css' }}>
        <FaCss3Alt />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__html' }}>
        <FaHtml5 />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__wordpress' }}>
        <FaWordpressSimple />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__javascript' }}>
        <SiJavascript />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__node' }}>
        <FaNodeJs />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__react' }}>
        <FaReact />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__php' }}>
        <FaPhp />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__symfony' }}>
        <FaSymfony />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__mysql' }}>
        <SiMysql />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__sass' }}>
        <FaSass />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__css' }}>
        <FaCss3Alt />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__html' }}>
        <FaHtml5 />
    </IconContext.Provider>,
    <IconContext.Provider value={{ className: 'icon icon__wordpress' }}>
        <FaWordpressSimple />
    </IconContext.Provider>
];

const Home = () => {

    return (
        <>
            <Header />
            <CarouselInfinite carouselItems={skillsIcons} />
        </>
    )

}

export default Home;
