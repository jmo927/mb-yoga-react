import React from "react";
import "./about.css"
import headshot from "../../../assets/headshot.JPG";

// const styles = {
//     heading: {
//       textAlign: "center"
//     },
//   };

const About = function (props) {

    return (
        <div id="about" className="content-section">


            <h1>My Yoga Journey</h1>

            <img src={headshot} id="headshot" alt="Marybeth's Headshot" />
            <p>
            My yoga journey began in an effort to find physical wellness as well as balance and self-care in my role as a high school English teacher. Growing up as a dancer, I found that developing a yoga self-practice felt like home; after noticing the personal physical, psychological, and emotional benefits, I knew my role as an educator was shifting to focus on bringing mindfulness and yoga to others. I completed her 95-hour children’s yoga teacher training with Mission Propelle and fell in love with the combination of self care and empowerment that yoga offers for children. So, I continued learning and pursued my 200 hour RYT at Tula Yoga Studio in 2019 to share this transformative personal practice with others. Now, I bring yoga to educational settings and studios to cultivate empowerment and mindfulness in yogis of all ages. 
            </p>
            

        </div>
    )
}

export default About;