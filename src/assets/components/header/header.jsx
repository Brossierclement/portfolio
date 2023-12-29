import "../header/header.scss";

function Header({ logo, background }) {
  return (
    <header className="header">
      <div className="topbar">
        <img src={logo} alt="Logo" />
        <a href="#">brossier.clement@proton.me</a>
      </div>

      <div className="banner">
        <img src={background} alt="banner" />
      </div>
    </header>
  );
}

export default Header;
