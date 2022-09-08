import React from "react";

function Footer(){

    const today = new Date();
    const currYear = today.getFullYear();
    return <div className="footer">
        <p>Copyright @ {currYear}</p>
    </div>
}

export default Footer;