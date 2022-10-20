// Import style file
import './navigation.scss';

const Navigation = () => {
    return (
        <nav className="nav">
            <ul className="nav__menu">
                <li className="nav__menu-item"><a className="link-no-style body-3 link-effect-load link-highlight" href="#">Home</a></li>
                <li className="nav__menu-item"><a className="link-no-style body-3 link-effect-load" href="#">Portfolio</a></li>
                <li className="nav__menu-item"><a className="link-no-style body-3 link-effect-load" href="#">About Me</a></li>
                <li className="nav__menu-item"><a className="link-no-style body-3 link-effect-load" href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;
