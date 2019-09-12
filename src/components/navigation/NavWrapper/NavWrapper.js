import React, { Component } from 'react';

import NavLink from '../NavLink/NavLink';
import NavLogo from '../NavLogo/NavLogo';
import "./NavWrapper.css";


class NavWrapper extends Component {

    state = {
        status: ""
    }    

    

    render() {
        return (
            <div id="nav-wrap">
                <NavLink link="about" text="About"/>
                <NavLink link="child-yoga" text="Child Yoga"/>
                <NavLogo />
                <NavLink link="schedule" text="Schedule"/>
                <NavLink link="contact" text="Contact"/>
            </div>
        )
    }
}

export default NavWrapper;