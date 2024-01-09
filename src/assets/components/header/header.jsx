import "../header/header.scss";
import eye from "../../images/eye-solid.svg";

function Header({ background }) {
  return (
    <header className="header">
      <div className="topbar">
        <img src={eye} alt="Logo" />
        <a href="#">brossier.clement@proton.me</a>
      </div>

      <div className="banner">
        <img src={background} alt="banner" />
      </div>
    </header>
  );
}

export default Header;
