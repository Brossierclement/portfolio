import "../button/button.scss";

function Button({ name }) {
  return (
    <a className="btn" href="#">
      <p>{name}</p>
    </a>
  );
}

export default Button;
