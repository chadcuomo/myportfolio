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
        <div>
            <form onSubmit={sendEmail}>
                <input type="text" placeholder="Name" name="name" />
                <input type="email" placeholder="E-mail" name="email" />
                <input type="text" placeholder="Subject" name="subject" />
                <textarea cols="30" rows="9" placeholder="Message" name="message" />
                <input type="submit" className="main-button" value="Send Message"></input>
            </form>
        </div>

    )
}