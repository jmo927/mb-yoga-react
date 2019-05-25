import React, { Component } from 'react';

import NavLink from '../NavLink/NavLink';
import "./style.css";



const testFunction = function (array) {
    // you know, function stuff
}

class NavWrapper extends Component {

    state = {
        status: ""
    }

    testFunctionTwo = (e) => {

        // you know, function stuff

    } //end function()

    

    render() {
        return (
            <>
                <NavLink href="#about" text="About"/>
                <NavLink href="#child-yoga" text="Child Yoga"/>
                <NavLink href="#schedule" text="Schedule"/>
                <NavLink href="#contact" text="Contact"/>
            </>
        )
    }
}

export default NavWrapper;