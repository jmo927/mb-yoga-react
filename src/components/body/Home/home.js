import React from "react";
import "./home.css"
import thejo from "../../../assets/thejo.jpg"


const Home = function (props) {

    return (
        <div id="home" className="content-section active-area">
            <h1>Welcome to MB Yoga!</h1>
            <img src={thejo} alt="Marybeth leading yoga at Josephenium Academy"/>

            
            
        </div>
    )
}

export default Home;