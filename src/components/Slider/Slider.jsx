import React from "react";
import Slider from "react-slick";
import slideOne from "../../images/pancakes.jpg";
import slideTwo from "../../images/salad.jpg";
import slideThree from "../../images/steak.jpg";
import "./slider.scss";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <>
      <div
        className="slider__wrapper"
        style={{
          
        }}
      >
        <Slider {...settings}>
          <div
            style={{
              width: "75vw",
              height: "33vw"
            }}
          >
            <div
              className="slider__left"
            >
              <img
                className="slider__image"
                src={slideOne}
                alt="pancakes"
                style={{
                  width: "33vw",
                  maxWidth: "442px",
                  height: "33vw",
                  maxHeight: "442px"
                }}
              />
              <div
                style={{
                  color: "white",
                  fontSize: "13px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <h2
                  className="slider__title"
                >
                  Chocolate pancakes
                </h2>
                <span className="slider__decor decor"></span>
                <p className="slider__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
                </p>
                <p className="slider__detail">
                  Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum,
                  enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "75vw",
              height: "33vw"
            }}
          >
            <div
              className="slider__left"
            >
              <img
                className="slider__image"
                src={slideTwo}
                alt="salad"
                style={{
                  width: "33vw",
                  maxWidth: "442px",
                  height: "33vw",
                  maxHeight: "442px"
                }}
              />
              <div
                style={{
                  color: "white",
                  fontSize: "13px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <h2
                  className="slider__title"
                >
                  Savory Pork Salad
                </h2>
                <span className="slider__decor decor"></span>
                <p className="slider__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
                </p>
                <p className="slider__detail">
                  Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum,
                  enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "75vw",
              height: "33vw"
            }}
          >
            <div
              className="slider__left"
            >
              <img
                className="slider__image"
                src={slideThree}
                alt="steak"
                style={{
                  width: "33vw",
                  maxWidth: "442px",
                  height: "33vw",
                  maxHeight: "442px"
                }}
              />
              <div
                style={{
                  color: "white",
                  fontSize: "13px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <h2
                  className="slider__title"
                >
                  Rib-Eye Steak
                </h2>
                <span className="slider__decor decor"></span>
                <p className="slider__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
                </p>
                <p className="slider__detail">
                  Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum,
                  enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.
                </p>
              </div>
            </div>
          </div>
      </Slider>
    </div>
    </>
  );
}