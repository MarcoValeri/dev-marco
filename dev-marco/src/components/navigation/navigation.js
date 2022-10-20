// Import style file
import './navigation.scss';

const Navigation = () => {
    return (
        <nav className="nav">
            <ul className="nav__menu">
                <li className="nav__menu-item"><a href="#">Home</a></li>
                <li className="nav__menu-item"><a href="#">Portfolio</a></li>
                <li className="nav__menu-item"><a href="#">About Me</a></li>
                <li className="nav__menu-item"><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;
