import React, { Component } from 'react';

import About from '../About/about';
import Children from '../Children/children';
import Schedule from '../Schedule/schedule';
import Contact from '../Contact/contact';
import "./content-area.css";



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
                    <About />
                    <Children />
                    <Schedule />
                    <Contact />
                </div>

            </>
        )
    }
}

export default ContentArea;