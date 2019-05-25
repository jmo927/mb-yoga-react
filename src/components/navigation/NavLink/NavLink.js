import React from "react";
import "./NavLink.css"

// const styles = {
//     heading: {
//       textAlign: "center"
//     },
//   };

const NavLink = function (props) {


    function jump(e) {
        e.preventDefault();

        // document.getElementById(props.link).scrollIntoView({behavior: "smooth", block: "start"})

        document.getElementById("content-area").scrollTop = document.getElementById(props.link).offsetTop;
    }

    return (
        <>
            <div className="nav-link" onClick={jump}>
                {props.text}
            </div>    
        </>
    )
}

export default NavLink;