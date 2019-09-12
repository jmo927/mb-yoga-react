import React from "react";
import "./contact.css"
import emailLogo from "../../../assets/email.png"
import instaLogo from "../../../assets/insta.png"
import linkedInLogo from "../../../assets/linkedin.png"

// const styles = {
//     heading: {
//       textAlign: "center"
//     },
//   };

const Contact = function (props) {

    return (
        <div id="contact">

            <hr></hr>
            <h1>Contact</h1>
            If you’d like to chat about yoga for adults or children, mindfulness in education, social emotional learning, teacher wellness, or anything in between, reach out!

            <div id = "social-wrapper">
                <img src={emailLogo} className="social-img" />
                <img src={instaLogo} className="social-img" />
                <img src={linkedInLogo} className="social-img" />
            </div>
            
            <p id="copyright">
                Copyright Marybeth Moore, 2019.  Site designed by <a href="https://jmo927.herokuapp.com/" target="_blank">J-Mo</a>
            </p>
            
        </div>
    )
}

export default Contact;