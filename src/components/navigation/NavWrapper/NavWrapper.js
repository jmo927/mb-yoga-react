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
                <div id="nav-logo-wrap"> 
                    <NavLogo />
                </div>
                
                <div id="nav-link-wrap">
                    <NavLink link="about" text="About" classList="nav-link"/>
                    <NavLink link="classes" text="Classes" classList="navi-link" />
                    <NavLink link="child-yoga" text="Child Yoga" classList="nav-link"/>
                    <NavLink link="wellness" text="Wellness" classList="nav-link"/>
                    <NavLink link="contact" text="Contact" classList="nav-link"/>
                </div>
                
            </div>
        )
    }
}

export default NavWrapper;