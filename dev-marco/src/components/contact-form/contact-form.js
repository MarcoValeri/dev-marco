import './contact-form.scss';

const ContactForm = () => {

    return (
        <section className="contact-form">
            <form className="contact-form__grid">
                <div className="contact-form__container-name">
                    <input className="contact-form__input-base contact-form__input-text" name="name" placeholder="Name *" />
                </div>
                <div className="contact-form__container-email">
                    <input className="contact-form__input-base contact-form__input-text" name="email" placeholder="Email *" />
                </div>
                <div className="contact-form__container-message">
                    <textarea className="contact-form__input-base contact-form__input-textarea" placeholder="Leave a message *"></textarea>
                </div>
                <div className="contact-form__container-btn">
                    <button className="contact-form__input-submit button button__circle button__arrow-next" type="submit">Submit</button>
                </div>
            </form>
        </section>
        
    )

}

export default ContactForm;