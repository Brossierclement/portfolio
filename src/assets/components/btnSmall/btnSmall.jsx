import "./btnSmall.scss";
function BtnSmall({ url, logo }) {
  return (
    <a className="social" href={url} target="blank">
      <img src={logo} alt="" />
    </a>
  );
}
export default BtnSmall;
