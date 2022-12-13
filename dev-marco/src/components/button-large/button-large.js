import { Link } from 'react-router-dom';

import './button-large.scss';

const ButtonLarge = ({url, content}) => {
    return (
        <div className="button-large">
            <Link to={url} className="button-large__link" rel="noopener noreferrer">
                <div className="button-large__content">
                    { content }
                </div>
            </Link>
        </div>
    )
}

export default ButtonLarge;
