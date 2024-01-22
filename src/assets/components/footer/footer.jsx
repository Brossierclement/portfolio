import "../footer/footer.scss";
function Footer({ data }) {
  console.log(data);
  return (
    <footer className="footer">
      <nav className="networks">
        {data.map((item) => (
          <a className="social" key={item.id} href={item.url} target="blank">
            <img src={item.logo} alt="" />
          </a>
        ))}
      </nav>
      <p>@Copyright 2024 - Clément Brossier</p>
    </footer>
  );
}
export default Footer;
