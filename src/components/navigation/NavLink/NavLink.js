
import React from "react";
import "./style.css"

// const styles = {
//     heading: {
//       textAlign: "center"
//     },
//   };

const NavLink = function (props) {

    return (
        <div className="nav-link">
            {props.text}       
        </div>
    )
}

export default NavLink;