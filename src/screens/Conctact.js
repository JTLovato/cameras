import React from 'react';
import emailjs from 'emailjs-com';


export default function Contact() {


function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_p5jlius', 'template_0fd395w', e.target, 'user_V4EYC7W6wwovzMtpBXatH')
    
    .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('Something Went Wrong...',error.text);
    });
}


return (
    <div className="contact-container">
        <div className="cta-container">

        </div>

        <div className="contact-form-container" id="contact-form-container">
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    </div>
  );
}
