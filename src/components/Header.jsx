import React from "react";
import logoSpotify from "../assets/logo/spotify-logo.png";

// class HTML - className JavaScript

const Header = () => {
  return (
    // write a variable javascript (logoSpotify) beetween in html = {}
    // "id" in div its not a good pratice for css, so i being use className (JavaScript) or class (HTML)
    <div className="header">
      <img src={logoSpotify} alt="Logo do Spotify" />

      <a className="header__link" href="/">
      <h1>Spotify</h1>
      </a>
    </div>
  );
};

export default Header;
