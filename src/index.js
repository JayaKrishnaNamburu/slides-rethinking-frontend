import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import * as files from "./slides";
import styles from "./styles.module.css";

const slides = Object.keys(files);

const RenderSlide = ({ component }) => component();

const App = () => {
  const [slide, setSlide] = useState(1);
  const progress = (slide / slides.length) * 100;

  const handleKeyDown = e => {
    const UP = Boolean(e.key === "ArrowRight" || e.key === "PageUp");
    const DOWN = Boolean(e.key === "ArrowLeft" || e.key === "PageDown");
    if (UP && slide < slides.length) {
      e.preventDefault();
      setSlide(slide + 1);
    }

    if (DOWN && slide > 1 && slide <= slides.length) {
      e.preventDefault();
      setSlide(slide - 1);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [slide]);

  return (
    <Fragment>
      <RenderSlide component={files[slides[slide - 1]]} />
      <div className={styles.slider} data-slide-id={slide}>
        <span
          className={styles.progress}
          style={{ width: `${progress}%` }}
        ></span>
      </div>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
