import emailjs from 'emailjs-com';
import React from 'react';

export default function Form() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'email_template', e.target, 'user_N8wJ64jQiNy1qFBtGnXNY')
            .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return(
        <div className="form-container">
            <form className="form" onSubmit={sendEmail}>
                <div className="form-top-container">
                    <input type="text" placeholder="Name" name="name" className="form-name" />
                    <input type="email" placeholder="E-mail" name="email" className="form-email" />
                </div>
                <div className="form-subject-container">
                    <input type="text" placeholder="Subject" name="subject" className="form-subject" />
                </div>
                <div className="form-text-container">
                    <textarea rows="10" placeholder="Message" name="message" className="form-text" />
                </div>
                <div className="form-button-container">
                    <input type="submit" className="main-button form-button" value="Send Message" />
                </div>
            </form>
        </div>

    )
}