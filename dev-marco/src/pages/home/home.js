import CarouselInfinite from '../../components/carousel-infinite-skills/carousel-infinite-skills';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

import './home.scss';

const Home = () => {

    return (
        <>
            <Header subTitle="Full Stack Developer" />
            <CarouselInfinite />
            <Footer />
        </>
    )

}

export default Home;
