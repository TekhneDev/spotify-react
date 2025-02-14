import { Link } from "react-router-dom";
import logoSpotify from "../assets/logo/spotify-logo.png";

// class HTML - className JavaScript

const Header = () => {
  return (
    // write a variable javascript (logoSpotify) beetween in html = {}
    // "id" in div its not a good pratice for css, so i being use className (JavaScript) or class (HTML)
    <div className="header">
      <Link to="/">
        <img src={logoSpotify} alt="Logo do Spotify" />
      </Link>

      <Link to="/" className="header__link">
        <h1>Spotify</h1>
      </Link>
    </div>
  );
};

export default Header;
