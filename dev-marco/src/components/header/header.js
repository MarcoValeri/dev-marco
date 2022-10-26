import Navigation from "../navigation/navigation";

// Import Icons
import { IconContext } from 'react-icons/lib';
import { FaNodeJs, FaReact, FaPhp, FaSymfony, FaSass, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiMysql, SiJavascript } from 'react-icons/si';

// Import style file
import './header.scss';

const Header = ({ subTitle }) => {
    return (
        <header className="header">
            <Navigation />
            <div className="header__container-content">
                <div className="header__content-wrapper">
                    <h1 className="header__title h1">Marco Valeri</h1>
                    <h2 className="header__title-sub h2">{ subTitle }</h2>
                    <div className="header__container-icons">
                        <IconContext.Provider value={{ className: 'icon icon__node header__icon-node' }}>
                            <FaNodeJs />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: 'icon icon__react header__icon-react' }}>
                            <FaReact />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: 'icon icon__javascript header__icon-javascript' }}>
                            <SiJavascript />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: 'icon icon__php header__icon-php' }}>
                            <FaPhp />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: 'icon icon__symfony header__icon-symfony' }}>
                            <FaSymfony />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: 'icon icon__mysql header__icon-mysql' }}>
                            <SiMysql />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: 'icon icon__sass header__icon-sass' }}>
                            <FaSass />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: 'icon icon__css header__icon-css' }}>
                            <FaCss3Alt />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: 'icon icon__html header__icon-html' }}>
                            <FaHtml5 />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
