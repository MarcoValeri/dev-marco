import Navigation from "../navigation/navigation";

// Import Icons
import { IconContext } from 'react-icons/lib';
import { FaNodeJs, FaReact, FaPhp, FaSymfony, FaSass, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';

// Import style file
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <Navigation />
            <div className="header__container-content">
                <div className="header__content-wrapper">
                    <h1 className="header__title h1">Marco Valeri</h1>
                    <h2 className="header__title-sub h2">Full Stack Developer</h2>
                    <div className="header__container-icons">
                        <IconContext.Provider value={{ className: 'icon icon__node' }}>
                            <FaNodeJs />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: 'icon icon__react' }}>
                            <FaReact />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: 'icon icon__php' }}>
                            <FaPhp />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: 'icon icon__symfony' }}>
                            <FaSymfony />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: 'icon icon__mysql' }}>
                            <SiMysql />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: 'icon icon__sass' }}>
                            <FaSass />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: 'icon icon__css' }}>
                            <FaCss3Alt />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: 'icon icon__html' }}>
                            <FaHtml5 />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
