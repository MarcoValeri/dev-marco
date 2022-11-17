import ContactForm from '../../components/contact-form/contact-form';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import './contact.scss';

const Contact = () => {
    return (
        <>
            <Header subTitle="Contact" />
            <div className="contact">
                <ContactForm />
            </div>
            <Footer />
        </>
    )
}

export default Contact;