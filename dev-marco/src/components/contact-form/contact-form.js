import { useState } from 'react';

const ContactForm = () => {

    return (
        <section className="contact-form">
            <form className="contact-form__grid">
                <div className="contact-form__container-name">
                    <input name="name" placeholder="Name *" />
                </div>
                <div className="contact-form__container-email">
                    <input name="email" placeholder="Email *" />
                </div>
                <div className="contact-form__container-message">
                    <textarea placeholder="Leave a message *"></textarea>
                </div>
                <div className="contact-form__container-btn">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </section>
        
    )

}

export default ContactForm;