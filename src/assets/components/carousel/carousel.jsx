import { useState } from "react";
import "../carousel/carousel.scss";

function Carousel({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = data.examples;
  let right = () => {
    /* setCurrentIndex prend une fonction en argument, où prevIndex représente
       la valeur actuellement de currentIndex.
       Cette fonction est async et renvoie la nouvelle valeur assigné à currentIndex. */
    setCurrentIndex((prevIndex) => prevIndex + 1);
    console.log(currentIndex);
  };
  let left = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
    console.log(currentIndex);
  };
  if (currentIndex >= images.length) {
    setCurrentIndex(0);
  } else if (currentIndex <= -1) {
    setCurrentIndex(2);
  }
  console.log(currentIndex);
  return (
    <div className="carousel">
      <img className="examples" src={data.examples[currentIndex]} alt="" />
      <nav className="arrows">
        <button className="left" onClick={left}>
          <i className="fa-solid fa-caret-left fa-xl"></i>
        </button>
        <button className="right" onClick={right}>
          <i className="fa-solid fa-caret-right fa-xl"></i>
        </button>
      </nav>
    </div>
  );
}

export default Carousel;
