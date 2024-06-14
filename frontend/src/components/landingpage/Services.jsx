import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../assets/services.css";
import Hammer from "hammerjs";
import MicroSlider from "micro-slider";

const Services = () => {
  const sliderRef = useRef(null);
  const carousel1 = useRef(null);

  const initializeSlider = () => {
    const CaroS = document.querySelector("#Carousel-slider");
    const CaroSlider = new MicroSlider(sliderRef.current, {
      indicators: true,
      indicatorText: "",
    });
    const hammer = new Hammer(sliderRef.current);
    const CaroSTimer = 5000;
    let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);

    sliderRef.current.addEventListener("mouseenter", (e) => {
      clearInterval(CaroAutoplay);
    });

    sliderRef.current.addEventListener("mouseleave", (e) => {
      clearInterval(CaroAutoplay);
      CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
    });

    sliderRef.current.addEventListener("click", (e) => {
      clearInterval(CaroAutoplay);
    });

    hammer.on("tap", (e) => {
      clearInterval(CaroAutoplay);
    });

    hammer.on("swipe", (e) => {
      clearInterval(CaroAutoplay);
      CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
    });

    const slideLinks = document.querySelectorAll(".slider-item");
    if (slideLinks && slideLinks.length > 0) {
      slideLinks.forEach((el) => {
        el.addEventListener("click", (e) => {
          e.preventDefault();
          const href = el.dataset.href;
          const target = el.dataset.target;
          if (href !== "#") window.open(href, target);
        });
      });
    }
  };

  const goToServices = (url) => {
    location.href = url;
  };

  useEffect(() => {
    sliderRef.current.addEventListener("click", () => {
      goToServices("/services");
    });
    setTimeout(() => {
      initializeSlider();
    }, 1000);
  }, []);

  return (
    <>
      <section
        aria-label="blog"
        className="section blog shadow-xl py-10 sm:py-20"
        id="services"
      >
        <div className="container hide">
          <h1 className=" section-title text-center text-primary_red text-4xl font-bold sm:text-4xl md:text-5xl dark:text-white" >
            OUR SERVICES
          </h1>
          <p className="text-center text-[3vh] text-paragraph_black mt-4">
            Get our insurance for the best possible coverage at the most
            affordable cost.
          </p>
          <div id="Carousel-slider" className="h-[450px]">
            <div className="Carousel-slider" ref={sliderRef}>

              <div className="slider-item superHero1" data-href="#">
                <img
                  onClick={() => { goToServices('/home') }}
                  ref={carousel1}
                  className="w-full h-full rounded-[48px]"
                  src="images/Website/Services/JGInfinit36.jpg"
                  alt=""
                />
              </div>

              <div className="slider-item superHero2" data-href="#">
                <img
                  ref={carousel1}
                  className="w-full h-full rounded-[48px]"
                  src="images/Website/Services/JGInfinit38.jpg"
                  alt=""
                />
              </div>
              <div className="slider-item superHero3" data-href="#">
                <img
                  ref={carousel1}
                  className="w-full h-full rounded-[48px]"
                  src="images/Website/Services/JGInfinit42.jpg"
                  alt=""
                />
              </div>
              <div className="slider-item superHero4" data-href="#">
                <img
                  ref={carousel1}
                  className="w-full h-full rounded-[48px]"
                  src="images/Website/Services/JGInfinit43.jpg"
                  alt=""
                />
              </div>
              <div className="slider-item superHero5" data-href="#">
                <img
                  ref={carousel1}
                  className="w-full h-full rounded-[48px]"
                  src="images/Website/Services/JGInfinit45.jpg"
                  alt=""
                />
              </div>
              <div className="slider-item superHero6" data-href="#">
                <img
                  ref={carousel1}
                  className="w-full h-full rounded-[48px]"
                  src="images/Website/Services/JGInfinit47.jpg"
                  alt=""
                />
              </div>
              <div className="slider-item superHero7" data-href="#">
                <img
                  ref={carousel1}
                  className="w-full h-full rounded-[48px]"
                  src="images/Website/Services/JGInfinit53.jpg"
                  alt=""
                />
              </div>
              <div className="slider-item superHero8" data-href="#">
                <img
                  ref={carousel1}
                  className="w-full h-full rounded-[48px]"
                  src="images/Website/Services/JGInfinit56.jpg"
                  alt=""
                />
              </div>
              <div className="slider-item superHero9" data-href="#">
                <img
                  ref={carousel1}
                  className="w-full h-full rounded-[48px]"
                  src="images/Website/Services/JGInfinit58.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
