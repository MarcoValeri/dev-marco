import { Link } from 'react-router-dom';

import './button-animated.scss';

const ButtonAnimated = ({ internalLink = false, url, content }) => {

    /**
     * Create a function that get
     * @param bool internalLink
     * and
     * @return string
     * 
     * If internalLink is false, return html tags for externa link,
     * otherwise internal link
     */
    const internalOrExternalLink = internalLink => {

        if (internalLink) {
            return (
                <Link to={url} className="button-animated__link" rel="noopener noreferrer">
                    <div className="button-animated__content">
                        { content }
                    </div>
                </Link>
            )
        } else {
            return (
                <a className="button-animated__link" href={ url } rel="noreferrer noopener" target="_blank">
                    <div className="button-animated__content">
                        { content }
                    </div>
                </a>
            )
        }

    }

    return (
        <div className="button-animated">
            {internalOrExternalLink(internalLink)}
        </div>
    )

}

export default ButtonAnimated;
