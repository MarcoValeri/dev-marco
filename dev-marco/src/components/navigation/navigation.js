// Import style file
import './navigation.scss';

const Navigation = () => {
    return (
        <nav className="nav">
            <div className="nav__toggle">
                <label for="nav menu" aria-label="nav menu"></label>
                <input id="nav menu" name="nav menu" class="nav__input" type="checkbox" aria-label="nav menu" />
                <span class="nav__span nav__span--empty"></span>
                <span class="nav__span"></span>
                <span class="nav__span"></span>
                <ul className="nav__menu">
                    <li className="nav__menu-item"><a className="link-no-style body-3 link-effect-load link-highlight" href="#">Home</a></li>
                    <li className="nav__menu-item"><a className="link-no-style body-3 link-effect-load" href="#">Portfolio</a></li>
                    <li className="nav__menu-item"><a className="link-no-style body-3 link-effect-load" href="#">About Me</a></li>
                    <li className="nav__menu-item"><a className="link-no-style body-3 link-effect-load" href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;
