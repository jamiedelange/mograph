import { data } from "autoprefixer";
import React, { useState, useEffect } from "react";
import "../../App.css";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
// import icon_black from "../../assets/logos/icon_black.png"
// import icon_white from "../../assets/logos/icon_white.png"
import logo_black from "../../assets/logos/logo_black.png";
import logo_white from "../../assets/logos/logo_white.png";

export const dataToMap = [
  {
    image: img2,
    imageTitle: "siegmattel",
    source: img2, // could be a  path to another subpage or external
    imageName: "Shloopy",
    target: "__blank",
    href: "../../2.jpg",
    buttonLabel: "bid",
    buttonHref: "#",
  },
  {
    image: img2,
    imageTitle: "siegmattel",
    source: img2,
    imageName: "Shloopy",
    target: "__blank",
    href: "../../2.jpg",
    buttonLabel: "bid",
    buttonHref: "#",
  },
  {
    image: img2,
    imageTitle: "siegmattel",
    source: img2,
    imageName: "Shloopy",
    target: "__blank",
    href: "../../2.jpg",
    buttonLabel: "bid",
    buttonHref: "#",
  },
  {
    image: img2,
    imageTitle: "siegmattel",
    source: img2,
    imageName: "Shloopy",
    target: "__blank",
    href: "../../2.jpg",
    buttonLabel: "bid",
    buttonHref: "#",
  },
  {
    image: img2,
    imageTitle: "siegmattel",
    source: img2,
    imageName: "Shloopy",
    target: "__blank",
    href: "../../2.jpg",
    buttonLabel: "bid",
    buttonHref: "#",
  },
  {
    image: img2,
    imageTitle: "siegmattel",
    source: img2,
    imageName: "Shloopy",
    target: "__blank",
    href: "../../2.jpg",
    buttonLabel: "bid",
    buttonHref: "#",
  },
];

function Gallery(props) {
  const backgroundColor = props.backgroundColor;
  const setBackgroundColor = props.setBackgroundColor;
  const textColor = props.textColor;
  const setTextColor = props.setTextColor;
  const [logoSource, setLogoSource] = useState(logo_black);
  const handleChangeColor = () => {
    setTextColor(textColor === "black" ? "black" : "white");
    setBackgroundColor(backgroundColor === "white" ? "black" : "white");
    setLogoSource(logoSource === logo_black ? logo_black : logo_white);
  };
  const [darkTheme, setDarkTheme] = useState(handleChangeColor);
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkTheme));
    handleChangeColor();
  }, [darkTheme]);

  // const getDefaultTheme = () => {
  // 	const selectedTheme = JSON.parse(localStorage.getItem('dark'));
  // 	return selectedTheme ?? false;
  // };

  return (
    <section className="gallery-section">
      <div className="box">
        <header className="header">
          <div className="title-div">
            <img src={`${logoSource}`} className="title"></img>
          </div>
          <>
            <div className="dark-mode-switch">
              <input type="checkbox" id="switch" />
              <label onClick={handleChangeColor} htmlFor="switch" />
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
      </div>
    </section>
  );
}

export default Gallery;