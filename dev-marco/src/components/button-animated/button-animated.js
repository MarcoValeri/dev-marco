import './button-animated.scss';

const ButtonAnimated = ({ url, content }) => {

    return (
        <div className="button-animated">
            <a className="button-animated__link" href={ url } rel="noreferrer noopener" target="_blank">
                <div className="button-animated__content">
                    { content }
                </div>
            </a>
        </div>
    )

}

export default ButtonAnimated;
