import React from "react";
import "./AboutUs.scss";
import QC from "../../../assets/HomePage/AboutUS/QC.webp";
import ClockIcon from "../../../assets/HomePage/AboutUS/realTime.webp";
import DollarIcon from "../../../assets/HomePage/AboutUS/icon-dollar.webp";
import SampleIcon from "../../../assets/HomePage/AboutUS/icon-sample.webp";
const AboutUS = () => {
  return (
    <div className="aboutUsParent px-20 py-5 w-full ">
      <h1 className="text-black text-[25px] font-bold py-3">
        Why Ingredients Xchange
      </h1>
      <div className="aboutUsContent w-full flex flex-row justify-between ">
        <div className="left flex flex-col items-start gap-3 w-[50%]">
          <div className="description text-[22px] font-semibold">
            Ingredients Online is the premier e-commerce marketplace for bulk
            and wholesale ingredients. With B2B transactions increasingly moving
            online, we are at the forefront of the digital revolution thanks to
            our cutting-edge technology and a fearless focus on innovation. As
            we help build a new kind of supply chain, we firmly believe that our
            continued ability to lead depends on the growth of the businesses
            who buy and sell on Ingredients Online. That’s why our main priority
            at all times is to create maximum value for them. It is our
            conviction that when all of us are at our best, today’s challenges
            in ingredient sourcing can serve as powerful launch pads toward a
            brighter future.
          </div>
          <div className="underline text-[22px] font-semibold text-black cursor-pointer">
            Read More
          </div>
        </div>
        <div className="right w-[50%] flex flex-col items-center gap-8 justify-start">
          <div className="flex items-center gap-2 justify-end w-full">
            <div className="icon w-[10%]">
              <img src={ClockIcon} alt="QC"></img>
            </div>
            <div className="description w-[60%] text-[28px]">
              Downloadable QC
            </div>
          </div>
          <div className="flex items-center gap-2 justify-end w-full">
            <div className="icon w-[10%]">
              <img src={QC} alt="QC"></img>
            </div>
            <div className="description text-[28px] w-[60%]">
              Documents Real-Time U.S. Inventory
            </div>
          </div>
          <div className="flex items-center gap-2 justify-end w-full">
            <div className="icon w-[10%]">
              <img src={DollarIcon} alt="QC"></img>
            </div>
            <div className="description text-[28px] w-[60%]">Tier Pricing</div>
          </div>
          <div className="flex items-center gap-2 justify-end  w-full">
            <div className="icon w-[10%]">
              <img src={SampleIcon} alt="QC"></img>
            </div>
            <div className="description text-[28px] w-[60%]">
              Free Sample Requests
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
