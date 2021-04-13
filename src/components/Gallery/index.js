import React, { useState } from "react";
import "../../App.css";
import img1 from "../../assets/1.jpg";
import icon_black from "../../assets/logos/icon_black.png"
import icon_white from "../../assets/logos/icon_white.png"
import logo_black from "../../assets/logos/logo_black.png"
import logo_white from "../../assets/logos/logo_white.png"

function Gallery(props) {
  const backgroundColor = props.backgroundColor;
  const setBackgroundColor = props.setBackgroundColor;
  const textColor = props.textColor;
  const setTextColor = props.setTextColor;
  const [logoSource, setLogoSource] = useState(logo_black);
  const handleChangeColor = (e) => {
    setTextColor(textColor === "black" ? "white" : "black");
    setBackgroundColor(backgroundColor === "white" ? "black" : "white");
    setLogoSource(logoSource === logo_black ? logo_white : logo_black);
  };

  return (
    <section>
      <div className="box">
        <header className="header">
          <div className="title-div">
            <img src={`${logoSource}`} className="title"></img>
          </div>
        <>
        <div className="dark-mode-switch">
          <label for="switch" onClick={handleChangeColor} className="switch">
            <input type="checkbox" id="switch"/>
            <span className="slider round" />
          </label>

          <small style={{ color: textColor }} className="switch-container_text">
            Dark mode
          </small>
        </div>
        </>
        </header>

        <div className="img-box">
          <div className="img-div">
            <a target="_blank" href={`${img1}`}>
              <img src={`${img1}`} alt="alt message"></img>
            </a>
          </div>
          <div className="info-div">
            <h2 style={{ color: textColor }} className="img-title">
              siegmattel
            </h2>
            <h3 style={{ color: textColor }} className="img-name">
              "Shloopy"
            </h3>
            <div className="bid-button-div">
              <a className="bid-button" href="">
                BID
              </a>
            </div>
          </div>
        </div>

        <div className="img-box">
          <div className="img-div">
            <a target="_blank" href={`${img1}`}>
              <img src={`${img1}`} alt="alt message"></img>
            </a>
          </div>
          <div className="info-div">
            <h2 style={{ color: textColor }} className="img-title">
              siegmattel
            </h2>
            <h3 style={{ color: textColor }} className="img-name">
              "Shloopy"
            </h3>
            <div className="bid-button-div">
              <a className="bid-button" href="">
                BID
              </a>
            </div>
          </div>
        </div>

        <div className="img-box">
          <div className="img-div">
            <a target="_blank" href={`${img1}`}>
              <img src={`${img1}`} alt="alt message"></img>
            </a>
          </div>
          <div className="info-div">
            <h2 style={{ color: textColor }} className="img-title">
              siegmattel
            </h2>
            <h3 style={{ color: textColor }} className="img-name">
              "Shloopy"
            </h3>
            <div className="bid-button-div">
              <a className="bid-button" href="">
                BID
              </a>
            </div>
          </div>
        </div>

        <div className="img-box">
          <div className="img-div">
            <a target="_blank" href={`${img1}`}>
              <img src={`${img1}`} alt="alt message"></img>
            </a>
          </div>
          <div className="info-div">
            <h2 style={{ color: textColor }} className="img-title">
              siegmattel
            </h2>
            <h3 style={{ color: textColor }} className="img-name">
              "Shloopy"
            </h3>
            <div className="bid-button-div">
              <a className="bid-button" href="">
                BID
              </a>
            </div>
          </div>
        </div>

        <div className="img-box">
          <div className="img-div">
            <a target="_blank" href={`${img1}`}>
              <img src={`${img1}`} alt="alt message"></img>
            </a>
          </div>
          <div className="info-div">
            <h2 style={{ color: textColor }} className="img-title">
              siegmattel
            </h2>
            <h3 style={{ color: textColor }} className="img-name">
              "Shloopy"
            </h3>
            <div className="bid-button-div">
              <a className="bid-button" href="">
                BID
              </a>
            </div>
          </div>
        </div>

        <div className="img-box">
          <div className="img-div">
            <a target="_blank" href={`${img1}`}>
              <img src={`${img1}`} alt="alt message"></img>
            </a>
          </div>
          <div className="info-div">
            <h2 style={{ color: textColor }} className="img-title">
              siegmattel
            </h2>
            <h3 style={{ color: textColor }} className="img-name">
              "Shloopy"
            </h3>
            <div className="bid-button-div">
              <a className="bid-button" href="">
                BID
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;