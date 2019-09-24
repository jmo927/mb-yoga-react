import React from "react";
import "./NavLogo.css"
import Mandala from "../../../assets/mandala.png"

// const styles = {
//     heading: {
//       textAlign: "center"
//     },
//   };

const NavLogo = function (props) {

    return (
        <div id="nav-logo">
            <img src = {Mandala} alt = "Mandala Logo" id="mandala"/>
            <div id="logo-sig">
                {/* <div id="logo-text">MB Yoga</div> */}
                MB Yoga
            </div>
        </div>

    )
}

export default NavLogo;