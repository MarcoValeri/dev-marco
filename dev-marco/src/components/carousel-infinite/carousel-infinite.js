// Import style file
import './carousel-infinite.scss';

const CarouselInfinite = ({ carouselItems }) => {

    const getCarouseItems = (items) => {

        let output = [];

        items.forEach(item => {
            output.push(
                <div className="carousel-infinite__item">
                    <p>{item}</p>
                </div>
                );
        });

        return output;
    }

    return (
        <section className="carousel-infinite">
            {getCarouseItems(carouselItems)}
        </section>
    )
}


export default CarouselInfinite;
