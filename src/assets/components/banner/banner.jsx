import "../banner/banner.scss";

function Banner({ img }) {
  return (
    <div className="banner">
      <img src={img} alt="banner" />
    </div>
  );
}

export default Banner;
