import { Link, useLocation } from 'react-router-dom';

import './navigation.scss';

const Navigation = () => {

    // Set a variable that determines the current url path
    const location = useLocation();

    /**
     * Create a function that gets
     * @param string getLocation
     * and
     * @return string link-highlight class
     * that mark a single link
     */
    const highlightTheLink = getLocation => location.pathname === getLocation ? 'link-highlight' : '';

    return (
        <nav className="nav">
            <div className="nav__toggle">
                <label htmlFor="nav menu" aria-label="nav menu"></label>
                <input id="nav menu" name="nav menu" className="nav__input" type="checkbox" aria-label="nav menu" />
                <span className="nav__span nav__span--empty"></span>
                <span className="nav__span"></span>
                <span className="nav__span"></span>
                <ul className="nav__menu">
                    <li className="nav__menu-item"><Link to='/' className={`link-no-style body-3 link-effect-load ${highlightTheLink('/')}`} rel="noopener noreferrer">Home</Link></li>
                    <li className="nav__menu-item"><Link to='/portfolio' className={`link-no-style body-3 link-effect-load ${highlightTheLink('/portfolio')}`} rel="noopener noreferrer">Portfolio</Link></li>
                    <li className="nav__menu-item"><Link to='/' className={`link-no-style body-3 link-effect-load ${highlightTheLink('/about-me')}`} rel="noopener noreferrer">About Me</Link></li>
                    <li className="nav__menu-item"><Link to='/' className={`link-no-style body-3 link-effect-load ${highlightTheLink('/contact')}`} rel="noopener noreferrer">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;
