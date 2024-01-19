import { useState } from "react";
import "../carousel/carousel.scss";
import { Link } from "react-router-dom";

function Carousel({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = data.projects;

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  console.log(currentIndex);

  return (
    <>
      {data ? (
        <div className="carousel">
          <Link className="carousel-link" href="">
            <img src={images[currentIndex].logo} alt="" />
          </Link>
          <Link className="carousel-link" href="">
            <img src={images[(currentIndex + 1) % images.length].logo} alt="" />
          </Link>
          <button className="left" onClick={next}>
            Prev
          </button>
          <button className="right" onClick={prev}>
            Next
          </button>
        </div>
      ) : (
        <p>Error...</p>
      )}
    </>
  );
}

export default Carousel;
