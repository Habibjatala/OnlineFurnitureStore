import React from "react";
import { Carousel } from "flowbite-react";

const HeroSection = () => {
  return (
    <div>
      <div className="h-60 sm:h-[400px] xl:h-95 2xl:h-100 rounded-none">
        <Carousel className="!rounded-none">
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
            className="rounded-none"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
            className="rounded-none"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
            className="rounded-none"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
            className="rounded-none"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
            className="rounded-none"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
