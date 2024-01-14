import "../header/header.scss";
import eye from "../../images/eye-solid.svg";
import Button from "../button/button";
import { Link } from "react-router-dom";

function Header({ background, styles }) {
  return (
    <header className="header">
      <div className="topbar">
        <Link className="return" to={"/"}>
          <img src={eye} alt="Logo" />
        </Link>
        <Button
          className={"email"}
          name={"brossier.clement@proton.me"}
          link={"mailto:brossier.clement@proton.me"}
        />
      </div>

      <div style={styles} className="banner">
        <img src={background} alt="banner" />
      </div>
    </header>
  );
}

export default Header;
