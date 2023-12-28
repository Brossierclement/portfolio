import "../button/button.scss";

function Button({ name, background, color }) {
  return (
    <a
      className="btn"
      href="#"
      style={{ background: `${background}`, color: `${color}` }}
    >
      {name}
    </a>
  );
}

export default Button;
