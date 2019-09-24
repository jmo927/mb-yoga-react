import React from "react";
import "./wellness.css"
import kindness from "../../../assets/kindness.png"

// const styles = {
//     heading: {
//       textAlign: "center"
//     },
//   };

const Wellness = function (props) {

    return (
        <div id="wellness" className="content-section">


            <h1>Student and Educator Wellness</h1>
            <p>
            In an educational climate of increased pressure, stress, and workload of teachers and students alike, it can feel like it’s hard to breathe sometimes.
            </p>
            <p>
            That is why I fought to create a new position -- Health and Wellness Coordinator -- at my school, Josephinum Academy of the Sacred Heart in Chicago, where I’ve been an English teacher for the past five years. In this new position, I am excited to focus on promoting social-emotional learning (SEL) in all aspects of our school community. My goal is for all adults and students to find balance while building a stronger awareness of and connection to themselves and each other. 
            </p>
            <img src={kindness} className="kindness" />
            
        </div>
    )
}

export default Wellness;