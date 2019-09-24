import React, { Component } from 'react';

import About from '../About/about';
import Children from '../Children/children';
import Classes from '../Classes/classes';
import Wellness from '../Wellness/wellness';
import Contact from '../Contact/contact';
import Home from '../Home/home';

import "./content-area.css";
// import thejo from "../../../assets/thejo.jpg";


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
                
                    <Home />

                    <About />
                    
                    <Classes />
                    
                    <Children />
                    
                    <Wellness />
                    
                    <Contact />

                    
                </div>
                
            </>
        )
    }
}

export default ContentArea;