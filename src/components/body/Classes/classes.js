import React from "react";
import "./classes.css"
import classroom from "../../../assets/class.jpg";

// const styles = {
//     heading: {
//       textAlign: "center"
//     },
//   };

const Classes = function (props) {

    return (
        <div id="classes" className="content-section">


            <h1>Classes</h1>
            <img src={classroom} alt="Yoga Studio, ready for class" className="yoga-class-pic"/>
            <p>
            My adult classes offer a vinyasa style flow with a focus on connecting breath, mind, and body. I aim to strike a balance between effort and ease while fostering a supportive environment that encourages students to discover their own yoga path while developing self-awareness and self-acceptance. 
            </p>

            <p>
            I am currently a sub at Tula Yoga Studio. Stay tuned for upcoming classes!
            </p>
            
            <hr></hr>

            <h1>Schedule</h1>
            Updates incoming!
        </div>
    )
}

export default Classes;