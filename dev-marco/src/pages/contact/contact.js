import ContactForm from '../../components/contact-form/contact-form';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import './contact.scss';

const Contact = () => {
    return (
        <>
            <Header />
            <div className="contant">
                <ContactForm />
            </div>
            <Footer />
        </>
    )
}

export default Contact;