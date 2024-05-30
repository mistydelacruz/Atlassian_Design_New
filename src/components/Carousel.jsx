/***************************************
 * Created by: Misty Dela Cruz
 * Created on: 4/15/2024
 * Last Modified: 5/20/2024
 * Updates:
 * Carousel is working.
 * Next: make it looping or endless.
 ***************************************/

import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/carouselData";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);
  {
    /*useState to change between images*/
  }
  return (
    <>
      <div className="carousel">
        {" "}
        {/*Divider for the logo*/}
        <div
          className="carousel-inner"
          style={{ backgroundImage: `url(${images[currImg].img})` }}
        >
          {" "}
          {/*Divider for the inner carousel*/}
          <div
            className="carousel-left"
            onClick={() => {
              currImg > 0 && setCurrImg(currImg - 1);
            }}
          >
            {" "}
            {/*Divider for the left arrow icon, checks if currImg > 0 AND currImg decreases by 1*/}
            {/* <KeyboardArrowLeftIcon style={{ fontSize: 30 }} /> */}
          </div>
          <div className="carousel-center"></div>
          <div
            className="carousel-right"
            onClick={() => {
              currImg < images.length - 1 && setCurrImg(currImg + 1);
            }}
          >
            {" "}
            {/*Divider for the right arrow icon, checks if currImg < images.length - 1 AND currImg increases by 1*/}
            {/* <KeyboardArrowRightIcon style={{ fontSize: 30 }} /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
