import { useState } from 'react';

import './contact-form.scss';

const ContactForm = () => {

    const [status, setStatus] = useState('Submit');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus('Sending...');

        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };

        let response = await fetch('http://localhost:8000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(details),
        });

        setStatus('Submit');

        let result = await response.json();
        alert(result.status);
    };

    return (
        <section className="contact-form" onSubmit={handleSubmit}>
            <form className="contact-form__grid">
                <div className="contact-form__container-name">
                    <input className="contact-form__input-base contact-form__input-text" name="name" placeholder="Name *" />
                </div>
                <div className="contact-form__container-email">
                    <input className="contact-form__input-base contact-form__input-text" name="email" placeholder="Email *" />
                </div>
                <div className="contact-form__container-message">
                    <textarea className="contact-form__input-base contact-form__input-textarea" name="message" placeholder="Leave a message *"></textarea>
                </div>
                <div className="contact-form__container-btn">
                    <button className="contact-form__input-submit button button__circle button__arrow-next" type="submit">{ status }</button>
                </div>
            </form>
        </section>

    )

}

export default ContactForm;
