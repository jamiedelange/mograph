import React, { useState } from "react";
import "../../App.css";

function Footer(props) {
    const textColor = props.textColor;

    return(
        <section className="footer-box">
            <nav>
                <div className="footer">
                    <p style={{ 'color': textColor }} >built by<a className="footer-a" href="https://jamiedelange.github.io/portfolio-react/"> jamie de lange</a></p>
                </div>
            </nav>
        </section>
    );
}

export default Footer;