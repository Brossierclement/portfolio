import "../header/header.scss";
import { useContext } from "react";
import { DataContext } from "../../../App";
import hammer from "../../../../public/images/gavel-solid.svg";
import menu from "../../../../public/images/bars-solid.svg";
import vod from "../../../../public/videos/w40k.mp4";
function Header() {
  const data = useContext(DataContext);
  return (
    <header className="header">
      <video className="background" src={vod} autoPlay loop muted></video>
      <div className="topbar">
        <div className="header-navigation">
          <img className="hammer" src={hammer} alt="" />
          <nav className="navigation">
            <ul>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-menu">
          <img src={menu} alt="" className="menu" />
        </div>
      </div>
      <section className="introduce">
        <h1 className="me">Clément Brossier</h1>
        <p className="job">Front-End Developer</p>
      </section>
    </header>
  );
}
export default Header;
