import React, { Component } from 'react';

import About from '../About/about';
import Children from '../Children/children';
import Schedule from '../Schedule/schedule';
import Contact from '../Contact/contact';
import "./content-area.css";
import motivation from "../../../assets/motivation.jpeg";



class ContentArea extends Component {

    state = {
        status: ""
    }

    // testFunctionTwo = (e) => {

    //     // you know, function stuff

    // } //end function()

    render() {
        return (
            <>
                <div id="content-area">
                    <img src={motivation} className="motivation" alt="a yoga pose."  />
                    <About />
                    <img src={motivation} className="motivation" alt="a yoga pose."  />
                    <Children />
                    <img src={motivation} className="motivation" alt="a yoga pose."  />
                    <Schedule />
                    <img src={motivation} className="motivation" alt="a yoga pose."  />
                    <Contact />
                </div>

            </>
        )
    }
}

export default ContentArea;