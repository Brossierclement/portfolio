import "../button/button.scss";

function Button({ name, link, className }) {
  return (
    <a className={`btn ${className}`} href={link} download>
      <p>{name}</p>
    </a>
  );
}

export default Button;
