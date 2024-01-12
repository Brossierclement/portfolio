import "../footer/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <nav className="socials">
        <a
          href="https://github.com/Brossierclement"
          target="blank"
          className="socials-link"
        >
          <i className="fa-brands fa-github size"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/clement-brossier/"
          target="blank"
          className="socials-link"
        >
          <i className="fa-brands fa-linkedin size"></i>
        </a>
        <a
          href="https://twitter.com/Gulnyr_"
          target="blank"
          className="socials-link"
        >
          <i className="fa-brands fa-twitter size"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCqr9oNYYGHxnfPVAbNrOqoQ"
          target="blank"
          className="socials-link"
        >
          <i className="fa-brands fa-youtube size"></i>
        </a>
      </nav>
      <p>clément brossier © 2024</p>
    </footer>
  );
}

export default Footer;
