import "../header/header.scss";

function Header({ logo }) {
  return (
    <header className="header">
      <img src={logo} alt="Logo" />
      <a href="#">brossier.clement@proton.me</a>
    </header>
  );
}

export default Header;
