import "../header/header.scss";
import eye from "../../images/eye-solid.svg";
import Button from "../button/button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link className="return" to={"/"}>
        <img src={eye} alt="Logo" />
      </Link>
      <Button
        className={"email"}
        name={"brossier.clement@proton.me"}
        link={"mailto:brossier.clement@proton.me"}
      />
    </header>
  );
}

export default Header;
