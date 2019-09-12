import React from "react";
import "./NavLink.css"

// const styles = {
//     heading: {
//       textAlign: "center"
//     },
//   };

const NavLink = function (props) {

    //Scroll onClick

    // function jump(e) {
    //     e.preventDefault();

    //     let elementPOS = document.getElementById(props.link).offsetTop;

    //     window.scrollTo({
    //         top: elementPOS,
    //         left: 0,
    //         behavior: 'smooth'
    //     });
    // }

    function updateContent(e) {
        e.preventDefault();

        let contentArea = document.getElementsByClassName("content-section");
        for (var i = 0; i < contentArea.length; i++) {

            contentArea[i].classList.remove("active-area");
        };

        let element = document.getElementById(props.link);
        element.classList.add("active-area");
    }

    return (
        <>
            <div className="nav-link" onClick={updateContent}>
                {props.text}
            </div>    
        </>
    )
}

export default NavLink;