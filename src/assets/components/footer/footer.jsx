import "../footer/footer.scss";
import BtnSmall from "../btnSmall/btnSmall";
function Footer({ data }) {
  return (
    <footer className="footer">
      <nav className="networks">
        {data.map((item) => (
          <BtnSmall key={item.id} url={item.url} logo={item.logo} />
        ))}
      </nav>
      <p>@Copyright 2024 - Clément Brossier</p>
    </footer>
  );
}
export default Footer;
