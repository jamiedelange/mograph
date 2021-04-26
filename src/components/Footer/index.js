import React from "react";
import "../../App.css";

function Footer(props) {
    const textColor = props.textColor;

    return(
        <div className="footer-div">
            <nav>
                <div className="footer">
                    <span className="footer-span" style={{ 'color': textColor }} >built by<a className="footer-a" href="https://portfolio-react-pi.vercel.app/" target="_blank"> jamie de lange</a></span>
                </div>
            </nav>
        </div>
    );
}

export default Footer;