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

        let elementPOS = document.getElementById(props.link).offsetTop;

        window.scrollTo({
            top: elementPOS,
            left: 0,
            behavior: 'smooth'
        });
        // document.getElementById(props.link).scrollIntoView({behavior: "smooth", block: "start"})

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