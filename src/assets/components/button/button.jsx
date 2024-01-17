import "../button/button.scss";
function Button({ data }) {
  return (
    <a className="button" href={data.link} target="blank">
      <img className="icon" src={data.name} alt="" />
    </a>
  );
}
export default Button;
