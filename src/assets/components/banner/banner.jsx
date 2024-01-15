import "../banner/banner.scss";

function Banner({ img, styles }) {
  return (
    <div style={styles} className="banner">
      <img src={img} alt="banner" />
    </div>
  );
}

export default Banner;
