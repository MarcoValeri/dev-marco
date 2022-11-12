// Import Icons
import { IconContext } from 'react-icons/lib';
import { FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

// Import style file
import './footer.scss';

const Footer = () => {

    const getYear = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="footer__container-social">
                <div className="footer__container-linkedin">
                    <a href="https://www.linkedin.com/in/valeri-marco/" target="_blank" rel="noreferrer noopener">
                        <IconContext.Provider value={{ className: 'footer__social-icon icon icon__linkedin' }}>
                            <FaLinkedin />
                        </IconContext.Provider>
                    </a>
                </div>
                <div className="footer__container-github">
                    <a href="https://github.com/MarcoValeri" target="_blank" rel="noreferrer noopener">
                        <IconContext.Provider value={{ className: 'footer__social-icon icon icon__github--white' }}>
                            <FaGithub />
                        </IconContext.Provider>
                    </a>
                </div>
                <div className="footer__container-twitter">
                    <a href="https://twitter.com/MarkoValeri" target="_blank" rel="noreferrer noopener">
                        <IconContext.Provider value={{ className: 'footer__social-icon icon icon__twitter' }}>
                            <FaTwitterSquare />
                        </IconContext.Provider>
                    </a>
                </div>
            </div>
            <div className="footer__container-credits">
                <p className="footer__credits body-4">Made with <span className="footer__heart">&hearts;</span> in London by Marco Valeri - &copy; {getYear} - All rights reserved</p>
            </div>
        </div>
    )

}

export default Footer;