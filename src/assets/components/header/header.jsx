import "../header/header.scss";
import { useContext, useState } from "react";
import { DataContext } from "../../../App";
import hammer from "../../../../public/images/gavel-solid.svg";
import menu from "../../../../public/images/bars-solid.svg";
import { Link } from "react-router-dom";
function Header({ title, titled }) {
  const data = useContext(DataContext);
  const [isActive, setIsActive] = useState();
  return (
    <header className="header">
      <div className="topbar">
        <div className="header-navigation">
          <Link to={"/"}>
            <img className="hammer" src={hammer} alt="" />
          </Link>
          <nav className="menu">
            <button onClick={() => setIsActive(!isActive)} className="menu-btn">
              <img src={menu} alt="" />
            </button>
            <div
              className={`menu-content ${
                isActive ? "menu-content-active" : ""
              }`}
            >
              <ul>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="header-menu">
          <img src={menu} alt="" className="menu" />
        </div>
      </div>
      <section className="introduce">
        <h1 className="me">{title}</h1>
        <p className="job">{titled}</p>
      </section>
    </header>
  );
}
export default Header;
