// Import Icons
import { IconContext } from 'react-icons/lib';
import { FaNodeJs, FaReact, FaPhp, FaSymfony, FaSass, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';

// Import file stie
import './carousel-icons';

const CarouselIcons = () => {

    /**
     * Create an array where to store the icons
     */
    const skillsIcons = [
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
        </IconContext.Provider>
    ];

    return ({skillsIcons});
}

export default CarouselIcons;