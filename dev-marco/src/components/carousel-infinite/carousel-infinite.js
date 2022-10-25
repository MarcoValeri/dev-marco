// Import style file
import './carousel-infinite.scss';

const CarouselInfinite = ({ carouselItems }) => {

    const getCarouseItems = (items) => {

        let output = [];

        items.forEach((item, index) => {
            output.push(
                <div key={index} className="carousel-infinite__item">
                    {item}
                </div>
                );
        });

        return output;
    }

    return (
        <section className="carousel-infinite">
            <div className="carousel-infinite__wrapper">
                {getCarouseItems(carouselItems)}
            </div>
        </section>
    )
}


export default CarouselInfinite;
