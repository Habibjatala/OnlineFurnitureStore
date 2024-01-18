import { Button } from "flowbite-react";
import React, { Component } from "react";
// import CardsCarousel from "../../../common/Carousel/CardsCarousel";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const bottomSliderData = [
  {
    id: 0,
    image: "/images/store/1.webp",
    title: "Organic Flax Seed Oil by Botanic Innovations",
    factory: "Jungbunzlauer Group",
    text: "Mit unserem individuellen Möbel-Konfigurator kannst du ganz einfach dein persönliches Designerstück kreieren. Entwerfe es nach deinen Wünschen und erwecke es zum Leben!",
  },
  {
    id: 1,
    image: "/images/store/2.webp",
    title: "Organic Flax Seed Oil by Botanic Innovations",
    factory: "pearl Group",
    text: "Verantwortungsvoller Umgang mit Holz als Rohstoff und Regionalität aus Leipzig sichern unsere Nachhaltigkeit. Unsere Möbel schonen die Umwelt und unterstützen die Region",
  },
  {
    id: 2,
    image: "/images/store/3.webp",
    title: "Organic Flax Seed Oil by Botanic Innovations",
    factory: "Botanic Group",
    text: "Unsere Tischler bieten dir persönliche und kompetente Beratung bei der Wahl deiner Möbel. Lass dich von unseren Fachleuten beraten und finde genau das, was du suchst!",
  },
  {
    id: 3,
    image: "/images/store/4.webp",
    title: "Organic Flax Seed Oil by Botanic Innovations",
    factory: "Essentia Protein Group",
    text: "Unsere Möbel sind aus hochwertigen Materialien gefertigt und mit Sorgfalt hergestellt, damit du lange Freude daran hast. Bei uns bekommst du die beste Qualität!",
  },
  {
    id: 4,
    image: "/images/store/5.webp",
    title: "Organic Flax Seed Oil by Botanic Innovations",
    factory: "Pearl Group",
    text: "Verantwortungsvoller Umgang mit Holz als Rohstoff und Regionalität aus Leipzig sichern unsere Nachhaltigkeit. Unsere Möbel schonen die Umwelt und unterstützen die Region",
  },
  {
    id: 5,
    image: "/images/store/6.webp",
    title: "Organic Flax Seed Oil by Botanic Innovations",
    factory: "Pearl Group",
    text: "Unsere Tischler bieten dir persönliche und kompetente Beratung bei der Wahl deiner Möbel. Lass dich von unseren Fachleuten beraten und finde genau das, was du suchst!",
  },
];
const TopProducts = () => {
  const settings = {
    arrows: true,

    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
        },
      },
    ],
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" bg-white shadow">
      <div className="text-[26px] font-semibold pl-10 py-5">New Product</div>
      <p className="">New Product</p>

      {/* <CardsCarousel /> */}

      <div className="">
        <Slider {...settings}>
          {bottomSliderData &&
            bottomSliderData.map((item) => (
              // Your JSX code here, for example:

              <div className="border border-1 border-gray h-100 " key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="manufacturerName text-[14px] px-2 py-2 border-box">
                  <Link className="underline  ">{item.title}</Link>
                </div>
                <hr className=" border-b   border-gray-300 " />
                <div className="manufacturerName  px-2 py-2">
                  <p className="text-xl font-bold">Factory</p>
                  <p className="text-[12px]">{item.factory}</p>
                </div>
                <div className="mt-10 mb-14 p-2">
                  <p className="text-red-600 text-sm">Login To See Price!</p>
                </div>
                <div className="mt-10  p-2">
                  <Button color="light" className="text-gray-500">
                    Deliver
                  </Button>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopProducts;
