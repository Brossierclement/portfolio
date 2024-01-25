import "../btn/btn.scss";
function Btn({ name, url }) {
  return (
    <a className="btn-container" href={url} target="blank">
      <button className="btn">{name}</button>
    </a>
  );
}
export default Btn;
