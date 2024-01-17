import "../button/button.scss";
function Button({ logo, url }) {
  return (
    <a className="button" href={url} target="blank">
      <img className="icon" src={logo} alt="" />
    </a>
  );
}
export default Button;
