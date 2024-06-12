/***************************************
 * Created by: Misty Dela Cruz
 * Created on: 4/15/2024
 * Last Modified: 5/20/2024
 * Updates:
 * Carousel is working
 * Next: make it looping or endless
 ***************************************/

import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/carouselData";
import ArrowLeftIcon from "@atlaskit/icon/glyph/arrow-left";
import ArrowRightIcon from "@atlaskit/icon/glyph/arrow-right";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  /***************************************
   *     CAROUSEL LEFT CLICK HANDLE      *
   * Uses ternary logic
   * Checks if currImg is EQUAL to 0
   * If so, set currImg to images.length (3) - 1 (last img in the array (2))
   * Else, keep clicking left
   ***************************************/
  const handleLeftClick = () => {
    setCurrImg((currImg) => (currImg === 0 ? images.length - 1 : currImg - 1));
  };

  /***************************************
   *     CAROUSEL RIGHT CLICK HANDLE     *
   * Uses ternary logic
   * Checks if currImg is EQUAL to images.length (3) - 1 (last img in the array (2))
   * If so, set currImg to 0
   * Else, keep clicking right
   ***************************************/
  const handleRightClick = () => {
    setCurrImg((currImg) => (currImg === images.length - 1 ? 0 : currImg + 1));
  };

  /***************************************
   *       IMAGE CAROUSEL COMPONENT      *
   * Carousel is divided into 3 parts
    - Left side
    - Inner (center)
    - Right side
   * Left side controls the left arrow for navigating (same for right side)
   * The inner portion displays the images as background images
  ****************************************/
  return (
    <>
      <div className="carousel">
        {/***** INNER CAROUSEL *****/}
        <div
          className="carousel-inner"
          style={{ backgroundImage: `url(${images[currImg].img})` }}
        >
          {/***** LEFT ARROW *****/}
          <div className="carousel-left" onClick={handleLeftClick}>
            <ArrowLeftIcon></ArrowLeftIcon>
          </div>

          {/***** CENTER *****/}
          <div className="carousel-center"></div>

          {/***** RIGHT ARROW *****/}
          <div className="carousel-right" onClick={handleRightClick}>
            <ArrowRightIcon></ArrowRightIcon>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
